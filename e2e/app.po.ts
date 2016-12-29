import { browser, element, by } from 'protractor';

export class MarkbarlowdotnetPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mb-app-root h1')).getText();
  }
}
