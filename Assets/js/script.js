var todayEl = moment().format('LLLL');

//--Displaying current date & time at top of page--
$("#currentDay").html(todayEl);


//--Time-Blocks Section--
function background() {
    var currentTime = moment().hours();

//--Creating time-block loops--
    $(".time-block").each(function(){
        var timeSlot = parseInt($(this).attr("id"));
    //--Color will change according to current time--
        if (timeSlot < currentTime) {
        $(this).addClass("past");

        }else if (timeSlot === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    
        }else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        }

    })
}

background();

//--Saving to local Storage--
$(document).ready(function(){
    //--Button saves when clicked--
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //--Saves description and time to local storage--
        localStorage.setItem(time,text);
    })
});

//--Getting description data back from local storage--
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



