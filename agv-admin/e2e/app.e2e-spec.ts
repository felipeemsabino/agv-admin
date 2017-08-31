import { AgvAdminPage } from './app.po';

describe('agv-admin App', () => {
  let page: AgvAdminPage;

  beforeEach(() => {
    page = new AgvAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
