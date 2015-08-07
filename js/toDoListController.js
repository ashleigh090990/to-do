toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.completedTasks = [];
  self.listTasks = [];
  self.showIncompleteTasks = true;
  self.showCompletedTasks = false;

  self.addTask = function() {
    self.listTasks.push({ 'task': self.newTask, 'isChecked': false});
    self.newTask = '';
  };

  self.isChecked = function() {
    self.listTasks.isChecked = true;
  };

  self.clearChecked = function(){
    self.listTasks = self.listTasks.filter(function(task){
      return !task.isChecked;
    });
  };

  self.markCheckedAsComplete = function() {
    self.completedTasks = self.listTasks.filter(function(task){
      return task.isChecked;
    });
    self.clearChecked();
    self.completedTasks.filter(function(task){
      task.isChecked = false;
    });
  };

  self.showCompletedTasks = function(){
    self.showCompletedTasks = true;
  }

  self.showIncompleteTasks = function(){
    self.showCompletedTasks = false;
  }

}]);