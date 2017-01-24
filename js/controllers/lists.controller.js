'use strict';
// Lists Controller

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListsController = function () {
	function ListsController() {
		_classCallCheck(this, ListsController);

		this.$addListForm = $('#add_list');
		this.$listTitleInput = $('#list_title');
		this.$selectListMenu = $('#select_list');
		this.$addTaskForm = $('#add_task');
		this.$wrapper = $('#wrapper');
	}

	_createClass(ListsController, [{
		key: 'init',
		value: function init() {
			var _this = this;

			this.$addTaskForm.css('display', 'none'); // or this.$addTaskForm.hide()
			this.$addListForm.submit(function (event) {
				event.preventDefault();
				_this.$addTaskForm.css('display', 'block');
				new List(_this.$listTitleInput.val()).build();
				$('.destroy-list').click(function () {
					// this -> is the delete button
					// this.parentElement -> is the one up of the html so could be like the <h2> element
					this.parentElement.parentElement.remove();
				});
			});
		}
	}]);

	return ListsController;
}();