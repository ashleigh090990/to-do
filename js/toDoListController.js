toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.listTasks = [];

  self.addTask = function(){
    self.listTasks.push({ 'name': self.newTask });
    self.newTask = '';
  };

}]);
