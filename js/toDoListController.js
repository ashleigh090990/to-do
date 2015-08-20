toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.completedTasks = [];
  self.listTasks = [];

  self.addTask = function() {
    self.listTasks.push({ 'task': self.newTask, 'isChecked': false});
    self.newTask = '';    
  };

  self.addTasksToLocalStorage = function() {
      var allTasks = [];
      for (var i=0; i<self.listTasks.length; i++) {
        allTasks.push(self.listTasks[i].task);
      };
      for (var i=0; i<self.completedTasks.length; i++) {
        allTasks.push(self.completedTasks[i].task);
      };
      localStorage.setItem("allTasks", allTasks);
      console.log("Hello");
      console.log(allTasks);
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
    for (var i=0; i<self.listTasks.length; i++) {
      if (self.listTasks[i].isChecked = true) {
        self.completedTasks.push(self.listTasks[i]);
        self.clearCheckedIncomplete();
      };
    };
    for (var i=0; i<self.completedTasks.length; i++) {
      self.completedTasks[i].isChecked = false;
    };
  };

}]);