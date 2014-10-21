$(function() {
    $('body').bind('keydown', 'textarea, input', function(e) {
      // pressed ENTER and either CMD/WIN or CTRL
      if(e.which == 13 && (e.metaKey || e.ctrlKey)) {
        $(e.target.form).submit();
      }
    });
});
