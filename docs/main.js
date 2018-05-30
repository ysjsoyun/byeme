var points = 0;
var fullname = "";

$(function () {
    $("#result").hide();
    $("#goback").hide();
    $("#description").hide();

    $('#submitbutton').click(function () {

        $('form').hide();
        $("#result").show();
        $("#goback").show();
        $("#description").show();


        var firstname = $("#first_name").val();
        var lastname = $("#last_name").val();
        fullname = firstname + " " + lastname;


        $(".radiodata").each(function () {
            if ($(this).is(":checked")) {
                points += $(this).data("points");
            }
        });


        $(".snswebsite").each(function () {
            if ($(this).is(":checked")) {
                points = points + 10;
            }
        });


        $("#description").text("Dear ");
        $("#yourname").text(fullname + ",").css("font-weight", "bold");
        $("#endsentence").text("your estimated price for a data funeral is:");
        $("#price").text((points * 6) + " euro");
    });
    
    $('#button2').click(function () {
            location.reload(true);


    });


});
