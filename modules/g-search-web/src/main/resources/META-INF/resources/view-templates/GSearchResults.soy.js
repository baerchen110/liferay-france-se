// This file was automatically generated from GSearchResults.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GSearchResults.
 * @public
 */

if (typeof GSearchResults == 'undefined') { var GSearchResults = {}; }


GSearchResults.render = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.results.items && opt_data.results.items.length > 0) {
    var itemList157 = opt_data.results.items;
    var itemListLen157 = itemList157.length;
    for (var itemIndex157 = 0; itemIndex157 < itemListLen157; itemIndex157++) {
      var itemData157 = itemList157[itemIndex157];
      output += GSearchResults.resultItem({item: itemData157});
    }
  } else {
    output += '<div class="text-center no-results">no-results</div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  GSearchResults.render.soyTemplateName = 'GSearchResults.render';
}


GSearchResults.resultItem = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="row"><div class="item"><div class="heading">' + ((opt_data.item.type != '') ? '<span class="type"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.item.link)) + '">[' + soy.$$escapeHtml(opt_data.item.type) + ']</a></span>' : '') + '<h1><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.item.link)) + '">' + soy.$$escapeHtml(opt_data.item.title) + '</a></h1></div><div class="link"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.item.link)) + '">' + soy.$$escapeHtml(opt_data.item.link) + '</a></div><div class="description ">' + ((opt_data.item.date != '') ? '<strong>' + soy.$$escapeHtml(opt_data.item.date) + '</strong> -' : '') + '<span class="highlightable">' + soy.$$escapeHtml(opt_data.item.description) + '</span></div></div></div>');
};
if (goog.DEBUG) {
  GSearchResults.resultItem.soyTemplateName = 'GSearchResults.resultItem';
}
