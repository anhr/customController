# customController
Example of using of the dat.gui controllers.CustomController in your ES module.
See details of issue in [.add( controller )](https://github.com/dataarts/dat.gui/issues/4).
Attention!!! Please use my version of the [dat.gui](https://github.com/anhr/dat.gui). Currently I have made the [Pull Reqest](https://github.com/dataarts/dat.gui/pull/232) for including of the controllers.CustomController into dat.gui. 
[Example](https://raw.githack.com/anhr/three.js/dev/examples/webgl_custom_controller.html).

## Packaged Builds
The easiest way to use customController in your code is by using the built source at `build/customcontrollers.js`. These built JavaScript files bundle all the necessary dependencies to run customController.

In your `head` tag, include the following code:
```html
<script type="text/javascript" src="customcontrollers.js"></script>
```

Now you can use customcontrollers object for access to two custom controllers:

```
customcontrollers.KnobController - class KnobController.
customcontrollers.PlayController - class PlayController.
```

[Example](https://raw.githack.com/anhr/three.js/dev/examples/webgl_custom_controller.html) of using:

```
	var gui = new dat.GUI();


	gui.add( new customcontrollers.PlayController( function ( controller ) {

			//Add your custom elements into controller.domElement

	} ) );

	//Example of extension version of using of customcontrollers.PlayController. The NumberControllerSlider was added into customcontrollers.PlayController also.
	// gui.add function returns NumberControllerSlider.
	var controllerPlay = gui.add( new customcontrollers.PlayController(  function ( controller ) {

			//Add your custom elements into controller.domElement

	}  ),
	{

		playRate: 1,

	}, 'playRate', 1, 25, 1 ).onChange( function ( value ) {

		//User has changed the NumberControllerSlider value

	} );
	controllerPlay.domElement.title = 'Rate of changing of 3D obects per second.';

	gui.add( new customcontrollers.KnobController( 1, 2 ) );

	//Example of extension version of using of customcontrollers.KnobController. The NumberControllerSlider was added into customcontrollers.KnobController also.
	// gui.add function returns NumberControllerSlider.
	var controllerKnob = folder3.add( new customcontrollers.KnobController( 3, 4 ), {

		playRate: 1,

	}, 'playRate', 1, 25, 1 ).onChange( function ( value ) {

		//User has changed the NumberControllerSlider value

	} );

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
