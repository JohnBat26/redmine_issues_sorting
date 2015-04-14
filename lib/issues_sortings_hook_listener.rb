class IssuesSortingsHookListener < Redmine::Hook::ViewListener
  render_on :view_layouts_base_body_bottom, :partial => 'issues_sorting'

  def view_layouts_base_html_head(context)
    stylesheet_link_tag('redmine_issues_sorting', :plugin => :redmine_issues_sorting) +
        javascript_include_tag('jquery.tablesorter.js', :plugin => :redmine_issues_sorting) +
        javascript_include_tag('jquery.tablesorter.widgets.js', :plugin => :redmine_issues_sorting)
  end
end
