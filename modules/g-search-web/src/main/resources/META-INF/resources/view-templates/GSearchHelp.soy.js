// This file was automatically generated from GSearchHelp.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GSearchHelp.
 * @public
 */

if (typeof GSearchHelp == 'undefined') { var GSearchHelp = {}; }


GSearchHelp.render = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div aria-hidden="true" aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'HelpModalTitle" class="modal fade" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'HelpModal" role="dialog" tabindex="-1"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body ajax-loader-placeholder"></div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal" type="button">close</button></div></div></div></div>');
};
if (goog.DEBUG) {
  GSearchHelp.render.soyTemplateName = 'GSearchHelp.render';
}


GSearchHelp.button = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<button class="btn btn-link" id="#' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'HelpModalButton" data-target="#' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'HelpModal" data-toggle="modal" type="button">syntax-help</button>');
};
if (goog.DEBUG) {
  GSearchHelp.button.soyTemplateName = 'GSearchHelp.button';
}
