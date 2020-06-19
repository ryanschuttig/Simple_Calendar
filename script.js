// Display current date and update in real time
setInterval(() => {
$("#currentDay").text(moment().format("dddd, MMM Do, YYYY"));
}, 1000);

var plans = localStorage.getItem("plans");
if (plans) {
    plans = JSON.parse(plans)
} else {
    plans = {}
}





$(".saveBtn").on("click", function () {
    localStorage.setItem("plans", JSON.stringify(plans));
});