import { A2courseprojPage } from './app.po';

describe('a2courseproj App', () => {
  let page: A2courseprojPage;

  beforeEach(() => {
    page = new A2courseprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
