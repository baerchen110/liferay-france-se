// This file was automatically generated from GSearchFilters.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace GSearchFilters.
 * @public
 */

if (typeof GSearchFilters == 'undefined') { var GSearchFilters = {}; }


GSearchFilters.render = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.results || ! opt_data.results) ? '<div><div class="dropdown gsearch-dropdown"><button aria-expanded="true" aria-haspopup="true" class="btn btn-link dropdown-toggle" data-toggle="dropdown" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'TypeFilter" type="button"><span class="selection"></span><span class="caret"></span></button><ul aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'TypeFilter" class="dropdown-menu" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'TypeFilterOptions"><li class="selected"><a data-value="everything" href="#">search-everything</a></li><li class="com_liferay_journal_model_JournalArticle"><a data-value="web-content" href="#">web-contents <span class="count"></span></a></li><li class="com_liferay_document_library_kernel_model_DLFileEntry"><a data-value="file" href="#">files <span class="count"></span></a></li><li class="com_liferay_message_boards_kernel_model_MBMessage"><a data-value="discussion" href="#">discussions <span class="count"></span></a></li><li class="com_liferay_blogs_kernel_model_BlogsEntry"><a data-value="blog" href="#">blogs <span class="count"></span></a></li></ul></div><div class="dropdown gsearch-dropdown"><button aria-expanded="true" aria-haspopup="true" class="btn btn-link dropdown-toggle" data-toggle="dropdown" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'ScopeFilter" type="button"><span class="selection"></span><span class="caret"></span></button><ul aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'ScopeFilter" class="dropdown-menu" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'ScopeFilterOptions"><li class="selected"><a data-value="all" href="#">search-everywhere</a></li><li><a data-value="this-site" href="#">search-this-site-only</a></li></ul></div><div class="dropdown gsearch-dropdown"><button aria-expanded="true" aria-haspopup="true" class="btn btn-link dropdown-toggle" data-toggle="dropdown" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'TimeFilter" type="button"><span class="selection"></span><span class="caret"></span></button><ul aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'TimeFilter" class="dropdown-menu" id="' + soy.$$escapeHtmlAttribute(opt_data.portletNamespace) + 'TimeFilterOptions"><li class="selected"><a href="#">anytime</a></li><li><a data-value="last-hour" href="#">last-hour</a></li><li><a data-value="last-day" href="#">last-day</a></li><li><a data-value="last-week" href="#">last-week</a></li><li><a data-value="last-month" href="#">last-month</a></li><li><a data-value="last-year" href="#">last-year</a></li></ul></div></div>' : '');
};
if (goog.DEBUG) {
  GSearchFilters.render.soyTemplateName = 'GSearchFilters.render';
}
