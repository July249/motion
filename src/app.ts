import { Component } from './components/component';
import { Composable, PageItemComponent } from './components/page/page';
import { TodoComponent } from './components/page/item/todo';
import { NoteComponent } from './components/page/item/note';
import { ImageComponent } from './components/page/item/image';
import { PageComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video';
import { InputDialog } from './components/dialog/dialog';
import { MediaSectionInput } from './components/dialog/input/media-input';
import { TextSectionInput } from './components/dialog/input/text-input';

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // Create section and add on page
        dialog.removeFrom(dialogRoot);
      });
    });

    // create noteBtn code like imageBtn
    const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
    noteBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        const note = new NoteComponent(inputSection.title, inputSection.body);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // Create section and add on page
        dialog.removeFrom(dialogRoot);
      });
    });

    // create todoBtn code like imageBtn
    const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
    todoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        const todo = new TodoComponent(inputSection.title, inputSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // Create section and add on page
        dialog.removeFrom(dialogRoot);
      });
    });

    // create videoBtn code like imageBtn
    const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
    videoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();
      dialog.addChild(inputSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        const video = new VideoComponent(inputSection.title, inputSection.url);
        this.page.addChild(video);
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        // Create section and add on page
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
