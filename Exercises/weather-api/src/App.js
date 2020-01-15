import React, { Component } from "react";
import "./App.css";
import ClearW from "../src/img/weather-icons/clear.svg";
import Cloudy from "../src/img/weather-icons/cloudy.svg";
import Drizzle from "../src/img/weather-icons/drizzle.svg";
import Fog from "../src/img/weather-icons/fog.svg";
import MostlyCloudy from "../src/img/weather-icons/mostlycloudy.svg";
import PartlyCloudy from "../src/img/weather-icons/partlycloudy.svg";
import Rain from "../src/img/weather-icons/rain.svg";
import Snow from "../src/img/weather-icons/snow.svg";
import Storm from "../src/img/weather-icons/storm.svg";
import Unknown from "../src/img/weather-icons/unknown.svg";

import Input from "./Component/input";
import Today from "./Component/today";
import TodayHour from "./Component/hour";

import FakeWeather from "./data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  async componentDidMount() {
    const response = await fetch(" http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=a50eef0a66efc4bc75d281f4e2a03082");
    const r = await response.json();
    //console.log(r.results[0].name.first);
    //console.log(r.results[0].picture.medium);
   /*  this.setState({
      userName: r.results[0].name.first,
      image: r.results[0].picture.medium
    }); */
    console.log(r)
  }

  render() {
    return (
      <div>
        <Input btnValue="FIND WEATHER" />

        <main style={{ width: "90%", margin: "0 auto" }}>
          <div>
            <Today
              humidity={FakeWeather.list[0].main.humidity}
              pressure={FakeWeather.list[0].main.pressure}
              mintemp={FakeWeather.list[0].main.temp_min}
              maxtemp={FakeWeather.list[0].main.temp_max}
              weatherImage={ClearW}
            />
          </div>

          <div className="below" style={{ marginTop: "50px" }}>
            <div className="row">
              <TodayHour
                weatherTime={FakeWeather.list[0].dt_txt}
                weatherImage={ClearW}
                temperature={FakeWeather.list[0].main.temp}
              />
              <TodayHour
                weatherTime={FakeWeather.list[1].dt_txt}
                weatherImage={Rain}
                temperature={FakeWeather.list[1].main.temp}
              />
              <TodayHour
                weatherTime={FakeWeather.list[2].dt_txt}
                weatherImage={MostlyCloudy}
                temperature={FakeWeather.list[2].main.temp}
              />
              <TodayHour
                weatherTime={FakeWeather.list[3].dt_txt}
                weatherImage={Rain}
                temperature={FakeWeather.list[3].main.temp}
              />
              <TodayHour
                weatherTime={FakeWeather.list[4].dt_txt}
                weatherImage={Drizzle}
                temperature={FakeWeather.list[4].main.temp}
              />
              <TodayHour
                weatherTime={FakeWeather.list[5].dt_txt}
                weatherImage={Cloudy}
                temperature={FakeWeather.list[5].main.temp}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
