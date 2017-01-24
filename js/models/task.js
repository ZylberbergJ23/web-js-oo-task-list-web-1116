'use strict';
// Task Model


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
	function Task(description, priority, list) {
		_classCallCheck(this, Task);

		this.description = description;
		this.priority = priority;
		this.list = list;
		this.list.tasks.push(this);
		this.id = this.list.tasks.length - 1;
	}

	_createClass(Task, [{
		key: 'liEl',
		value: function liEl() {
			return '<li data-id="' + this.id + '"><button class="destroy-task">x</button> ' + this.description + ', ' + this.priority + '</li>';
		}
	}, {
		key: 'build',
		value: function build() {
			// return `<div class="list"><h2><button class="destroy-list">x</button> ${this.list.title}</h2><ul id="list-${this.list.id}" data-id="${this.id}"></ul></div>`
			$('#list-' + this.list.id).append(this.liEl());
		}
	}]);

	return Task;
}();