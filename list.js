//alternative: $(document).ready(function() {
// Pure-JS equivalencies
// $("#add") ~= document.getElementById("add")
// $(".list") ~= document.getElementsByClassName("list")

//alternative: $("button#add").on("click", function(ev) {
// $("button#add").click(function (ev /*event*/) {
//     var newCar = $("#newcar").val();

//     // Prevent adding a blank item
//     if (newCar == "") return;

//     $("#list").append("<li>"
//         + newCar + ' <button class="remove">(x)</button>' + "</li>");

//     $("#newcar").val("");
// });

// $("#list").click("button.remove", function (ev) {
//     $(ev.target).parent().fadeOut();
// });

// var url = "https://maps.googleapis.com/maps/api/geocode/json?address,&key=AIzaSyC6PThE9qDq35kxXF8dZLqqqIe37cG3Vzg"
// $.ajax(url, { method: "GET" }).done(function (data) {
//     var array = data;
//     var name = data.name;
//     for (i = 0; i < array.length; i++) {
//         $("#list").append();

//     }
// });

// $.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c00a1ebec60100061843")
//     .done(function (data) {
//         $("#me").append(data.name + " likes " + data.drink);

//     });
$(function () {
  var googleGeo = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  var key = "&key=AIzaSyBqJmnM1gvH8ESPlcJGjz0AZhr6cw4xW1I";
  var dark = "017f3ac0086e46d4ee9d8ea494cd4670/";

  $("#button").on("click", function () {
    var url = googleGeo + $("#zipcode").val() + key;
    $.ajax(url, { method: "GET" }).done(function (data) {
      var city = data.results[0].formatted_address;
      var lat = data.results[0].geometry.location.lat;
      var long = data.results[0].geometry.location.lng;
      var darkAddress = dark + lat + "," + long;
      $.ajax("https://api.darksky.net/forecast/" + dark + lat + "," + long, { dataType: "jsonp" }).done(function (data) {

        var temp = data.currently.temperature;
        var maxTemp = data.daily.data[0].temperatureMax;
        var minTemp = data.daily.data[0].temperatureMin;
        var maxTemp2 = data.daily.data[1].temperatureMax;
        var minTemp2 = data.daily.data[1].temperatureMin;
        var precip = data.currently.precipProbability;
        var summary = data.currently.summary;
        $("#weatherList").html("<li><h1>" + city + "</h1></li>");
        $("#weatherList").append("<li>" + "Current Temperature: " + Math.round(temp) + "&#8457" + "</li>");
        $("#weatherList").append("<li>" + "Max Temperature: " + Math.round(maxTemp) + "&#8457" + "</li>");
        $("#weatherList").append("<li>" + "Min Temperature: " + Math.round(minTemp) + "&#8457" + "</li>");
        $("#weatherList").append("<li>" + "Tomorrow Max Temperature: " + Math.round(maxTemp2) + "&#8457" + "</li>");
        $("#weatherList").append("<li>" + "Tomorrow Min Temperature: " + Math.round(minTemp2) + "&#8457" + "</li>");
        $("#weatherList").append("<li>" + "Precipitation: " + Math.round(precip * 100) + "%" + "</li>");
        $("#weatherList").append("<li>" + "Summary: " + summary + "!" + "</li>");
        // if (summary == "Clear") {
        //   $("#shell").html('<img src = "images/clear.jpg">');
        // } else if (summary == "Mostly Cloudy") {
        //   $("#shell").html('<img src = "images/mostlycloudy.jpg">');
        // }
      });

    });

  });









});



