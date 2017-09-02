# ion-custom-range
Custom range directive for Ionic Framework. It has the same look and feel of the input range component, except more additional features like custom ui, tips, control over min max values, click handler and also the double range slider. 

Taken inspiration from https://github.com/bkuzmic/ion-custom-range
## Usage

 - Install using bower:
```cmd
bower install --save ion-custom-range
```
    
 - Add to index.html 
```html
    <link href="lib/ion-custom-range/dist/ion-custom-range.min.css" rel="stylesheet">
    <script src="lib/ion-custom-range/dist/ion-custom-range-min.js"></script>
```
- add as dependency to app
```javascript
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionicCustomRange'])
```
-Use as normal range of ionic
```html
<div class="item range">
  <i class="icon ion-volume-low"></i>
  <ion-custom-range ng-model="data.volume" min="0" max="100" tip="true"></ion-custom-range>
  <i class="icon ion-volume-high"></i>
</div>
```

## Demo

If you are seeing this on desktop (chrome) then enable Device Mode
http://ion-custom-range.ask4kapil.xyz

## Sample screens

- Basic range: set min, max, value, tip(true/false) and step


![alt text](http://ion-custom-range.ask4kapil.xyz/img/image1.png
 "Basic range slider")
 
 - Editable: listen for changes in min, max, value, tip and step values

![alt text](http://ion-custom-range.ask4kapil.xyz/img/image2.png
 "Editable configurable")
 
 - Advanced range slider: Double range slider, custom css etc.

![alt text](http://ion-custom-range.ask4kapil.xyz/img/image3.png
 "Advanced screen")

