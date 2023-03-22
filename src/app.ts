import { Component } from './components/component';
import { Composable, PageItemComponent } from './components/page/page';
import { TodoComponent } from './components/page/item/todo';
import { NoteComponent } from './components/page/item/note';
import { ImageComponent } from './components/page/item/image';
import { PageComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video';
import { InputDialog } from './components/dialog/dialog';

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    this.page.addChild(image);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    const video = new VideoComponent(
      'imase - Night Dancer',
      'https://www.youtube.com/embed/--mDcWPbzFs'
    );
    this.page.addChild(video);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        // Create section and add on page
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement);
