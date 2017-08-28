package com.liferay.presales.france;

import org.apache.commons.io.IOUtils;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.vision.v1.Vision;
import com.google.api.services.vision.v1.VisionScopes;
import com.google.api.services.vision.v1.model.AnnotateImageRequest;
import com.google.api.services.vision.v1.model.AnnotateImageResponse;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesRequest;
import com.google.api.services.vision.v1.model.BatchAnnotateImagesResponse;
import com.google.api.services.vision.v1.model.EntityAnnotation;
import com.google.api.services.vision.v1.model.Feature;
import com.google.api.services.vision.v1.model.Image;
import com.google.common.collect.ImmutableList;
import com.liferay.asset.kernel.model.AssetEntry;
import com.liferay.asset.kernel.service.AssetEntryLocalServiceUtil;
import com.liferay.document.library.kernel.model.DLFileEntry;
import com.liferay.document.library.kernel.service.DLFileEntryLocalServiceUtil;
import com.liferay.portal.kernel.exception.ModelListenerException;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.model.BaseModelListener;
import com.liferay.portal.kernel.model.ModelListener;


import java.io.IOException;
import java.io.InputStream;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.List;

import org.osgi.framework.BundleContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;

@Component(immediate = true, service = ModelListener.class)
public class GoogleVisionListener extends BaseModelListener<AssetEntry>{

	@Activate
	public void activate(BundleContext context) {
		String location = context.getBundle().getLocation();
		_log.info("bundle " + location + " activated!!!");
	}

	@Override
	public void onAfterCreate(AssetEntry model) throws ModelListenerException {
		_log.info("upload document! - onAfterCreate");
		tagImage(model);
		super.onAfterCreate(model);
	}

	private void tagImage(AssetEntry model) {
		try {
			String className = DLFileEntry.class.getName();
			if (model.getClassName().equals(className)) {
				long classPK = model.getClassPK();
				String[] tagsArray = tagGoogleImage(model);
				if(tagsArray==null){
					_log.error("Your document won't be tagged, please check everything is alright (API keys etc)");
					return;
				}
				for (String tag : tagsArray) {
					_log.info(String.format(("tagging document tag: %s"), tag));
				}
				long[] categoryIds = null;
				AssetEntryLocalServiceUtil.updateEntry(model.getUserId(), model.getGroupId(), className, classPK,
						categoryIds, tagsArray);
			}
		} catch (Exception e) {
			_log.error(e);
		}

	}


	private String[] tagGoogleImage(AssetEntry model) {
		List<String> tagList = new ArrayList<String>();

		try {
			DLFileEntry fileEntry = DLFileEntryLocalServiceUtil.getDLFileEntry(model.getClassPK());
			_log.info("google authentication");
			this.vision = getVisionService();
			InputStream is = fileEntry.getContentStream();
			byte[] bytes = IOUtils.toByteArray(is);
			_log.info("before encoding");
			Image img = new Image().encodeContent(bytes);
			AnnotateImageRequest request =
			        new AnnotateImageRequest()
			            .setImage(img)
			            .setFeatures(ImmutableList.of(
			                new Feature()
			                    .setType("LABEL_DETECTION")
			                    .setMaxResults(MAX_LABELS)));
			
			_log.info("trying to annotated");
			    Vision.Images.Annotate annotate =
			        vision.images()
			            .annotate(new BatchAnnotateImagesRequest().setRequests(ImmutableList.of(request)));
			    // Due to a bug: requests to Vision API containing large images fail when GZipped.
			    annotate.setDisableGZipContent(true);
			    // [END construct_request]

			    // [START parse_response]
			    BatchAnnotateImagesResponse batchResponse = annotate.execute();
			    assert batchResponse.getResponses().size() == 1;
			    AnnotateImageResponse response = batchResponse.getResponses().get(0);
			    if (response.getLabelAnnotations() == null) {
			      throw new IOException(
			          response.getError() != null
			              ? response.getError().getMessage()
			              : "Unknown error getting image annotations");
			    }
			    for (EntityAnnotation label: response.getLabelAnnotations()){
			    	_log.info(String.format(("tagging document label: %s"), label.getDescription()));
			    	tagList.add(label.getDescription());
			    }
			    return tagList.toArray(new String[0]);
			    
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


	public static Vision getVisionService() throws IOException, GeneralSecurityException {
		GoogleCredential credential =
				GoogleCredential.getApplicationDefault().createScoped(VisionScopes.all());
		JsonFactory jsonFactory = JacksonFactory.getDefaultInstance();
		return new Vision.Builder(GoogleNetHttpTransport.newTrustedTransport(), jsonFactory, credential)
				.setApplicationName(APPLICATION_NAME)
				.build();
	}
	
	public void connect(Vision vision) {
		this.vision = vision;
	}
	 
	transient Vision vision;
	private static final String APPLICATION_NAME = "Google-VisionLabelSample/1.0";
	private static final int MAX_LABELS = 3;
	
	private static final Log _log = LogFactoryUtil.getLog(GoogleVisionListener.class);
}
