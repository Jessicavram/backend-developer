import { Proyecto2Angular4Page } from './app.po';

describe('proyecto2-angular4 App', () => {
  let page: Proyecto2Angular4Page;

  beforeEach(() => {
    page = new Proyecto2Angular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
