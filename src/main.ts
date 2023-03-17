import Page from './components/page';

const initApp = (): void => {
  const page = Page.instance;
  page.render();
};

document.addEventListener('DOMContentLoaded', initApp);
