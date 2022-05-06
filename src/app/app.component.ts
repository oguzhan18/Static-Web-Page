import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import "../assets/css/grapes.min.css"
import '../assets/css/grapesjs-preset-webpage.min.css';
import grapesjs from "../assets/grapes.min.js";
import * as grapesweb from "../assets/grapesjs-preset-webpage.min.js"
//import grapesjs from 'grapesjs';
import grapesjsweb from 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';

declare function myFunction():void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  a = 'Static-Web-Page';
  editor;



  ngOnInit() {
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '99.2vh',
      width: '100%',
      canvas: {
        styles: ['https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'],
      },


      // Şu an için depolama yöneticisini devre dışı bırakın
      storageManager: {
        id: 'gjs-',             // Depolama ve yüklemede kullanılacak ön ek tanımlayıcı
        type: 'local',          // Depolama türü
        autosave: true,         // Verileri otomatik olarak depolayın
        autoload: true,         // init üzerinde depolanan verileri otomatik yükle
        stepsBeforeSave: 1,     // Otomatik kaydetme etkinse, map yöntemi tetiklenmeden önce kaç değişiklik gerektiğini gösterir
        storeComponents: true,  // Bileşenlerin JSON biçiminde depolanmasını etkinleştirme/devre dışı bırakma
        storeStyles: true,      // Kuralların JSON biçiminde depolanmasını etkinleştirme/devre dışı bırakma
        storeHtml: true,        // Bileşenlerin HTML dizesi olarak depolanmasını etkinleştirme/devre dışı bırakma
        storeCss: true,         // Kuralların CSS dizesi olarak depolanmasını etkinleştir/devre dışı bırak
        urlStore: "/save-template/2",
        urlLoad: "/load-template/2",
        params: {},   // İstekler üzerine özel değerler için
      },


      components: '',
      style: '',
      scripts:["https://code.jquery.com/jquery-3.4.1.min.js"],


      plugins: [grapesjsweb,'grapesjs-lory-slider'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          navbarOpts: true,
          countdownOpts: true,
          formsOpts: true,
          blocksBasicOpts: {
            appendTo: '#blocks',
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3-7', 'table'],
            flexGrid: true,
            stylePrefix: 'lala-'
          }
        },
        pluginsOpts: {
          'grapesjs-lory-slider': {
            modalTitleImport: 'Import template'
            }
          },
      },
    });


    const prop = this.editor.StyleManager.getProperty('typography', 'font-family');
    console.log(prop)
    prop.set('options', [
      { value: "'Roboto', sans-serif", name: 'Roboto' }, { value: "'Montserrat', sans-serif", name: 'Montserrat' }

    ]);
    setTimeout(() => {
      let styleManager = this.editor.StyleManager;
      let typographySector = styleManager.getSector('Typography');
      console.log(typographySector)
      let fontProperty = styleManager.getProperty('Typography', 'font-family');
      console.log(fontProperty)
      console.log(fontProperty.getOptions());
      let list = fontProperty.get('list');
      list.push({ value: 'Roboto, Arial, sans-serif', name: 'Roboto' });
      fontProperty.set('list', list);
      fontProperty.view.input = null;
      fontProperty.addOption({ value: 'Roboto, Arial, sans-serif', name: 'Roboto' })
      fontProperty.view.onRender();

      styleManager.render();
    }, 2000);

    var blockManager = this.editor.BlockManager;

    /* 'my-first-block' is the ID of the block
     * Saat Script Kodu !!! saat  <script>setInterval(setClock, 1000);const hourHand = document.querySelector("[data-hour-hand]"); const minuteHand = document.querySelector("[data-minute-hand]"); const secondHand = document.querySelector("[data-second-hand]"); function setClock() { const currentDate = new Date(); const secondsRatio = currentDate.getSeconds() / 60; const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; setRotation(secondHand, secondsRatio); setRotation(minuteHand, minutesRatio); setRotation(hourHand, hoursRatio) } function setRotation(element, rotationRatio) { element.style.setProperty("--rotation", rotationRatio * 360) } setClock()</script>
    */
    blockManager.add('my-first-block', {
      label: `<div><img src="https://www.pngmart.com/files/15/Black-Wall-Clock-Clipart-PNG.png" height="50" width="50"/><div class="my-label-block">Analog Clock</div></div>`,
      category: 'Basic',
      content: '<div><div class="clock"><div class="hand hour" data-hour-hand></div><div class="hand minute" data-minute-hand></div><div class="hand second" data-second-hand></div><div class="number number1">1</div><div class="number number2">2</div><div class="number number3">3</div><div class="number number4">4</div><div class="number number5">5</div><div class="number number6">6</div><div class="number number7">7</div><div class="number number8">8</div><div class="number number9">9</div><div class="number number10">10</div><div class="number number11">11</div><div class="number number12">12</div></div></div><script>setInterval(setClock, 1000);const hourHand = document.querySelector("[data-hour-hand]"); const minuteHand = document.querySelector("[data-minute-hand]"); const secondHand = document.querySelector("[data-second-hand]"); function setClock() { const currentDate = new Date(); const secondsRatio = currentDate.getSeconds() / 60; const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; setRotation(secondHand, secondsRatio); setRotation(minuteHand, minutesRatio); setRotation(hourHand, hoursRatio) } function setRotation(element, rotationRatio) { element.style.setProperty("--rotation", rotationRatio * 360) } setClock()</script><style>.clock{width: 300px;height: 300px;background-color: rgba(255, 255, 255, .8);border-radius: 50%;border: 2px solid black;position: relative;}.clock .number {--rotation: 0;position: absolute;width: 100%;height: 100%;text-align: center;transform: rotate(var(--rotation));font-size: 1.5rem;}.clock .number1 { --rotation: 30deg; }.clock .number2 { --rotation: 60deg; }.clock .number3 { --rotation: 90deg; }.clock .number4 { --rotation: 120deg; }.clock .number5 { --rotation: 150deg; }.clock .number6 { --rotation: 180deg; }.clock .number7 { --rotation: 210deg; }.clock .number8 { --rotation: 240deg; }.clock .number9 { --rotation: 270deg; }.clock .number10 { --rotation: 300deg; }.clock .number11 { --rotation: 330deg; }.clock .hand {--rotation: 0;position: absolute;bottom: 50%;left: 50%;border: 1px solid white;border-top-left-radius: 10px;border-top-right-radius: 10px;transform-origin: bottom;z-index: 10;transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));}.clock::after {content: "";position: absolute;background-color: black;z-index: 11;width: 15px;height: 15px;top: 50%;left: 50%;transform: translate(-50%, -50%);border-radius: 50%;}.clock .hand.second {width: 3px;height: 45%;background-color: red;}.clock .hand.minute {width: 7px;height: 40%;background-color: black;}.clock .hand.hour {width: 10px;height: 35%;background-color: black;}@import url("https://fonts.googleapis.com/css?family=Raleway");* {font-family: Raleway;}.side-links {position: absolute;top: 15px;right: 15px;}.side-link {display: flex;align-items: center;justify-content: center;text-decoration: none;margin-bottom: 10px;color: white;width: 180px;padding: 10px 0;border-radius: 10px;}.side-link-youtube {background-color: red;}.side-link-twitter {background-color: #1DA1F2;}.side-link-github {background-color: #6e5494;}.side-link-text {margin-left: 10px;font-size: 18px;}.side-link-icon {color: white;font-size: 30px;}</style>',
    });
            blockManager.add('Turkey', {
              label: '<b><h1>Turkey</h1></b> <br>Istanbul',
              category: 'Weather Widget',
              content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/istanbul_turkey_745044?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe><div>',});
            blockManager.add('dubai', {
              label: '<b><h1>BAE</h1></b> <br>Dubai',
              category: 'Weather Widget',
              content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/dubai_united-arab-emirates_292223?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe><div>',});
            blockManager.add('USA', {
             label: '<b><h1>Ukraine</h1></b> <br>Washington D.C',
             category: 'Weather Widget',
             content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/washington-d.c._united-states_4140963?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',});
            blockManager.add('Germany', {
             label: '<b><h1>Germany</h1></b> <br>Berlin',
             category: 'Weather Widget',
             content: '<div><iframe src=" https://www.meteoblue.com/en/weather/widget/three/berlin_germany_2950159?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',});
            blockManager.add('Japam', {
             label: '<b><h1>Japan</h1></b> <br>Tokyo',
             category: 'Weather Widget',
             content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/tokyo_japan_1850147?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',});
            blockManager.add('India', {
               label: '<b><h1>Insdia</h1></b> <br>New Delhi',
               category: 'Weather Widget',
               content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/new-delhi_india_1261481?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',});
            blockManager.add('Russia', {
               label: '<b><h1>Russia</h1></b> <br>Moscow',
                category: 'Weather Widget',
                content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/moscow_russia_524901?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>', });
              blockManager.add('China', {
                label: '<b><h1>China</h1></b> <br>Beijing',
                category: 'Weather Widget',
                content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/beijing_china_1816670?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',});
              blockManager.add('Suadi Arabia', {
                 label: '<b><h1>Arabia</h1></b> <br>Riyadh',
                 category: 'Weather Widget',
                 content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/riyadh_saudi-arabia_108410?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',});
              blockManager.add('France', {
                label: '<b><h1>France</h1></b> <br>Paris',
                category: 'Weather Widget',
                content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/paris_france_2988507?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',    });
              blockManager.add('Italy', {
                label: '<b><h1>Italy</h1></b> <br>Rome',
                category: 'Weather Widget',
                content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/rome_italy_3169070?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',    });
              blockManager.add('Brazil', {
                label: '<b><h1>Brazil</h1></b> <br>Rio',
                category: 'Weather Widget',
                content: '<div><iframe src="https://www.meteoblue.com/en/weather/widget/three/rio-de-janeiro_brazil_3451190?geoloc=fixed&nocurrent=0&noforecast=0&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=image"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 9rem;pointer-events: none;"></iframe></div>',    });
              blockManager.add('MAP', {
                label: '<b><h1>MAP</h1></b> <br>MAP',
                category: 'Weather Widget',
                content: '<div><iframe src="https://www.meteoblue.com/en/weather/maps/widget/istanbul_turkey_745044?windAnimation=0&windAnimation=1&gust=0&gust=1&satellite=0&satellite=1&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 22.5rem; height: 20rem;"></iframe></div>',    });
    blockManager.add('Europe/Istanbul', {
      label: '<b><h1>Turkey</h1></b> <br>Turkey',
      category: 'Clock',
      content: '<div><iframe frameborder="0" align="center" scrolling="no" src="https://mczak.com/code/clock/12hour/"style="border:0px solid #eee; overflow:hidden; width:560px; height:121px;pointer-events: none;"></iframe></div>',    });
    blockManager.add('silder', {
      label: '<img src="https://icons-for-free.com/iconfiles/png/512/slider-1320568685762135280.png" height="50" width="50"><br>Silder-Menu',
      category: 'Silder',
      content: '<div class="coverflow"><a href="#"><img src="https://picsum.photos/1200/350?image=1081"></a><a href="#"><img src="https://picsum.photos/1200/350?image=1055"></a><a href="#"><img src="https://picsum.photos/1200/350?image=1000"></a></div><style>.coverflow {width: 1200px;height: 350px;position: relative;overflow: hidden;text-align: center;margin: 0 auto;}.coverflow:hover a {-webkit-animation-play-state: paused;animation-play-state: paused;}.coverflow a {display: block;position: absolute;top: 0;left: 0;opacity: 0;filter: alpha(opacity=0);-webkit-animation: silder 15s linear infinite;animation: silder 15s linear infinite;}.coverflow a img {max-width: 100%;}.coverflow a:nth-child(3) {-webkit-animation-delay: 10s; animation-delay: 10s;}.coverflow a:nth-child(2) {-webkit-animation-delay: 5s;animation-delay: 5s;}.coverflow a:nth-child(1) {-webkit-animation-delay: 0s;animation-delay: 0s;}@-webkit-keyframes silder {3% {opacity: 1;filter: alpha(opacity=100);}27% {opacity: 1;filter: alpha(opacity=100);}30% {opacity: 0;filter: alpha(opacity=0);}}@keyframes silder {3% {opacity: 1;filter: alpha(opacity=100);}27% {    opacity: 1;filter: alpha(opacity=100);}30% {opacity: 0;filter: alpha(opacity=0);}}</style>',
    });
    blockManager.add('Silder -1', {
      label: '<img src="https://icons-for-free.com/iconfiles/png/512/slider-1320568685762135280.png" height="50" width="50"><br>Silder-Menu -1',
      category: 'Silder',
      content: '<div><div class="carousel"><ul class="slides"><input type="radio" name="radio-buttons" id="img-1" checked /><li class="slide-container"><div class="slide-image"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg"></div> <div class="carousel-controls"><label for="img-3" class="prev-slide"><span>&lsaquo;</span></label><label for="img-2" class="next-slide"><span>&rsaquo;</span></label></div></li><input type="radio" name="radio-buttons" id="img-2" /><li class="slide-container"><div class="slide-image"><img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true"></div><div class="carousel-controls"><label for="img-1" class="prev-slide"><span>&lsaquo;</span></label><label for="img-3" class="next-slide"><span>&rsaquo;</span></label></div></li><input type="radio" name="radio-buttons" id="img-3" /><li class="slide-container"><div class="slide-image"><img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"></div><div class="carousel-controls"><label for="img-2" class="prev-slide"><span>&lsaquo;</span> </label><label for="img-1" class="next-slide"><span>&rsaquo;</span></label></div></li><div class="carousel-dots"><label for="img-1" class="carousel-dot" id="img-dot-1"></label><label for="img-2" class="carousel-dot" id="img-dot-2"></label><label for="img-3" class="carousel-dot" id="img-dot-3"></label>      </div></ul></div></div><style>.carousel {margin-left: 15%;margin-right: 15%;}ul.slides {display: block;position: relative;height: 600px;margin: 0;padding: 0;overflow: hidden;list-style: none;}.slides * {user-select: none;-ms-user-select: none;    -moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-webkit-touch-callout: none;}ul.slides input {display: none; }.slide-container { display: block; }.slide-image {display: block;position: absolute;width: 100%;height: 100%;top: 0;opacity: 0;transition: all .7s ease-in-out;} .slide-image img {width: auto;min-width: 100%;height: 100%;}.carousel-controls {position: absolute;top: 0;left: 0;right: 0;z-index: 999;font-size: 100px;line-height: 600px;color: #fff;}.carousel-controls label {display: none;position: absolute;padding: 0 20px;opacity: 0;transition: opacity .2s;cursor: pointer;}.slide-image:hover + .carousel-controls label{opacity: 0.5;}.carousel-controls label:hover {opacity: 1;}.carousel-controls .prev-slide {width: 49%;text-align: left;left: 0;}.carousel-controls .next-slide {width: 49%;text-align: right;right: 0;}.carousel-dots {position: absolute;left: 0;right: 0;bottom: 20px;z-index: 999;text-align: center;}.carousel-dots .carousel-dot {display: inline-block;width: 30px;height: 30px;border-radius: 50%;background-color: #fff;opacity: 0.5;margin: 10px;}input:checked + .slide-container .slide-image {opacity: 1;transform: scale(1);transition: opacity 1s ease-in-out;}input:checked + .slide-container .carousel-controls label {display: block; }input#img-1:checked ~ .carousel-dots label#img-dot-1,input#img-2:checked ~ .carousel-dots label#img-dot-2,input#img-3:checked ~ .carousel-dots label#img-dot-3,input#img-4:checked ~ .carousel-dots label#img-dot-4,input#img-5:checked ~ .carousel-dots label#img-dot-5,input#img-6:checked ~ .carousel-dots label#img-dot-6 {opacity: 1;}input:checked + .slide-container .nav label { display: block; }</style>',
    });
    blockManager.add('Silder -2', {
      label: '<img src="https://icons-for-free.com/iconfiles/png/512/slider-1320568685762135280.png" height="50" width="50"><br>Silder-Menu -2',
      category: 'Silder',
      content: '<div class="pic-ctn"><img src="https://picsum.photos/200/300?t=1" alt="" class="pic"><img src="https://picsum.photos/200/300?t=2" alt="" class="pic"><img src="https://picsum.photos/200/300?t=3" alt="" class="pic"><img src="https://picsum.photos/200/300?t=4" alt="" class="pic"><img src="https://picsum.photos/200/300?t=5" alt="" class="pic"></div><style>@keyframes display {0% {transform: translateX(200px);opacity: 0;}10% {transform: translateX(0);opacity: 1;}20% {transform: translateX(0);opacity: 1;}30% {transform: translateX(-200px);opacity: 0;}100% {transform: translateX(-200px);opacity: 0;}}.pic-ctn {position: relative;width: 100vw;height: 300px;margin-top: 15vh;}.pic-ctn > img {position: absolute;top: 0;left: calc(50% - 100px);opacity: 0;animation: display 10s infinite;}img:nth-child(2) {animation-delay: 2s;}img:nth-child(3) {animation-delay: 4s;}img:nth-child(4) {animation-delay: 6s;}img:nth-child(5) {animation-delay: 8s;}</style>',
    });
    blockManager.add('Silder -3', {
      label: '<img src="https://icons-for-free.com/iconfiles/png/512/slider-1320568685762135280.png" height="50" width="50"><br>Silder-Menu -3',
      category: 'Silder',
      content: '<div class="carousel__container"><div class="carousel__item"><img src="http://placekitten.com/480/270" class="carousel__image"></div><div class="carousel__item"><img src="http://placekitten.com/500/270" class="carousel__image"></div><div class="carousel__item"><img src="http://placekitten.com/520/300" class="carousel__image"></div></div>  <style>h1{color: #fff;font-family: sans-serif;text-align: center;font-weight: normal;}@-webkit-keyframes carouselAnim{0%{transform: translateX(100%) rotatey(0) scale(1.2, 1.2);transform-origin: center center;z-index: 10;}27%{transform: translateX(100%) rotatey(0) scale(1.2, 1.2);transform-origin: center center;z-index: 10;}33.33333%{transform: translateX(0) translateY(0) rotatey(10deg) scale(0.8,1);transform-origin: left center;z-index: 5;}60%{transform: translateX(0) translateY(0) rotatey(10deg) scale(0.8,1);transform-origin: left center;z-index: 5;}66.666666%{transform: translateX(200%) translateY(0) rotatey(-10deg) scale(0.8,1);transform-origin: right center;z-index: 5;}93%{transform: translateX(200%) translateY(0) rotatey(-10deg) scale(0.8,1);transform-origin: right center;z-index: 5;}100%{transform: translateX(100%) rotatey(0) scale(1.2, 1.2);transform-origin: center center;z-index: 10;}}@keyframes carouselAnim{0%{transform: translateX(100%) rotatey(0) scale(1.2, 1.2);transform-origin: center center;z-index: 10;}27%{transform: translateX(100%) rotatey(0) scale(1.2, 1.2);transform-origin: center center;z-index: 10;}33.33333%{transform: translateX(0) translateY(0) rotatey(10deg) scale(0.8,1);transform-origin: left center;z-index: 5;}60%{transform: translateX(0) translateY(0) rotatey(10deg) scale(0.8,1);transform-origin: left center;z-index: 5;}66.666666%{transform: translateX(200%) translateY(0) rotatey(-10deg) scale(0.8,1);transform-origin: right center;z-index: 5;}93%{transform: translateX(200%) translateY(0) rotatey(-10deg) scale(0.8,1);transform-origin: right center;z-index: 5;}100%{transform: translateX(100%) rotatey(0) scale(1.2, 1.2);transform-origin: center center;z-index: 10;}}.carousel__container{width: 100%;max-width: 960px;perspective: 300px;perspective-origin: 50% 60%;min-height: 14em;margin: 3em auto;}.carousel__item{position: absolute;width: 33%; padding-bottom: 19%;-webkit-animation-name: carouselAnim;animation-name: carouselAnim;transform-origin: left center;-webkit-animation-duration: 12s;animation-duration: 12s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}.carousel__item:first-child{-webkit-animation-delay: -4s;animation-delay: -4s;}.carousel__item:last-child{-webkit-animation-delay: -8s;animation-delay: -8s;}.carousel__image{position: absolute;width: 100%;border-radius: 2px;}</style>     ',
    });
     blockManager.add('Dovız', {
      label: '<img src="https://purepng.com/public/uploads/large/purepng.com-black-coincoinsmetaldollarblack-14215264847000sfms.png" height="50" width="50"><br>Döviz -1',
      category: 'Basic',
      content: '<div style="width:29rem"><iframe src="http://oguzhancart.me/" style="width:28rem; "></iframe></div>',
    });
    blockManager.add('Oda/Fiyatleri', {
      label: '<img src="https://static.thenounproject.com/png/3420392-200.png" height="50" width="50"><br>Döviz -1',
      category: 'Basic',
      content: '<div><iframe style="width:20%;height: 15rem;"src="https://codepen.io/ryanez/project/full/AgaNbB"></iframe></div>',
    });
  }

}
