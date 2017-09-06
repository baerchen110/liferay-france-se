package com.liferay.product.demo.context.contributor;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.osgi.service.component.annotations.Component;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.exception.SystemException;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.model.Layout;
import com.liferay.portal.kernel.template.TemplateContextContributor;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.StringPool;
import com.liferay.portal.kernel.util.Validator;
import com.liferay.portal.kernel.util.WebKeys;
import com.liferay.product.demo.context.contributor.util.ThemeCssUtil;
import com.liferay.product.demo.context.contributor.util.UrlUtil;

@Component(
	immediate = true,
	property = {"type=" + TemplateContextContributor.TYPE_THEME},
	service = TemplateContextContributor.class
)
public class ProductDemoThemeTemplateContextContributor implements TemplateContextContributor {
		
	private static final String REDUCTION_PERCENT_DEFAULT = "20";
	private static Log _log = LogFactoryUtil.getLog(ProductDemoThemeTemplateContextContributor.class);
	private static final String CUSTOM_THEME_MAIN_COLOR = "custom-theme-main-color";
	private static final String CUSTOM_THEME_LOGO_REDUCTION_PERCENT = "custom-theme-logo-reduction-percent";
	
	@Override
	public void prepare(Map<String, Object> contextObjects, HttpServletRequest request) {
		
		ThemeDisplay td = (ThemeDisplay) request.getAttribute(WebKeys.THEME_DISPLAY);
		
		boolean isRegularPage = true;
		String css = StringPool.SPACE;
		String reductionPercent = REDUCTION_PERCENT_DEFAULT;
		
		try {
			
			isRegularPage = !isHomePage(td.getLayout());			
			//Color variation CSS
			css = ThemeCssUtil.getInstance().getCss(td.getThemeSetting(CUSTOM_THEME_MAIN_COLOR));
			
			
			String percentSetting = td.getThemeSetting(CUSTOM_THEME_LOGO_REDUCTION_PERCENT);
			if (Validator.isNotNull(percentSetting)) {
				reductionPercent = percentSetting;
			}
			
		
		} catch (SystemException | PortalException e) {
			_log.error(e,e);
		}
		
		contextObjects.put("demo_logo_reduction_percent", reductionPercent);
		contextObjects.put("demo_is_regular_page", isRegularPage);
		contextObjects.put("demo_main_css", css);
		
	}
	
	public boolean isHomePage(Layout currentLayout) throws PortalException, SystemException {
		
		Layout homeLayout = UrlUtil.getHomeLayout(currentLayout.getGroupId());
		return Validator.isNotNull(currentLayout) && Validator.isNotNull(homeLayout) && currentLayout.getFriendlyURL().equals(homeLayout.getFriendlyURL());
		
	}

}