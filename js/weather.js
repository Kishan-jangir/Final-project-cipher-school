

window.onload = function() {

  // $.get('https://www.metaweather.com/api/location/search/?query=san')
  //   .then((data) => {
  //     // console.log(data);
  //
  //     $('#table_1_head').append('<tr><th scope="col">' + 'Location Name' + '</th><th scope="col">' + 'Location Type' + '</th><th scope="col">' + 'Where On Earth Id' + '</th><th scope="col">' + 'Latitude & Longitude' + '</th></tr>');
  //     data.forEach((item) => {
  //
  //       //<br> in a appended item
  //       // const br = document.createElement('br');
  //       // para.append(location,br);
  //
  //       var location_name = item.title;
  //       var location_type = item.location_type;
  //       var woeid = item.woeid;
  //       var latitude_longitude = item.latt_long;
  //       $('#table_1').append('<tr><td>' + location_name + '</td><td>' + location_type + '</td><td>' + woeid + '</td><td>' + latitude_longitude + '</td></tr>');
  //
  //     });
  //   })
  //
  // $.get("https://www.metaweather.com/api/location/2487956/")
  //   .then((data) => {
  //     // console.log(data.consolidated_weather);
  //
  //     $('#table_2_head').append('<tr><th scope="col">' + 'Id' + '</th><th scope="col">' + 'Weather State Name' + '</th><th scope="col">' + 'Weather State Abbrevation' + '</th><th scope="col">' + 'Wind Direction Compass' + '</th><th scope="col">' + 'Created' + '</th></tr>');
  //
  //     for (var i = 0; i < data.consolidated_weather.length; i++) {
  //
  //       var id = data.consolidated_weather[i].id;
  //       var weather_state_name = data.consolidated_weather[i].weather_state_name;
  //       var weather_state_abbr = data.consolidated_weather[i].weather_state_abbr;
  //       var wind_direction_compass = data.consolidated_weather[i].wind_direction_compass;
  //       var created = data.consolidated_weather[i].created;
  //
  //       $('#table_2').append('<tr><td>' + id + '</td><td>' + weather_state_name + '</td><td>' + weather_state_abbr + '</td><td>' + wind_direction_compass + '</td><td>' + created + '</td></tr>');
  //       // console.log(id, weather_state_name, weather_state_abbr, wind_direction_compass, created);
  //     }
  //   })
  //
  // $.get("https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02")
  //   .then((data)=>{
  //     console.log(data);
  //   })

  function weather_template(woeid){
  const web_url = 'https://www.metaweather.com/api/location/' + woeid + '/';

  $.get(web_url)
    .then(function(data){
      // console.log(data.sun_rise.toString().slice(12,16),"Hrs");
      // console.log(data.sun_set.toString().slice(11,16),"Hrs");


      const title = data.title;
      $("#title").text(title);

      const title_date = data.time.slice(0, 10);
      $("#title-date").text(title_date);

      const title_time = data.time.slice(11, 16);
      $("#title-time").text(title_time);




      // consolidated Weather 1
      // var consolidated_weather_date = data.consolidated_weather[0].created.slice(0,10);
      var cw_temperature = data.consolidated_weather[0].the_temp.toString().slice(0,2);
      var cw_sunrise = data.sun_rise.toString().slice(11,16);
      var cw_sunset = data.sun_set.toString().slice(11,16);
      var img1 = data.consolidated_weather[0].weather_state_abbr;
      var appl_date = data.consolidated_weather[0].applicable_date;
      var weather_date = data.consolidated_weather[0].applicable_date;
      var weatherStateName = data.consolidated_weather[0].weather_state_name;
      var windSpeed = data.consolidated_weather[0].wind_speed.toString().slice(0,5);
      var maxTemperature = data.consolidated_weather[0].max_temp.toString().slice(0,5);
      var minTemperature = data.consolidated_weather[0].min_temp.toString().slice(0,5);
      var windDirection = data.consolidated_weather[0].wind_direction.toString().slice(0,5);
      var airPressure = data.consolidated_weather[0].air_pressure.toString().slice(0,5);
      var humidity = data.consolidated_weather[0].humidity;

      console.log(windSpeed);
      $("#cwDate-1").text("Today");
      var cw_image_1 = $("#cw-image-1");
      cw_image_1.attr("src", "https://www.metaweather.com//static/img/weather/" + img1 + ".svg");

      $("#cwSunrise").text(cw_sunrise+" Hrs");
      $("#cwSunset").text(cw_sunset+" Hrs");
      $("#cwTemperature").text(cw_temperature+" C");
      $("#cwWindSpeed-1").text(windSpeed);
      $("#cwWeatherStateName-1").text(weatherStateName);
      $("#cwMaxTemp-1").text(maxTemperature);
      $("#cwMinTemp-1").text(minTemperature);
      $("#cwWindDirection-1").text(windDirection);
      $("#cwAirPressure-1").text(airPressure);
      $("#cwHumidity-1").text(humidity);
      $("#cwHumidity-0").text(humidity);

      // consolidated Weather 2
      // var consolidated_weather_date = data.consolidated_weather[1].created.slice(0,10);
      var img2 = data.consolidated_weather[1].weather_state_abbr;
      var appl_date = data.consolidated_weather[1].applicable_date;
      var weather_date = data.consolidated_weather[1].applicable_date;
      var weatherStateName = data.consolidated_weather[1].weather_state_name;
      var windSpeed = data.consolidated_weather[1].wind_speed.toString().slice(0,5);
      var maxTemperature = data.consolidated_weather[1].max_temp.toString().slice(0,5);
      var minTemperature = data.consolidated_weather[1].min_temp.toString().slice(0,5);
      var windDirection = data.consolidated_weather[1].wind_direction.toString().slice(0,5);
      var airPressure = data.consolidated_weather[1].air_pressure.toString().slice(0,5);
      var humidity = data.consolidated_weather[1].humidity;
      console.log("humidity ",humidity);

      $("#cwDate-2").text("Tomorrow");
      var cw_image_2 = $("#cw-image-2");
      cw_image_2.attr("src", "https://www.metaweather.com//static/img/weather/" + img2 + ".svg");

      $("#cwWindSpeed-2").text(windSpeed);
      $("#cwWeatherStateName-2").text(weatherStateName);
      $("#cwMaxTemp-2").text(maxTemperature);
      $("#cwMinTemp-2").text(minTemperature);
      $("#cwWindDirection-2").text(windDirection);
      $("#cwAirPressure-2").text(airPressure);
      $("#cwHumidity-2").text(humidity);

      // consolidated Weather 3
      // var consolidated_weather_date = data.consolidated_weather[2].created.slice(0,10);
      var img3 = data.consolidated_weather[2].weather_state_abbr;
      var appl_date = data.consolidated_weather[2].applicable_date;
      var weather_date = data.consolidated_weather[2].applicable_date;
      var weatherStateName = data.consolidated_weather[2].weather_state_name;
      var windSpeed = data.consolidated_weather[2].wind_speed.toString().slice(0,5);
      var maxTemperature = data.consolidated_weather[2].max_temp.toString().slice(0,5);
      var minTemperature = data.consolidated_weather[2].min_temp.toString().slice(0,5);
      var windDirection = data.consolidated_weather[2].wind_direction.toString().slice(0,5);
      var airPressure = data.consolidated_weather[2].air_pressure.toString().slice(0,5);
      var humidity = data.consolidated_weather[2].humidity;

      $("#cwDate-3").text(appl_date);
      var cw_image_3 = $("#cw-image-3");
      cw_image_3.attr("src", "https://www.metaweather.com//static/img/weather/" + img3 + ".svg");

      $("#cwWindSpeed-3").text(windSpeed);
      $("#cwWeatherStateName-3").text(weatherStateName);
      $("#cwMaxTemp-3").text(maxTemperature);
      $("#cwMinTemp-3").text(minTemperature);
      $("#cwWindDirection-3").text(windDirection);
      $("#cwAirPressure-3").text(airPressure);
      $("#cwHumidity-3").text(humidity);

      // consolidated Weather 4
      // var weather_date = data.consolidated_weather[3].applicable_date;
      var img4 = data.consolidated_weather[3].weather_state_abbr;
      var appl_date = data.consolidated_weather[3].applicable_date;
      var weatherStateName = data.consolidated_weather[3].weather_state_name;
      var windSpeed = data.consolidated_weather[3].wind_speed.toString().slice(0,5);
      var maxTemperature = data.consolidated_weather[3].max_temp.toString().slice(0,5);
      var minTemperature = data.consolidated_weather[3].min_temp.toString().slice(0,5);
      var windDirection = data.consolidated_weather[3].wind_direction.toString().slice(0,5);
      var airPressure = data.consolidated_weather[3].air_pressure.toString().slice(0,5);
      var humidity = data.consolidated_weather[3].humidity;

      $("#cwDate-4").text(appl_date);
      var cw_image_4 = $("#cw-image-4");
      cw_image_4.attr("src", "https://www.metaweather.com//static/img/weather/" + img4 + ".svg");

      $("#cwWindSpeed-4").text(windSpeed);
      $("#cwWeatherStateName-4").text(weatherStateName);
      $("#cwMaxTemp-4").text(maxTemperature);
      $("#cwMinTemp-4").text(minTemperature);
      $("#cwWindDirection-4").text(windDirection);
      $("#cwAirPressure-4").text(airPressure);
      $("#cwHumidity-4").text(humidity);

      // consolidated Weather 5
      // var weather_date = data.consolidated_weather[4].applicable_date;
      var img5 = data.consolidated_weather[4].weather_state_abbr;
      var appl_date = data.consolidated_weather[4].applicable_date;
      var weatherStateName = data.consolidated_weather[4].weather_state_name;
      var windSpeed = data.consolidated_weather[4].wind_speed.toString().slice(0,5);
      var maxTemperature = data.consolidated_weather[4].max_temp.toString().slice(0,5);
      var minTemperature = data.consolidated_weather[4].min_temp.toString().slice(0,5);
      var windDirection = data.consolidated_weather[4].wind_direction.toString().slice(0,5);
      var airPressure = data.consolidated_weather[4].air_pressure.toString().slice(0,5);
      var humidity = data.consolidated_weather[4].humidity;

      $("#cwDate-5").text(appl_date);
      var cw_image_5 = $("#cw-image-5");
      cw_image_5.attr("src", "https://www.metaweather.com//static/img/weather/" + img5 + ".svg");

      $("#cwWindSpeed-5").text(windSpeed);
      $("#cwWeatherStateName-5").text(weatherStateName);
      $("#cwMaxTemp-5").text(maxTemperature);
      $("#cwMinTemp-5").text(minTemperature);
      $("#cwWindDirection-5").text(windDirection);
      $("#cwAirPressure-5").text(airPressure);
      $("#cwHumidity-5").text(humidity);


    })
  }


  weather_template();

  // Button click
  $("#myBtn").click(function get_woeid(){
    find_woeid();
  })

  function find_woeid(){
    var inp =$("#myInput").val();
    const city_name = inp.toUpperCase();

    if(city_name == "CHENNAI"){
      weather_template(2295424);
    }

    else if(city_name == "DELHI"){
      weather_template(28743736);
    }

    else if(city_name == "MUMBAI"){
      weather_template(12586539);
    }
    else(
      alert("Enter a valid City Name !")
    )
  }

 // Enter Key event
  $('#myInput').keydown(function(e) {
  if (e.which == 13) {
    find_woeid();
  }
  });

}
