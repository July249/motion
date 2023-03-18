import { TodoComponent } from './components/page/item/todo';
import { NoteComponent } from './components/page/item/note';
import { ImageComponent } from './components/page/item/image';
import { PageComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video';

class App {
  private readonly page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      'Image Title',
      'https://picsum.photos/600/300'
    );
    image.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note Title', 'Note Body');
    note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    todo.attachTo(appRoot, 'beforeend');

    const video = new VideoComponent(
      'imase - Night Dancer',
      'https://www.youtube.com/embed/--mDcWPbzFs'
    );
    video.attachTo(appRoot, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
