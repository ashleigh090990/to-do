describe('ToDoList', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  describe('When initialized', function(){

    it('has a title', function() {
      expect(browser.getTitle()).toEqual('toDoList');
    });

    it('has an input form', function() {
      expect(browser.isElementPresent(by.model('ctrl.newTask'))).toBe(true);
    });

    it('has a submit button', function() {
      expect(browser.isElementPresent(by.id('button'))).toBe(true);
    });
  });
});