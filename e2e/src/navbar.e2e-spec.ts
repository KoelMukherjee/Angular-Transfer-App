import { browser, by, element } from "protractor";

describe('Navbar', () => {

  beforeEach(() => {
    browser.get('home'); // before each test navigate to home page.
  });

  it('testing Navbar', () => {
    browser.sleep(2000).then(function(){
      checkNavbarTexts();
    });
  });

  function checkNavbarTexts(){
    element(by.id('home-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Home');
    });


    element(by.id('transaction-navbar')).getText().then(function(text){ // Promise
      expect(text).toEqual('Transaction');
    });
  }
});