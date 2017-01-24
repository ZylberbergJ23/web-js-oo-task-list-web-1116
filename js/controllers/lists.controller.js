'use strict';
// Lists Controller

class ListsController {
	constructor() {
	this.$addListForm = $(`#add_list`)
	this.$listTitleInput = $(`#list_title`)
	this.$selectListMenu = $(`#select_list`)
	this.$addTaskForm = $(`#add_task`)
	this.$wrapper = $(`#wrapper`)
	}

	init() {
		this.$addTaskForm.css('display', 'none') // or this.$addTaskForm.hide()
		this.$addListForm.submit((event) => {
			event.preventDefault(); 
			this.$addTaskForm.css('display', 'block');
			new List(this.$listTitleInput.val()).build()
			$('.destroy-list').click(function() {
				// this -> is the delete button
				// this.parentElement -> is the one up of the html so could be like the <h2> element
				this.parentElement.parentElement.remove()
			})
		})
	}	
}
