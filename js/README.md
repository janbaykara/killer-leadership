# FitText.js, the AngularJS version, a tiny script for inflating web type
FitText makes font-sizes flexible. Use this directive script on your fluid or responsive layout to achieve scalable headlines that fill the width of a parent element.

## How it works
If you have an AngularJS webapp and want to achieve fluid text, just require this directive as a dependancy to your module.
```js
var app = angular.module('yourAwesomeApp', ['fitText']);
```
After that you can use the directive in your templates.
```html
<h1 fit-text>My page title</h1>
```

### Settings
There are some settings at your disposal.
#### Min/Max font-size
You can limit the maximum/minimum font-size, currently only supports values in px.
```html
<h1 fit-text min-font-size="20" max-font-size="60">My page title</h1>
```
#### The compressor
The default setting works pretty well, but when it doesn't FitText has one more setting you can adjust. If your text resizes poorly or is resizing all hurdy gurdy, you'll want to turn tweak up/down the compressor. It works a little like a guitar amp.
```html
<h1 fit-text compressor="1.2">My page title</h1> // turn the compressor up (font will shrink a bit more aggressively)
<h1 fit-text compressor="0.8">My page title</h1> // turn the compressor down (font will shrink less aggressively)
```
This will hopefully give you a level of "control" that might not be pixel perfect, but scales smoothly & nicely.

### Thanks
Thanks to Trent, Dave and Reagan for original FitText.js: https://github.com/davatron5000/FitText.js

Thanks to Jeremy for the non-jQuery version of FitText.js: https://github.com/adactio/FitText.js

http://fittextjs.com/
