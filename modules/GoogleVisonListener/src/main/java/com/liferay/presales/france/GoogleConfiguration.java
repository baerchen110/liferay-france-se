
package com.liferay.presales.france;

import aQute.bnd.annotation.metatype.Meta;


@Meta.OCD(
	id = "com.liferay.blade.samples.configurationaction.GoogleConfiguration"
)
public interface GoogleConfiguration {

	@Meta.AD(required = false)
	public String fontColor();

	@Meta.AD(required = false)
	public String fontFamily();

	@Meta.AD(required = false)
	public int fontSize();

}


