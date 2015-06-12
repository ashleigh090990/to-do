describe('ToDoListController', function() {
  beforeEach(module('ToDoListController'));

  var controller;

  beforeEach(inject(function($controller) {
    controller = $controller('ToDoListController');
  }));

  it('initializes with an empty list', function() {
		expect(controller.toDoList).toBeUndefined();
	});
});