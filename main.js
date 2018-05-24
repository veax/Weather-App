// 1. Find the geolocation of user
// 2. Request GET api with this location
// 3. Print information on screen and change image in function of data

$(document).ready(function(){
    //getLocation(); 
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getWeather);
    }
    else{
        console.log("Geolocation not supported");
    }
    function getWeather(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        $.ajax({
            url: 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long,
            async: false,
            dataType: 'json',
            success: function(data){
                fht = data.main.temp*9/5 + 32;
                cels = data.main.temp;
                $("#city").html('<strong>' + data.name + '</strong> (' + data.sys.country + ')');
                $("#temp").html('<strong>' + data.main.temp + ' C</strong>');
                $("p.lead").html(data.weather[0].description);
                $("#icon").prepend('<img id="weather_icon" src=' + data.weather[0].icon + '/>');
            }
        });
    
        $("input[type='checkbox']").click(function(){
            if (this.checked){
                //change celsius in farenheit 
                $("#temp").html('<strong>' + fht + ' F</strong>');
                $("html").addClass("addedclass");
                $("body").addClass("addedclass");
            }
            else{
                //change farenheit in celsius
                $("#temp").html('<strong>' + cels + ' C</strong>');
                $("html").removeClass("addedclass");
                $("body").removeClass("addedclass");
            }
        });
    }
});