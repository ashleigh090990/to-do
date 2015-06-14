toDoList.controller('ToDoListController', [function(){
	var self = this;

	self.listTasks = [];

	self.addTask = function(){
		self.listTasks.push({ 'task': self.newTask });
		self.newTask = '';
	console.log(self.listTasks)
	};

	console.log(self.listTasks)

}]);
