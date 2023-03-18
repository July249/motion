import { BaseComponent } from '../../component';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string, index: number) {
    super(`<section class='todo'>
            <h2 class='todo__title'></h2>
            <input type='checkbox' class='todo-checkbox' />
            <label></label>
          </section>`);

    const titleElement = this.element.querySelector(
      '.todo__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const checkboxElement = this.element.querySelector(
      '.todo-checkbox'
    )! as HTMLInputElement;
    checkboxElement.id = String(index);

    const todoElement = this.element.querySelector(
      'label'
    )! as HTMLLabelElement;
    todoElement.htmlFor = String(index);
    todoElement.textContent = todo;
  }
}
