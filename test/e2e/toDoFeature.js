describe('ToDoList', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  describe('When initialized', function() {

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('toDoList');
    });

    it('has an input form', function() {
      expect(browser.isElementPresent(by.model('ctrl.newTask'))).toBe(true);
    });

    it('has a submit button', function() {
      expect(browser.isElementPresent(by.id('addTaskId'))).toBe(true);
    });

  });

});

describe('When tasks are added', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    element(by.id('newTaskId')).sendKeys('Walk Larry the lizard');
    element(by.id('addTaskId')).click();
  });

  it('has a task count of 1 after first task added', function() {
    expect(element(by.id('taskCount')).getText()).toEqual('You have 1 toDos!');
  });

  it('can mark an item as checked', function() {
    expect(browser.isElementPresent(by.id('checked'))).toBe(true);
  });

  it('can delete a checked item', function() {
    element(by.id('checked')).click();
    element(by.id('deleteCheckedItems')).click();
    expect(element(by.id('taskCount')).getText()).toEqual('You have 0 toDos!');
  });

  it('can mark a checked item as complete', function() {
    element(by.id('checked')).click();
    element(by.id('checkedItemsAreComplete')).click();
  });

  // it('hello', function() {
  //   element(by.repeater('eachTask in ctrl.listTasks')).getAttribute(value).toContain('Walk Larry the lizard');
  // });

});