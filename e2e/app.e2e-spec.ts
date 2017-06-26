import { Advice2Page } from './app.po';

describe('advice2 App', () => {
  let page: Advice2Page;

  beforeEach(() => {
    page = new Advice2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
