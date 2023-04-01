import { Component } from './components/component';
import {
  Composable,
  PageItemComponent,
  PageComponent,
} from './components/page/page';
import { TodoComponent } from './components/page/item/todo';
import { NoteComponent } from './components/page/item/note';
import { ImageComponent } from './components/page/item/image';
import { VideoComponent } from './components/page/item/video';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog';
import { MediaSectionInput } from './components/dialog/input/media-input';
import { TextSectionInput } from './components/dialog/input/text-input';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // image
    this.bindElementToDialog<MediaSectionInput>(
      '#new-image',
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    // video
    this.bindElementToDialog<MediaSectionInput>(
      '#new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    // note
    this.bindElementToDialog<TextSectionInput>(
      '#new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    // todo
    this.bindElementToDialog<TextSectionInput>(
      '#new-todo',
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );

    // For Demo
    this.page.addChild(
      new ImageComponent('Image Title', 'https://picsum.photos/600/300')
    );
    this.page.addChild(
      new VideoComponent(
        'Video Title',
        'https://www.youtube.com/watch?v=QH2-TGUlwu4'
      )
    );
    this.page.addChild(new NoteComponent('Note Title', 'Note Body'));
    this.page.addChild(new TodoComponent('Todo Title', 'Todo Item'));
    this.page.addChild(
      new ImageComponent('Image Title', 'https://picsum.photos/600/300')
    );
    this.page.addChild(
      new VideoComponent(
        'Video Title',
        'https://www.youtube.com/watch?v=QH2-TGUlwu4'
      )
    );
    this.page.addChild(new NoteComponent('Note Title', 'Note Body'));
    this.page.addChild(new TodoComponent('Todo Title', 'Todo Item'));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new InputComponent();
      dialog.addChild(inputSection);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const section = makeSection(inputSection);
        this.page.addChild(section);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
