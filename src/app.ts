import { Component } from './components/component';
import { Composable } from './components/page/page';
import { TodoComponent } from './components/page/item/todo';
import { NoteComponent } from './components/page/item/note';
import { ImageComponent } from './components/page/item/image';
import { PageComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video';

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
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
  }
}

new App(document.querySelector('.document')! as HTMLElement);
