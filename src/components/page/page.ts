import { BaseComponent } from '../component';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super(`<ul class='page'>This is PageComponent!</ul>`);
  }
}
