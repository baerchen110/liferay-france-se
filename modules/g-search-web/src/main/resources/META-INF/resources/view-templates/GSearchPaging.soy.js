// This file was automatically generated from GSearchPaging.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GSearchPaging.
 * @public
 */

if (typeof GSearchPaging == 'undefined') { var GSearchPaging = {}; }


GSearchPaging.render = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.results && opt_data.results.paging && opt_data.results.paging.pages) {
    output += '<div id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'Paging">' + ((opt_data.results.paging.prevStart) ? GSearchPaging.prevStart({prevStart: opt_data.results.paging.prevStart}) : '');
    var pageList127 = opt_data.results.paging.pages;
    var pageListLen127 = pageList127.length;
    for (var pageIndex127 = 0; pageIndex127 < pageListLen127; pageIndex127++) {
      var pageData127 = pageList127[pageIndex127];
      output += GSearchPaging.page({page: pageData127});
    }
    output += ((opt_data.results.paging.nextStart) ? GSearchPaging.nextStart({nextStart: opt_data.results.paging.nextStart}) : '') + '</div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  GSearchPaging.render.soyTemplateName = 'GSearchPaging.render';
}


GSearchPaging.page = function(opt_data, opt_ignored) {
  var output = '';
  var selected__soy135 = opt_data.page.selected ? 'selected' : '';
  output += '<span class="page ' + soy.$$escapeHtmlAttribute(selected__soy135) + '"><a data-value="' + soy.$$escapeHtmlAttribute(opt_data.page.start) + '" href="#">' + soy.$$escapeHtml(opt_data.page.number) + '</a></span>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  GSearchPaging.page.soyTemplateName = 'GSearchPaging.page';
}


GSearchPaging.prevStart = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span class="back"><a data-value="' + soy.$$escapeHtmlAttribute(opt_data.prevStart) + '" href="#">&laquo;</a></span>');
};
if (goog.DEBUG) {
  GSearchPaging.prevStart.soyTemplateName = 'GSearchPaging.prevStart';
}


GSearchPaging.nextStart = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span class="forward"><a data-value="' + soy.$$escapeHtmlAttribute(opt_data.nextStart) + '" href="#">&raquo;</a></span>');
};
if (goog.DEBUG) {
  GSearchPaging.nextStart.soyTemplateName = 'GSearchPaging.nextStart';
}
