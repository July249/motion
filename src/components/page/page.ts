import { BaseComponent, Component } from '../component';

export interface Composable {
  addChild(child: Component): void;
}

type OnClickListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnClickListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OnClickListener;
  constructor() {
    super(`<li class='page-item'>
            <section class='page-item__body'></section>
            <div class='page-item__controls'>
              <button class='close'>&times;</button>
            </div>
          </li>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      '.page-item__controls'
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnClickListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super(`<ul class='page'></ul>`);
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
