# customController

Attention!!! Please use my version of the [dat.gui](https://github.com/anhr/dat.gui). Currently I have made the [Pull Reqest](https://github.com/dataarts/dat.gui/pull/232) for including of the controllers.CustomController into dat.gui. 

## You can create your own custom controller for  dat.gui in your ES module.

In your JavaScript module, include the following code:
```
import CustomController from '/dat.gui/src/dat/controllers/CustomController.js';
```

Then you can to create your own custom controller class:
```
function addButton( innerHTML, title, onclick ) {

	var button = document.createElement( 'span' );
	button.innerHTML = innerHTML;
	if ( title !== undefined )
		button.title = title;
	if ( onclick !== undefined ) {

		button.style.cursor = 'pointer';
		button.onclick = onclick;

	}
	button.style.margin = '0px 2px';
	return button;

}

class ScaleController extends CustomController {

	constructor( ) {

		super( {

			playRate: 1.1,//Default play rate is 1 changes per second
			property: function ( customController ) {

				var buttons = {};
				buttons.zoomLabel = addButton( 'zoom' );
				buttons.in = addButton( '↑', 'in', function () {

					//onclick
					var zoom = customController.controller.getValue();
					console.log( 'onclick Zoom in' );

				} );
				buttons.out = addButton( '↓', 'out', function () {

					//onclick
					var zoom = customController.controller.getValue();
					console.log( 'onclick Zoom out' );

				} );
				return buttons;

			},

		}, 'playRate', 1.1, 10, 0.1 );
		if ( this.property === undefined )
			console.error( 'init() returns ' + this.property );

	}

}
```
Now you can add your custom controller into dat.gui:
```
var gui = new dat.GUI();
gui.add( new ScaleController() );
```

## Example of using of the dat.gui controllers.CustomController in your ES module.
See details of issue in [.add( controller )](https://github.com/dataarts/dat.gui/issues/4).
[Example](https://raw.githack.com/anhr/three.js/dev/examples/webgl_custom_controller.html).

### Packaged Builds
The easiest way to use customController in your code is by using the built source at `build/customcontrollers.js`. These built JavaScript files bundle all the necessary dependencies to run customController.

In your `head` tag, include the following code:
```html
<script src="https://raw.githack.com/anhr/customController/master/build/customcontrollers.js"></script>
```

Now you can use customcontrollers object for access to custom controllers:

```
customcontrollers.KnobController - Example of subtype of CustomController class.
customcontrollers.PlayController - Example of subtype of CustomController class.
 * Periodically changes the selected 3D object.
 * Adds NumberControllerSlider controller into PlayController for changing of the rate of changing of 3D obects per second.
customcontrollers.PrevAndNextController - Example of subtype of CustomController class.
 * Selects previous or next 3D object.
```

[Example](https://raw.githack.com/anhr/three.js/dev/examples/webgl_custom_controller.html) of using:

```
	var gui = new dat.GUI();

	const api = {

		color: '#ffffff',
		value: 0.5,

	};

	gui.add( api, 'color' );

	//KnobController
	gui.add( new customcontrollers.KnobController( api, 'value', 0.5, 25 ) );

	function addButton( innerHTML, title, onclick ) {

		var button = document.createElement( 'span' );
		button.innerHTML = innerHTML;
		button.title = title;
		button.style.cursor = 'pointer';
		button.style.margin = '0px 2px';
		button.onclick = onclick;
		return button;

	}

	//PlayController
	var controllerPlayRate = gui.add( new customcontrollers.PlayController( function () {

		buttons = {},

		//Play button
		buttons.buttonPlay = addButton( '►', 'Animate of 3D object', function ( value ) {

			console.log('Play event');

		} );

		//Repeat button
		buttons.buttonRepeat = addButton( '⥀', 'Turn repeat on', function ( value ) {

			console.log('Repeat event');

		} );

		return buttons;

	} ) ).onChange( function ( value ) {

		console.log('Change play rate event');

	} );
	controllerPlayRate.domElement.title = 'Rate of changing of 3D obects per second.';

	//PrevAndNextController
	gui.add( new customcontrollers.PrevAndNextController( function () {

		buttons = {},

		//Go to previous object 3D button
		buttons.buttonPrev = addButton( '←', 'Go to previous 3D object', function ( value ) {

			console.log('Go to previous 3D object event');

		} );

		//Go to next object 3D button
		buttons.buttonNext = addButton( '→', 'Go to next 3D object', function ( value ) {

			console.log('Go to next 3D object event');

		} );

		return buttons;

	} ) );

```


### Directory Contents

```
└── build - Compiled source code.
```

### Building your own customController

In the terminal, enter the following:

```
$ npm install
$ npm run build
```

### npm scripts

- npm run build - Build development and production version of scripts.

## Thanks
The following libraries / open-source projects were used in the development of customController:
 * [Rollup](https://rollupjs.org)
 * [Node.js](http://nodejs.org/)
