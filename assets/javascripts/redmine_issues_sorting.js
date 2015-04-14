function initializeIssuesSorting() {
    window.I18n =  <%= current_translations.to_json.html_safe %>

    $('#issue_tree p strong:contains(I18n.label_subtask_plural)').append(' (кол-во: ' + $('#issue_tree .issue.hascontextmenu').length + ', из них закрытые: ' + $('#issue_tree .issue.hascontextmenu > td:contains("Закрыта")').length + ')');
    $('#issue_tree table.list.issues').attr('id', 'subTaskTable').addClass('tablesorter');
    $('#relations table.list.issues').attr('id', 'relationsTaskTable').addClass('tablesorter');

    var queryString = '.controller-issues.action-show #content table:has(th):not(.attributes)';

    $(queryString).prepend('<thead></thead>');
    $(queryString).each(function () {
        $(this).find('thead').wrapInner($(this).find('tbody tr:first-child'));
    });
    $('#subTaskTable tbody').first().before('<thead>' +
    '<th style="display:none">111</th>' +
    '<th>Name</th>' +
    '<th>Status</th>' +
    '<th>Assigned</th>' +
    '<th>Start date</th>' +
    '<th>End date</th>' +
    '<th style="display:none">progress</th>' +
    '</thead>');
    $('#subTaskTable').tablesorter();

    $('#relationsTaskTable tbody').first().before('<thead>' +
    '<th style="display:none">111</th>' +
    '<th>Name</th>' +
    '<th>Status</th>' +
    '<th>Assigned</th>' +
    '<th>Start date</th>' +
    '<th>End date</th>' +
    '<th style="display:none">progress</th>' +
    '</thead>');
    $('#relationsTaskTable').tablesorter();

    $('.controller-repositories.action-show table#browser').tablesorter();
    $(queryString).each(function () {
        $(this).tablesorter();
    });
    $('.controller-issues.action-show th.header').css('cursor', 'pointer');
    $('.controller-repositories.action-show table#browser th.header').css('cursor', 'pointer');
}
