import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  WeatherData:any;
  WeatherData1:any;
  WeatherData2:any;
  WeatherData3:any;
  WeatherData4:any;
  WeatherData5:any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.WeatherData1 = {
      main : {},
      isDay: true
    };
    this.WeatherData2 = {
      main : {},
      isDay: true
    };
    this.WeatherData3 = {
      main : {},
      isDay: true
    };
    this.WeatherData4 = {
      main : {},
      isDay: true
    };
    this.WeatherData5 = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    this.getWeatherData1();
    this.getWeatherData2();
    this.getWeatherData3();
    this.getWeatherData4();
    this.getWeatherData5();
    console.log(this.WeatherData);
    console.log(this.WeatherData1);
    console.log(this.WeatherData2);
    console.log(this.WeatherData3);
    console.log(this.WeatherData4);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  }
  getWeatherData1(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData1(data);})
  }
  getWeatherData2(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData2(data);})
  }
  getWeatherData3(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=new+york&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData3(data);})
  }
  getWeatherData4(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData4(data);})
  }
  getWeatherData5(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData5(data);})
  }
  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
  setWeatherData1(data: any){
    this.WeatherData1 = data;
    let sunsetTime = new Date(this.WeatherData1.sys.sunset * 1000);
    this.WeatherData1.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData1.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData1.temp_celcius = (this.WeatherData1.main.temp - 273.15).toFixed(0);
    this.WeatherData1.temp_min = (this.WeatherData1.main.temp_min - 273.15).toFixed(0);
    this.WeatherData1.temp_max = (this.WeatherData1.main.temp_max - 273.15).toFixed(0);
    this.WeatherData1.temp_feels_like = (this.WeatherData1.main.feels_like - 273.15).toFixed(0);
  }
  setWeatherData2(data: any){
    this.WeatherData2 = data;
    let sunsetTime = new Date(this.WeatherData2.sys.sunset * 1000);
    this.WeatherData2.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData2.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData2.temp_celcius = (this.WeatherData2.main.temp - 273.15).toFixed(0);
    this.WeatherData2.temp_min = (this.WeatherData2.main.temp_min - 273.15).toFixed(0);
    this.WeatherData2.temp_max = (this.WeatherData2.main.temp_max - 273.15).toFixed(0);
    this.WeatherData2.temp_feels_like = (this.WeatherData2.main.feels_like - 273.15).toFixed(0);
  }
  setWeatherData3(data: any){
    this.WeatherData3 = data;
    let sunsetTime = new Date(this.WeatherData3.sys.sunset * 1000);
    this.WeatherData3.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData3.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData3.temp_celcius = (this.WeatherData3.main.temp - 273.15).toFixed(0);
    this.WeatherData3.temp_min = (this.WeatherData3.main.temp_min - 273.15).toFixed(0);
    this.WeatherData3.temp_max = (this.WeatherData3.main.temp_max - 273.15).toFixed(0);
    this.WeatherData3.temp_feels_like = (this.WeatherData3.main.feels_like - 273.15).toFixed(0);
  }
  setWeatherData4(data: any){
    this.WeatherData4 = data;
    let sunsetTime = new Date(this.WeatherData4.sys.sunset * 1000);
    this.WeatherData4.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData4.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData4.temp_celcius = (this.WeatherData4.main.temp - 273.15).toFixed(0);
    this.WeatherData4.temp_min = (this.WeatherData4.main.temp_min - 273.15).toFixed(0);
    this.WeatherData4.temp_max = (this.WeatherData4.main.temp_max - 273.15).toFixed(0);
    this.WeatherData4.temp_feels_like = (this.WeatherData4.main.feels_like - 273.15).toFixed(0);
  }
  setWeatherData5(data: any){
    this.WeatherData5 = data;
    let sunsetTime = new Date(this.WeatherData5.sys.sunset * 1000);
    this.WeatherData5.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData5.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData5.temp_celcius = (this.WeatherData5.main.temp - 273.15).toFixed(0);
    this.WeatherData5.temp_min = (this.WeatherData5.main.temp_min - 273.15).toFixed(0);
    this.WeatherData5.temp_max = (this.WeatherData5.main.temp_max - 273.15).toFixed(0);
    this.WeatherData5.temp_feels_like = (this.WeatherData5.main.feels_like - 273.15).toFixed(0);
  }
}
