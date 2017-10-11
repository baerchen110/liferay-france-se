// This file was automatically generated from GSearchField.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GSearchField.
 * @public
 */

if (typeof GSearchField == 'undefined') { var GSearchField = {}; }


GSearchField.render = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div><div class="input-group"><input autofocus class="form-control input-lg" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SearchField" maxlength="100" placeholder="keywords" required="required" type="text" value="" /><span class="input-group-btn"><button class="btn btn-primary input-lg" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SearchButton" type="button">search</button></span></div><div class="message-wrapper" data-title="" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SearchFieldMessage"></div></div>');
};
if (goog.DEBUG) {
  GSearchField.render.soyTemplateName = 'GSearchField.render';
}
