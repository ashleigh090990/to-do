toDoList.controller('ToDoListController', [function(){
  var self = this;

  self.completedTasks = [];
  self.listTasks = [];

  self.addTask = function() {
    self.listTasks.push({'task': self.newTask, 'isChecked': false});
    self.newTask = '';    
  };

  self.updateTasksInLocalStorage = function() {
    self.updateIncompleteAndCompleteTasksInLS(self.listTasks, "allIncompleteTasks");
    self.updateIncompleteAndCompleteTasksInLS(self.completedTasks, "allCompleteTasks");
  };

  self.updateIncompleteAndCompleteTasksInLS = function(nameOfTaskList, nameOfLocalStorageList) {
    var allIncompleteTasks = [];
    for (var i=0; i<nameOfTaskList.length; i++) {
      allIncompleteTasks.push(nameOfTaskList[i].task);
    };
    localStorage.setItem(nameOfLocalStorageList, allIncompleteTasks);
  };

  self.retrieveTasksFromLocalStorage = function() {
    self.retrieveIncompleteAndCompleteFromLS(localStorage.allIncompleteTasks, self.listTasks);
    self.retrieveIncompleteAndCompleteFromLS(localStorage.allCompleteTasks, self.completedTasks);
  };


  self.retrieveIncompleteAndCompleteFromLS = function(nameOfLocalStorageList, nameOfTaskList) {
    if ((nameOfLocalStorageList.length > 0)) {
      var previousTasks = nameOfLocalStorageList.split(",");
      for (var i=0; i<previousTasks.length; i++) {
        nameOfTaskList.push({'task': previousTasks[i], 'isChecked': false});
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