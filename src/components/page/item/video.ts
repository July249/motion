import { BaseComponent } from '../../component';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class='video'>
            <div class='video__player'>
              <iframe class='video__iframe'></iframe>
            </div>
            <h2 class='video__title'></h2>
          </section>`);

    const videoElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    videoElement.src = url; // url -> videoId -> embed

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
