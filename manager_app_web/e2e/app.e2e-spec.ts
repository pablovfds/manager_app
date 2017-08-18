import { SindAppWebPage } from './app.po';

describe('sind-app-web App', function() {
  let page: SindAppWebPage;

  beforeEach(() => {
    page = new SindAppWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
