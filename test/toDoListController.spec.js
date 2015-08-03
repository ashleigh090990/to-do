describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initilizes with an an empty task list', function() {
    expect(ctrl.listTasks).toEqual([]);
  });

  it('can add an item and display that item', function() {
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard', 'isComplete': false}]);
  });

  it('can display more than one item in the to do list', function() {
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.newTask = "Marry off Larry to a rich evil genius";
    ctrl.addTask();
    ctrl.newTask = "Raise Larry's evil lizard children";
    ctrl.addTask();
    ctrl.newTask = "Take over the world";
    ctrl.addTask();
    expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard', 'isComplete': false}, { 'task': 'Marry off Larry to a rich evil genius', 'isComplete': false}, { 'task': "Raise Larry's evil lizard children", 'isComplete': false}, { 'task': 'Take over the world', 'isComplete': false}]);
  });

  it('knows item is not complete', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    expect(ctrl.listTasks[0].isComplete).toEqual(false);
  });

  it('can mark a completed item as not complete', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.listTasks[0].isComplete = true;
    ctrl.listTasks[0].isComplete = false;
    expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard', 'isComplete': false}]);
  });

  it('can delete a completed item', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.listTasks[0].isComplete = true;
    ctrl.clearCompleted();
    expect(ctrl.listTasks).toEqual([]);
  });

  it('cannot clear an active item', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.clearCompleted();
    expect(ctrl.itemList).toEqual([{'name': 'Buy milk', 'isCompleted': false}]);
  });

});