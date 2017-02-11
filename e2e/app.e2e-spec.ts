import { MyFancyAppPage } from './app.po';

describe('my-fancy-app App', function() {
  let page: MyFancyAppPage;

  beforeEach(() => {
    page = new MyFancyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
