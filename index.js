/**
 * Example of using of the dat.gui controllers.CustomController
 * https://github.com/anhr/dat.gui
 * @author Andrej Hristoliubov https://anhr.github.io/AboutMe/
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import { GUI, controllers } from '../../dat.gui';

/**
 * @class Example of subtype of CustomController class.
 *
 * @extends dat.controllers.CustomController
 *
 * @param {Object} object The object to be manipulated
 * @param {string} property The name of the property to be manipulated
 * @param {number} a
 * @param {number} b
 */
export class KnobController extends controllers.CustomController {
	constructor( object, property, a, b ) {
		super( object, property );

		// ... set up options if needed

		const _this = this;

		//input element
		this.__input = document.createElement( 'input' );
		this.__input.setAttribute( 'type', 'number' );
		this.__input.style.width = '40%';
		this.updateDisplay();
		this.domElement.appendChild( this.__input );

		//button element
		var button = document.createElement( 'input' );
		button.setAttribute( 'type', 'button' );
		button.value = 'Set ' + property;
		button.style.width = '50%';
		button.onclick = function ( e ) {
			object[property] = a + b;
			_this.updateDisplay();
		}
		this.domElement.appendChild( button );
	}

	updateDisplay() {
		this.__input.value = this.getValue();
	}
}

/**
 * @class Example of subtype of CustomController class.
 * Periodically changes the selected 3D object.
 * Adds NumberControllerSlider controller into PlayController for changing of the rate of changing of 3D obects per second.
 *
 * @extends dat.controllers.CustomController
 *
 * @param {Function} init Returns an object with elements for adding into "property-name" class element.
 */
export class PlayController extends controllers.CustomController {
	constructor( init ) {
		super( {

			playRate: 1,//Default play rate is 1 changes per second
			property: init,

		}, 'playRate', 1, 25, 1 );
//		this.property = init();
		if ( this.property === undefined )
			console.error( 'init() returns ' + this.property );
	}
}

/**
 * @class Example of subtype of CustomController class.
 * Selects previous or next 3D object
 *
 * @extends dat.controllers.CustomController
 *
 * @param {Function} init Returns an object with elements for adding into "property-name" class element.
 */
export class PrevAndNextController extends controllers.CustomController {
	constructor( init ) {
		super( {
			property: init,
		} );
//		this.property = init();
		if ( this.property === undefined )
			console.error( ' init() returns ' + this.property );
	}
}
