import { HashPlayPage } from './app.po';

describe('hash-play App', function() {
  let page: HashPlayPage;

  beforeEach(() => {
    page = new HashPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
