'use strict';
// List Model

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
	function List(title) {
		_classCallCheck(this, List);

		this.title = title;
		this.id = List.all.length;
		this.tasks = [];
		List.all.push(this);
	}

	_createClass(List, [{
		key: 'listEl',
		value: function listEl() {
			return '<div class="list"><h2><button class="destroy-list">x</button> ' + this.title + '</h2><ul id="list-' + this.id + '" data-id="' + this.id + '"></ul></div>';
		}
	}, {
		key: 'optionEl',
		value: function optionEl() {
			return '<option value="' + this.id + '">' + this.title + '</option>';
		}
	}, {
		key: 'build',
		value: function build() {
			$('#select_list').append(this.optionEl());
			$('#lists').append(this.listEl());
		}
	}]);

	return List;
}();

List.all = [];