
function showInfo() {
    toastr.info($("#info").html());
};

$(function() {
    $(document.body).append('<span class="show-info glyphicon glyphicon-question-sign" onclick="showInfo()"></span>');

    toastr.options.timeOut = 60000;
    toastr.options.extendedTimeOut = 60000;
    toastr.options.positionClass = "toast-bottom-full-width";

    showInfo();
});
