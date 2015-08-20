toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.completedTasks = [];
  self.listTasks = [];

  self.addTask = function() {
    self.listTasks.push({'task': self.newTask, 'isChecked': false});
    self.newTask = '';    
  };

  self.updateTasksInLocalStorage = function() {
      var allIncompleteTasks = [];
      var allCompleteTasks = [];
      for (var i=0; i<self.listTasks.length; i++) {
        allIncompleteTasks.push(self.listTasks[i].task);
      };
      for (var i=0; i<self.completedTasks.length; i++) {
        allCompleteTasks.push(self.completedTasks[i].task);
      };
      localStorage.setItem("allIncompleteTasks", allIncompleteTasks);
      localStorage.setItem("allCompleteTasks", allCompleteTasks);
  };

  self.retrieveTasksFromLocalStorage = function() {
    if ((localStorage.allIncompleteTasks.length > 0) || (localStorage.allCompleteTasks.length > 0)) {
      var previousIncompleteTasks = localStorage.allIncompleteTasks.split(",");
      var previousCompleteTasks = localStorage.allCompleteTasks.split(",");
      for (var i=0; i<previousIncompleteTasks.length; i++) {
        self.listTasks.push({'task': previousIncompleteTasks[i], 'isChecked': false});
      };
      for (var i=0; i<previousCompleteTasks.length; i++) {
        self.completedTasks.push({'task': previousCompleteTasks[i], 'isChecked': false});
      };
    };
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
      if (self.listTasks[i].isChecked === true) {
        self.completedTasks.push(self.listTasks[i]);
        self.clearCheckedIncomplete();
      };
    };
    for (var i=0; i<self.completedTasks.length; i++) {
      self.completedTasks[i].isChecked = false;
    };
  };

}]);