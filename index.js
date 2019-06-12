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

export class KnobController extends controllers.CustomController {
	constructor( a, b ) {
		super(function (controller) {

			var button = document.createElement('span');
			button.innerHTML = 'Knob Controller';
			button.title = 'Please press knob';
			button.style.cursor = 'pointer';
			button.style.margin = '0px 2px';
			button.onclick = function (value) {

				alert('Knob Controller ' + ( knobController.a + knobController.b ));

			}
			controller.domElement.appendChild(button);

		});
		this.a = a;
		this.b = b;
		var knobController = this;

	}
}

export class PlayController extends controllers.CustomController {
	constructor(  init ) {
		super( init );
	}
}
