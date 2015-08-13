toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.completedTasks = [];
  self.listTasks = [];

  self.addTask = function() {
    self.listTasks.push({ 'task': self.newTask, 'isChecked': false});
    self.newTask = '';
  };

  self.isChecked = function() {
    self.listTasks.isChecked = true;
  };

  self.clearAllChecked = function(){
    self.clearCheckedIncomplete();
    self.clearCheckedComplete();
  };

  self.clearCheckedIncomplete = function(){
    self.listTasks = self.listTasks.filter(function(task){
      return !task.isChecked;
    });
  };

  self.clearCheckedComplete = function(){
    self.completedTasks = self.completedTasks.filter(function(task){
      return !task.isChecked;
    });
  };

  self.markCheckedAsComplete = function() {
    self.completedTasks = self.listTasks.filter(function(task){
      return task.isChecked;
    });
    self.clearCheckedIncomplete();
    self.completedTasks.filter(function(task){
      task.isChecked = false;
    });
  };

}]);