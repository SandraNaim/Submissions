import React, { Component } from "react";
import "./App.css";
import clear from "../src/img/weather-icons/clear.svg";
import cloudy from "../src/img/weather-icons/cloudy.svg";
import drizzle from "../src/img/weather-icons/drizzle.svg";
import fog from "../src/img/weather-icons/fog.svg";
import mostlyCloudy from "../src/img/weather-icons/mostlycloudy.svg";
import partlyCloudy from "../src/img/weather-icons/partlycloudy.svg";
import rain from "../src/img/weather-icons/rain.svg";
import snow from "../src/img/weather-icons/snow.svg";
import storm from "../src/img/weather-icons/storm.svg";
import unknown from "../src/img/weather-icons/unknown.svg";

import Input from "./Component/input";
import Today from "./Component/today";
import TodayHour from "./Component/hour";

import FakeWeather from "./data/FakeWeather.json";

function getImg(id) {
  let val = "";
  if (id < 300) val = storm;
  else if (id >= 300 && id < 500) val = drizzle;
  else if (id >= 500 && id < 599) val = rain;
  else if (id >= 600 && id < 699) val = snow;
  else if (id >= 700 && id < 799) val = fog;
  else if (id === 800) val = clear;
  else if (id === 801) val = partlyCloudy;
  else if (id === 802) val = cloudy;
  else if (id > 801 && id < 806) val = mostlyCloudy;
  return val;
}

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
      t1: json.list[6].dt_txt.slice(11, 16),
      t2: json.list[0].dt_txt.slice(11, 16),
      t3: json.list[1].dt_txt.slice(11, 16),
      t4: json.list[2].dt_txt.slice(11, 16),
      t5: json.list[3].dt_txt.slice(11, 16),
      t6: json.list[4].dt_txt.slice(11, 16),
      t7: json.list[5].dt_txt.slice(11, 16),
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
              weatherImage={getImg(this.state.src)}
              status={this.state.status}
            />
          </div>

          <div className="below" style={{ marginTop: "50px" }}>
            <div className="row">
              <TodayHour
                weatherTime={this.state.t1}
                weatherImage={getImg(this.state.src1)}
                temperature={this.state.time1}
              />
              <TodayHour
                weatherTime={this.state.t2}
                weatherImage={getImg(this.state.src2)}
                temperature={this.state.time2}
              />
              <TodayHour
                weatherTime={this.state.t3}
                weatherImage={getImg(this.state.src3)}
                temperature={this.state.time3}
              />
              <TodayHour
                weatherTime={this.state.t4}
                weatherImage={getImg(this.state.src4)}
                temperature={this.state.time4}
              />
              <TodayHour
                weatherTime={this.state.t5}
                weatherImage={getImg(this.state.src5)}
                temperature={this.state.time5}
              />
              <TodayHour
                weatherTime={this.state.t6}
                weatherImage={getImg(this.state.src6)}
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
