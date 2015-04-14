unless File.basename(File.dirname(__FILE__)) == 'redmine_issues_sorting'
  raise "CRedmine issues sortings plugin directory should be 'redmine_issues_sorting' instead of '#{File.basename(File.dirname(__FILE__))}'"
end

require_dependency File.expand_path('../app/helpers/application_helper.rb', __FILE__)

Redmine::Plugin.register :redmine_issues_sorting do
  name 'Redmine issues sortings plugin'
  author 'Eugene Batogov'
  description 'Add client side sortings for issue relations and dependants tasks at issue for'
  version '0.0.1'
  url 'https://github.com/JohnBat26/redmine_issues_sorting'
  author_url 'https://github.com/JohnBat26'
  requires_redmine :version_or_higher => '2.6.0'
end

require_dependency 'issues_sortings_hook_listener'
