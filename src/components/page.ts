interface PageLayout {
  app: HTMLDivElement;
}

export default class Page implements PageLayout {
  app: HTMLDivElement;

  static instance: Page = new Page();

  private constructor() {
    this.app = document.getElementById('app') as HTMLDivElement;
  }

  render() {
    const p = document.createElement('p') as HTMLParagraphElement;
    p.textContent = 'This is PageComponent';

    this.app.append(p);
  }
}
