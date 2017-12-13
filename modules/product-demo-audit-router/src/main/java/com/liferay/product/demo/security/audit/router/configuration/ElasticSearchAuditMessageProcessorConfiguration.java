/**
 * Copyright (c) 2000-2017 Liferay, Inc. All rights reserved.
 *
 * The contents of this file are subject to the terms of the Liferay Enterprise
 * Subscription License ("License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License by
 * contacting Liferay, Inc. See the License for the specific language governing
 * permissions and limitations under the License, including but not limited to
 * distribution rights of the Software.
 *
 *
 *
 */

package com.liferay.product.demo.security.audit.router.configuration;

import aQute.bnd.annotation.metatype.Meta;

import com.liferay.portal.configuration.metatype.annotations.ExtendedObjectClassDefinition;

@ExtendedObjectClassDefinition(category = "Product demo")
@Meta.OCD(
	id = "om.liferay.product.demo.security.audit.router.configuration.ElasticSearchAuditMessageProcessorConfiguration",
	localization = "content/Language",
	name = "elasticsearch.audit.message.processor.configuration.name"
)
public interface ElasticSearchAuditMessageProcessorConfiguration {

	@Meta.AD(deflt = "false", required = false)
	public boolean enabled();

}