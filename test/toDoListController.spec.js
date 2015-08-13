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
    expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard', 'isChecked': false}]);
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
    expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard', 'isChecked': false}, { 'task': 'Marry off Larry to a rich evil genius', 'isChecked': false}, { 'task': "Raise Larry's evil lizard children", 'isChecked': false}, { 'task': 'Take over the world', 'isChecked': false}]);
  });

  it('knows item is not complete', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    expect(ctrl.listTasks[0].isChecked).toEqual(false);
  });

  it('can mark a completed item as not complete', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.listTasks[0].isChecked = true;
    ctrl.listTasks[0].isChecked = false;
    expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard', 'isChecked': false}]);
  });

  it('can delete a checked item', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.listTasks[0].isChecked = true;
    ctrl.clearAllChecked();
    expect(ctrl.listTasks).toEqual([]);
  });

  it('cannot clear an active item', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.clearAllChecked();
    expect(ctrl.listTasks).toEqual([{'task': 'Feed Larry the lizard', 'isChecked': false}]);
  });

  it('can mark a checked item as complete', function(){
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.listTasks[0].isChecked = true;
    ctrl.markCheckedAsComplete();
    expect(ctrl.completedTasks).toEqual([{ 'task': 'Feed Larry the lizard', 'isChecked': false}]);
  });

  it('can delete a completed task', function() {
    ctrl.newTask = "Feed Larry the lizard";
    ctrl.addTask();
    ctrl.listTasks[0].isChecked = true;
    ctrl.markCheckedAsComplete();
    ctrl.completedTasks[0].isChecked = true;
    ctrl.clearAllChecked();
    expect(ctrl.completedTasks).toEqual([]);
  });

});