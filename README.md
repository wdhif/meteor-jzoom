#jZoom

A tiny and easy-using jQuery plugin for zoomimg images

##Index

* [Quick start](#quick-start)
* [Options](#options)
* [Attentions](#attentions)

##Quick start

Get the package with :

```
meteor add wdhif:jzoom
```

Call the plugin on an image's container as simple as

```javascript
$('#container').jzoom();
```

All done !

##Options

Custom the plugin with available options which are listed below.

```javascript
$('#container').jzoom({
    option: value,
    option2: value2,
    ...
});
```

| Option | Type | Default | Description |
|:---:|:---:|:---:|:---:|
| width | Number | 400 | The width of  zooming window. |
| height | Number | 400 | The height of  zooming window. |
| position | String | "right" | The relative positon to the zoomed image or container. "top", "bottom" and "left" are permitted.  |
| offsetX | Number | 20 | The deviation on X-asix, can't be negative. |
| offsetY | Number | 0 | The deviation on Y-asix, can't be negative. |
| opacity | Number | 0.6 | The opacity of lens div. |
| bgColor | String | "#fff" | The background color of lens div. |
| loading | String | "Loading..." | The loading text on zooming window when  big image is loading. |
| suffixName | String | "_big" | The suffix name of big image. |
| imgType | String | the zoomed image type | The type of big image. The default option is recommended. |

##Attentions

1. No CSS needed.

2. The container will be added `position: relative` if it's not positioned.
