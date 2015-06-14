describe('ToDoListController', function() {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initilizes with an an empty task list', function() {
    expect(ctrl.listTasks).toEqual([]);
  });

});