toDoList.controller('ToDoListController', [function(){
	var self = this;

	self.listTasks = [];

	self.addTask = function(){
		self.listTasks.push({ 'task': self.newTask, 'isComplete': false });
		self.newTask = '';
	};

}]);
