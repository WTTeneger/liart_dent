$("form").submit(function (e) {
    console.log(e);
    e.preventDefault();
    var formId = this.id;  // "this" is a reference to the submitted form
    SendAjaxRequest(formId);
    document.getElementById('callback').style.display = "none";
    document.getElementById('popSuccess').style.display = "block";
});


function SendAjaxRequest(formId) {
    let data = $("#" + formId).serialize()
    console.log(data);

    let url = window.location.pathname.replace('/service/', '');

    data += '&page=' + url
    console.log(data);
    $.ajax({
        type: "POST",
        url: "/api/add_bids",
        data: data,
        success: function (data) {
            console.log(data);
        }
    });
}