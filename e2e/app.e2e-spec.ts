import { BusinesslistingsPage } from './app.po';

describe('businesslistings App', function() {
  let page: BusinesslistingsPage;

  beforeEach(() => {
    page = new BusinesslistingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
