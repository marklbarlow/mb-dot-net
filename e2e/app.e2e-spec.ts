import { MarkbarlowdotnetPage } from './app.po';

describe('markbarlowdotnet App', function() {
  let page: MarkbarlowdotnetPage;

  beforeEach(() => {
    page = new MarkbarlowdotnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
