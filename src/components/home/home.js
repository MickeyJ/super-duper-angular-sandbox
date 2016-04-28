/** @namespace this */

export default class HomeController {
  constructor($log) {
    $log.info('hi from home');
    this.title = 'Hello';
    this.message = 'a message from home controller';
  }

  changeTitle() {
    this.title = this.newTitle;
    this.newTitle = null;
  }
}

HomeController.$inject = ['$log'];