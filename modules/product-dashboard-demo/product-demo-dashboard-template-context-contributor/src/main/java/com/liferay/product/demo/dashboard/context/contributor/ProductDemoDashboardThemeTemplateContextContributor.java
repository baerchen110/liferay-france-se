package com.liferay.product.demo.dashboard.context.contributor;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.osgi.service.component.annotations.Component;

import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.template.TemplateContextContributor;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.WebKeys;

@Component(
	immediate = true,
	property = {"type=" + TemplateContextContributor.TYPE_THEME},
	service = TemplateContextContributor.class
)
public class ProductDemoDashboardThemeTemplateContextContributor implements TemplateContextContributor {
	
	private static Log _log = LogFactoryUtil.getLog(ProductDemoDashboardThemeTemplateContextContributor.class);
	
	@Override
	public void prepare(Map<String, Object> contextObjects, HttpServletRequest request) {
		
		ThemeDisplay td = (ThemeDisplay) request.getAttribute(WebKeys.THEME_DISPLAY);
		
		boolean isPublicPage = true;
				
		try {
			
			isPublicPage = td.getLayout().isPublicLayout();
			
			
		} catch (SystemException e) {
			_log.error(e,e);
		}
		
		_log.info(td.getLayout().getFriendlyURL() + " => " + isPublicPage);
		
		contextObjects.put("demo_is_private_page", !isPublicPage);
		contextObjects.put("demo_is_public_page", isPublicPage);
		
	}

}