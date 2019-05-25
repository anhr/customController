# customController
Example of using of the dat.gui controllers.CustomController in your ES module.
See details of issue in [.add( controller )](https://github.com/dataarts/dat.gui/issues/4).
Attention!!! Please use my version of the dat.gui. Currently I have made the [Pull Reqest](https://github.com/dataarts/dat.gui/pull/232) for including of the controllers.CustomController into dat.gui. 
[Example](https://raw.githack.com/anhr/three.js/dev/examples/webgl_custom_controller.html).

## Packaged Builds
The easiest way to use customController in your code is by using the built source at `build/customcontrollers.js`. These built JavaScript files bundle all the necessary dependencies to run customController.

In your `head` tag, include the following code:
```html
<script type="text/javascript" src="customcontrollers.js"></script>
```

## Directory Contents

```
└── build - Compiled source code.
```

## Building your own customController

In the terminal, enter the following:

```
$ npm install
$ npm run build
```

## npm scripts

- npm run build - Build development and production version of scripts.

## Thanks
The following libraries / open-source projects were used in the development of customController:
 * [Rollup](https://rollupjs.org)
 * [Node.js](http://nodejs.org/)

 ## Have a job for me?
Please read [About Me](https://anhr.github.io/AboutMe/).
