// This file was automatically generated from GSearchSort.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GSearchSort.
 * @public
 */

if (typeof GSearchSort == 'undefined') { var GSearchSort = {}; }


GSearchSort.render = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.results && opt_data.results.items && opt_data.results.items.length > 0) ? '<div><div class="dropdown gsearch-dropdown"><button aria-expanded="true" aria-haspopup="true" class="btn btn-link dropdown-toggle" data-toggle="dropdown" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SortField" type="button">sort-by : <span class="selection"></span><span class="caret"></span></button><ul aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SortField" class="dropdown-menu" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SortFieldOptions"><li class="selected"><a data-value="title" href="#">sort-by-title</a></li><li><a data-value="last-modified" href="#">sort-by-modified</a></li></ul></div><div class="dropdown gsearch-dropdown"><button aria-expanded="true" aria-haspopup="true" class="btn btn-link dropdown-toggle" data-toggle="dropdown" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SortDirection" type="button">sort-direction: <span class="selection"></span><span class="caret"></span></button><ul aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SortDirection" class="dropdown-menu" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SortDirectionOptions"><li class="selected"><a data-value="asc" href="#">sort-asc</a></li><li><a data-value="desc" href="#">sort-desc</a></li></ul></div></div>' : '');
};
if (goog.DEBUG) {
  GSearchSort.render.soyTemplateName = 'GSearchSort.render';
}
