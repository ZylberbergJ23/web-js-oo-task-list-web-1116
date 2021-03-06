'use strict';
// Task Model


class Task {
	constructor(description, priority, list) {
		this.description = description
		this.priority = priority
		this.list = list
		this.list.tasks.push(this)
		this.id = this.list.tasks.length -1 
	}

	liEl () {
		return `<li data-id="${this.id}"><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`
	}

	build() {
		// return `<div class="list"><h2><button class="destroy-list">x</button> ${this.list.title}</h2><ul id="list-${this.list.id}" data-id="${this.id}"></ul></div>`
		$(`#list-${this.list.id}`).append(this.liEl())
	}

}