import { GdcWebPage } from './app.po';

describe('gdc-web App', () => {
  let page: GdcWebPage;

  beforeEach(() => {
    page = new GdcWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
