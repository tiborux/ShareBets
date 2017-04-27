import { ShareBetPage } from './app.po';

describe('share-bet App', function() {
  let page: ShareBetPage;

  beforeEach(() => {
    page = new ShareBetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
