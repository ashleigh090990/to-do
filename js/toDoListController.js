toDoList.controller('ToDoListController', [function(){
	var self = this;

	self.listTasks = [];

	self.addTask = function() {
		self.listTasks.push({ 'task': self.newTask, 'isComplete': false });
		self.newTask = '';
	};

	self.isComplete = function(taskName) {
		if (self.listTasks.taskName === taskName) {
			self.listTasks.isComplete = true;
		} else {
			self.listTasks.isComplete = false;
		};
	};

}]);
