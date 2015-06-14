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
		expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard'}]);
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
		expect(ctrl.listTasks).toEqual([{ 'task': 'Feed Larry the lizard'}, { 'task': 'Marry off Larry to a rich evil genius'}, { 'task': "Raise Larry's evil lizard children"}, { 'task': 'Take over the world'}]);
	});

});