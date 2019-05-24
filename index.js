/**
 * Example of using of the dat.gui controllers.CustomController
 * http://code.google.com/p/dat-gui
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

export class PlayController extends controllers.CustomController {
	constructor(object, property) {
		super(object, property);
	}
	// ...
}

export class KnobController extends controllers.CustomController {
	constructor(addButton, a, b ) {
		super({

			constructor: function (controller) {

				addButton(controller, 'Knob Controller', 'Please press knob', function (value) {

					alert('Knob Controller ' + (a + b));

				});
			},

		});

	}
	// ...
}
