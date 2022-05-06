import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import "../../../assets/css/grapes.min.css"
import '../../../assets/css/grapesjs-preset-webpage.min.css';
import grapesjs from "../../../assets/grapes.min.js"
import * as grapesweb from "../../../assets/grapesjs-preset-webpage.min.js"
//import grapesjs from 'grapesjs';
import grapesjsweb from 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 title = 'Static-Web-Page';
  editor;

  ngOnInit() {
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      // Size of the editor
      height: '99vh',
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

      plugins: [grapesjsweb],
      pluginsOpts: {
        'gjs-preset-webpage': {
          navbarOpts: false,
          countdownOpts: false,
          formsOpts: false,
          blocksBasicOpts: {
            appendTo: '#blocks',
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3-7', 'table'],
            flexGrid: false,
            stylePrefix: 'lala-'
          }
        }
      },

      //    blockManager: {
      //   appendTo: '#blocks',
      //   blocks: [
      //     {
      //       id: 'section', // id is mandatory
      //       label: '<b>Section</b>', // You can use HTML/SVG inside labels
      //       attributes: { class:'gjs-block-section' },
      //       content: `<section>
      //         <h1>This is a simple title</h1>
      //         <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
      //       </section>`,
      //     }, {
      //       id: 'text',
      //       label: 'Text',
      //       content: '<div data-gjs-type="text">Insert your text here</div>',
      //     }, {
      //       id: 'image',
      //       label: 'Image',
      //       // Select the component once it's dropped
      //       select: true,
      //       // You can pass components as a JSON instead of a simple HTML string,
      //       // in this case we also use a defined component type `image`
      //       content: { type: 'image' },
      //       // This triggers `active` event on dropped components and the `image`
      //       // reacts by opening the AssetManager
      //       activate: true,
      //     }
      //   ]
      // },

    });
    var styleManager = this.editor.StyleManager
    styleManager.addProperty('Typography', {
      name: 'Alternate Fonts',
      property: 'font-family',
      type: 'select',
      defaults: '',
      list: [{
        value: '',
        name: ''
      },
      {
        value: 'Bank Gothic',
        name: 'Bank Gothic'
      }]
    })
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
      label: `<div>
  <img src="https://www.pngmart.com/files/15/Black-Wall-Clock-Clipart-PNG.png" height="50" width="50"/>
  <div class="my-label-block">Analog Clock</div>
</div>`,
      content: '<div class="clock"><div class="hand hour" data-hour-hand></div><div class="hand minute" data-minute-hand></div><div class="hand second" data-second-hand></div><div class="number number1">1</div><div class="number number2">2</div><div class="number number3">3</div><div class="number number4">4</div><div class="number number5">5</div><div class="number number6">6</div><div class="number number7">7</div><div class="number number8">8</div><div class="number number9">9</div><div class="number number10">10</div><div class="number number11">11</div><div class="number number12">12</div></div><script>setInterval(setClock, 1000);const hourHand = document.querySelector("[data-hour-hand]"); const minuteHand = document.querySelector("[data-minute-hand]"); const secondHand = document.querySelector("[data-second-hand]"); function setClock() { const currentDate = new Date(); const secondsRatio = currentDate.getSeconds() / 60; const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; setRotation(secondHand, secondsRatio); setRotation(minuteHand, minutesRatio); setRotation(hourHand, hoursRatio) } function setRotation(element, rotationRatio) { element.style.setProperty("--rotation", rotationRatio * 360) } setClock()</script><style>.clock{width: 300px;height: 300px;background-color: rgba(255, 255, 255, .8);border-radius: 50%;border: 2px solid black;position: relative;}.clock .number {--rotation: 0;position: absolute;width: 100%;height: 100%;text-align: center;transform: rotate(var(--rotation));font-size: 1.5rem;}.clock .number1 { --rotation: 30deg; }.clock .number2 { --rotation: 60deg; }.clock .number3 { --rotation: 90deg; }.clock .number4 { --rotation: 120deg; }.clock .number5 { --rotation: 150deg; }.clock .number6 { --rotation: 180deg; }.clock .number7 { --rotation: 210deg; }.clock .number8 { --rotation: 240deg; }.clock .number9 { --rotation: 270deg; }.clock .number10 { --rotation: 300deg; }.clock .number11 { --rotation: 330deg; }.clock .hand {--rotation: 0;position: absolute;bottom: 50%;left: 50%;border: 1px solid white;border-top-left-radius: 10px;border-top-right-radius: 10px;transform-origin: bottom;z-index: 10;transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));}.clock::after {content: "";position: absolute;background-color: black;z-index: 11;width: 15px;height: 15px;top: 50%;left: 50%;transform: translate(-50%, -50%);border-radius: 50%;}.clock .hand.second {width: 3px;height: 45%;background-color: red;}.clock .hand.minute {width: 7px;height: 40%;background-color: black;}.clock .hand.hour {width: 10px;height: 35%;background-color: black;}@import url("https://fonts.googleapis.com/css?family=Raleway");* {font-family: Raleway;}.side-links {position: absolute;top: 15px;right: 15px;}.side-link {display: flex;align-items: center;justify-content: center;text-decoration: none;margin-bottom: 10px;color: white;width: 180px;padding: 10px 0;border-radius: 10px;}.side-link-youtube {background-color: red;}.side-link-twitter {background-color: #1DA1F2;}.side-link-github {background-color: #6e5494;}.side-link-text {margin-left: 10px;font-size: 18px;}.side-link-icon {color: white;font-size: 30px;}</style>',
    });
    blockManager.add('my-seocnd-block', {
      label: '<img src="https://img.captain-droid.com/wp-content/uploads/2018/04/com-accuweather-android-icon.png.webp" height="50" width="50"> <br>Hava Durumu',
      content: '',
    });
    blockManager.add('my-third-block', {
      label: 'Simple block 2',
      content: '<div class="test"> <p style="color:red">Oğuzhan ÇART</p></div><style>p{color: aqua;}</style>',
    });
  }
}
