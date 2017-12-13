package com.liferay.product.demo.security.audit.router;

import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.audit.AuditException;
import com.liferay.portal.kernel.audit.AuditMessage;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.security.audit.AuditMessageProcessor;
import com.liferay.product.demo.security.audit.router.configuration.ElasticSearchAuditMessageProcessorConfiguration;

import java.util.Map;

import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;

@Component(
		configurationPid = "com.liferay.portal.security.audit.router.configuration.LoggingAuditMessageProcessorConfiguration",
		immediate = true, property = "eventTypes=*",
		service = AuditMessageProcessor.class
	)
public class ElasticSearchAuditMessageProcessor implements AuditMessageProcessor {
	
	private static final Log _log = LogFactoryUtil.getLog(ElasticSearchAuditMessageProcessor.class);
	
	private volatile ElasticSearchAuditMessageProcessorConfiguration _elasticSearchAuditMessageProcessorConfiguration;

	@Override
	public void process(AuditMessage auditMessage) throws AuditException {
		
		
		if (_elasticSearchAuditMessageProcessorConfiguration.enabled()) {
			System.out.println("ElasticSearchAuditMessageProcessor is currently enabled");
		} else {
			System.out.println("ElasticSearchAuditMessageProcessor is currently disabled");
		}
		
	}
	
	@Activate
	@Modified
	protected void activate(Map<String, Object> properties) {
		_elasticSearchAuditMessageProcessorConfiguration = ConfigurableUtil.createConfigurable(ElasticSearchAuditMessageProcessorConfiguration.class, properties);
	}

}
