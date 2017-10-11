// This file was automatically generated from View.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace View.
 * @public
 */

if (typeof View == 'undefined') { var View = {}; }


View.render = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="container-fluid gsearch-container" id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + GSearchHelp.render(opt_data) + '<div class="col-xs-12 col-md-6 col-lg-6 gsearch-help gsearch-centered"><div class="row">' + GSearchHelp.button(opt_data) + '</div></div><div class="col-xs-12 col-md-6 col-lg-6 gsearch-searchfield gsearch-centered"><div class="row">' + GSearchField.render(opt_data) + '</div></div><div class="col-xs-12 col-md-8 col-lg-8 gsearch-filters gsearch-centered"><div class="row text-center">' + GSearchFilters.render(opt_data) + '</div></div>' + ((opt_data.stats) ? '<div class="col-xs-12 col-md-8 col-lg-8 gsearch-stats gsearch-centered"><div class="row text-center">' + soy.$$escapeHtml(opt_data.stats) + '</div></div>' : '') + '<div class="col-xs-10 col-md-10 col-lg-10 gsearch-sort gsearch-centered"><div class="row">' + GSearchSort.render(opt_data) + '</div></div>' + ((opt_data.results) ? '<div class="col-xs-10 col-md-10 col-lg-10 gsearch-results gsearch-centered" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'SearchResults">' + GSearchResults.render(opt_data) + '</div>' : '') + '<div class="gsearch-paging gsearch-centered text-center"><div class="row text-center">' + GSearchPaging.render(opt_data) + '</div></div></div>');
};
if (goog.DEBUG) {
  View.render.soyTemplateName = 'View.render';
}
