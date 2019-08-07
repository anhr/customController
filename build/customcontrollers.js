/**
 * JavaScript Custom comtroller for dat-gui Controller Library
 * https://github.com/anhr/customController
 * @author Andrej Hristoliubov https://anhr.github.io/AboutMe/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.customcontrollers = {})));
}(this, (function (exports) { 'use strict';

class KnobController extends controllers.CustomController {
	constructor(object, property, a, b) {
		super(object, property);
		const _this = this;
		this.__input = document.createElement('input');
		this.__input.setAttribute('type', 'number');
		this.__input.style.width = '40%';
		this.updateDisplay();
		this.domElement.appendChild(this.__input);
		var button = document.createElement('input');
		button.setAttribute('type', 'button');
		button.value = 'Set ' + property;
		button.style.width = '50%';
		button.onclick = function (e) {
			object[property] = a + b;
			_this.updateDisplay();
		};
		this.domElement.appendChild(button);
	}
	updateDisplay() {
		this.__input.value = this.getValue();
	}
}
class PlayController extends controllers.CustomController {
	constructor(init) {
		super({
			playRate: 1,
			property: init
		}, 'playRate', 1, 25, 1);
		if (this.property === undefined) console.error('init() returns ' + this.property);
	}
}
class PrevAndNextController extends controllers.CustomController {
	constructor(init) {
		super({
			property: init
		});
		if (this.property === undefined) console.error(' init() returns ' + this.property);
	}
}

exports.KnobController = KnobController;
exports.PlayController = PlayController;
exports.PrevAndNextController = PrevAndNextController;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=customcontrollers.js.map
