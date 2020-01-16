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

  onSubmit = async txt => {
    console.log(txt);
    this.setState({
      cityName: txt
    });

    // async componentDidMount() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${txt}&cnt=8&units=metric&appid=3fd56fd89a7f9fc9a0182277400753fb`
    );

    const json = await response.json();

    console.log(json);
    // }

    this.setState({
      status: json.list[6].weather[0].description,
      name: json.list[0].weather[0].main,
      img: json.list[0].weather[0].main,
      temtemperature: json.list[0].main.temp,
      mintemp: json.list[0].main.temp_min,
      maxtemp: json.list[0].main.temp_max,
      humidity: json.list[0].main.humidity,
      pressure: json.list[0].main.pressure,
      time1: json.list[6].main.temp,
      time2: json.list[0].main.temp,
      time3: json.list[1].main.temp,
      time4: json.list[2].main.temp,
      time5: json.list[3].main.temp,
      time6: json.list[4].main.temp,
      time7: json.list[5].main.temp,
      t1: json.list[6].dt_txt,
      t2: json.list[0].dt_txt,
      t3: json.list[1].dt_txt,
      t4: json.list[2].dt_txt,
      t5: json.list[3].dt_txt,
      t6: json.list[4].dt_txt,
      t7: json.list[5].dt_txt,
      src: json.list[0].weather[0].id,
      src1: json.list[1].weather[0].id,
      src2: json.list[2].weather[0].id,
      src3: json.list[3].weather[0].id,
      src4: json.list[4].weather[0].id,
      src5: json.list[5].weather[0].id,
      src6: json.list[6].weather[0].id,
      src7: json.list[7].weather[0].id
    });
  };

  render() {
    return (
      <div>
        <Input onSubmit={this.onSubmit} />

        <main style={{ width: "90%", margin: "0 auto" }}>
          <div>
            <Today
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              mintemp={this.state.mintemp}
              maxtemp={this.state.maxtemp}
              // src={getImg(this.state.src)}
              status={this.state.status}
            />
          </div>

          <div className="below" style={{ marginTop: "50px" }}>
            <div className="row">
              <TodayHour
                weatherTime={this.state.t1}
                weatherImage={ClearW}
                temperature={this.state.time1}
              />
              <TodayHour
                weatherTime={this.state.t2}
                weatherImage={Rain}
                temperature={this.state.time2}
              />
              <TodayHour
                weatherTime={this.state.t3}
                weatherImage={MostlyCloudy}
                temperature={this.state.time3}
              />
              <TodayHour
                weatherTime={this.state.t4}
                weatherImage={Rain}
                temperature={this.state.time4}
              />
              <TodayHour
                weatherTime={this.state.t5}
                weatherImage={Drizzle}
                temperature={this.state.time5}
              />
              <TodayHour
                weatherTime={this.state.t6}
                weatherImage={Cloudy}
                temperature={this.state.time6}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
