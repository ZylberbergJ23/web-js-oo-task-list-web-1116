'use strict';
// Tasks Controller

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TasksController = function () {
	function TasksController() {
		_classCallCheck(this, TasksController);

		this.$addTaskForm = $('#add_task');
		this.$taskDescriptionInput = $('#task_description');
		this.$selectListMenu = $('#select_list');
		this.$taskPriorityInput = $('#task_priority');
		this.$wrapper = $('#wrapper');
	}

	_createClass(TasksController, [{
		key: 'init',
		value: function init() {
			var _this = this;

			this.$addTaskForm.submit(function (event) {
				event.preventDefault();
				for (var i = 0; i < List.all.length; i++) {
					if (List.all[i].id == _this.$selectListMenu.val()) {
						new Task(_this.$taskDescriptionInput.val(), _this.$taskPriorityInput.val(), List.all[i]).build();
					}
				}
				$('.destroy-task').click(function () {
					for (var _i = 0; _i < List.all.length; _i++) {
						debugger;
						if (List.all[_i].id == this.parentElement.getAttribute('data-id')) {
							List.all[_i].tasks[this.parentElement.getAttribute('data-id')] = null;
						}
					}
					this.parentElement.remove();
				});
			});
		}
	}]);

	return TasksController;
}();