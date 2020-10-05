// Display current date and update in real time
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));
// Supposed to color time blocks appropriately
function timeColor() {
    const presentTime = moment().hours();
    $(".textValue").each(function () {
        const plannerRow = parseInt($(this).attr("id"));
        if (plannerRow < presentTime) {
            $(this).addClass("past");
        }
        else if (plannerRow === presentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}
timeColor();

$("#t9 .textValue").val(localStorage.getItem("t9"));
$("#t10 .textValue").val(localStorage.getItem("t10"));
$("#t11 .textValue").val(localStorage.getItem("t11"));
$("#t12 .textValue").val(localStorage.getItem("t12"));
$("#t13 .textValue").val(localStorage.getItem("t13"));
$("#t14 .textValue").val(localStorage.getItem("t14"));
$("#t15 .textValue").val(localStorage.getItem("t15"));
$("#t16 .textValue").val(localStorage.getItem("t16"));
$("#t17 .textValue").val(localStorage.getItem("t17"));
// Button to save and store values
$(".saveBtn").click(function () {
    var textValue = $(this).siblings(".textValue").val();
    var presentTime = $(this).parent().attr("id");
    localStorage.setItem(presentTime, textValue);
});