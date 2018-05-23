// 1. Find the geolocation of user
// 2. Request GET api with this location
// 3. Print information on screen and change image in function of data
$(document).ready(function(){
    // 1.
    function getWeather(position){
        console.log("Latitude:" + position.coords.latitude);
        console.log("Longitude:" + position.coords.longitude);
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long; 
        $.getJSON(url, function(data){
            console.log(data);
            $("#city").html('<strong>' + data.name + '</strong> (' + data.sys.country + ')');
            $("#temp").html('<strong>' + data.main.temp + ' C</strong>');
            $("p.lead").html(data.weather[0].description);
            $("#icon").prepend('<img id="weather_icon" src=' + data.weather[0].icon + '/>');
        });
    }
    function getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }
        else{
            console.log("Geolocation not supported");
        }
    }
    console.log("156");
    getLocation();

});