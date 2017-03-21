import { APPPage } from './app.po';

describe('app App', () => {
  let page: APPPage;

  beforeEach(() => {
    page = new APPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
