'use strict';
// Tasks Controller

class TasksController {

	constructor() {
	this.$addTaskForm = $(`#add_task`)
	this.$taskDescriptionInput = $(`#task_description`)
	this.$selectListMenu = $(`#select_list`)
	this.$taskPriorityInput = $(`#task_priority`)
	this.$wrapper = $(`#wrapper`)
	}

	
	 init() {
        this.$addTaskForm.submit((event) => {
            event.preventDefault()
            for(let i = 0; i < List.all.length; i++) {
              	if(List.all[i].id == this.$selectListMenu.val()) {
                	new Task(this.$taskDescriptionInput.val(), this.$taskPriorityInput.val(), List.all[i]).build()
             	}
           	}
       	    $('.destroy-task').click(function() {
				for (let i = 0; i<List.all.length; i++) {
					debugger
					if (List.all[i].id == this.parentElement.getAttribute('data-id')) {
						List.all[i].tasks[this.parentElement.getAttribute('data-id')] = null
					}
				}
				this.parentElement.remove()
			})
        })
    }	
}
