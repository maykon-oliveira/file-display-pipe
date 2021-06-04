import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  files: File[] = [];

  handleOnlyImages(event: any) {
    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      alert('Apenas imagens são suportados');
      return;
    }

    this.files = event.target.files;
  }

  handleOnly2Images(event: any) {
    if (!event.target.files[0] || event.target.files.length > 2) {
      alert('No máximo dois arquivos');
      return;
    }

    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      alert('Apenas imagens são suportados');
      return;
    }

    this.files = event.target.files;
  }

  handleOnlyPngImages(event: any) {
    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/png/) == null) {
      alert('Apenas imagens PNG são suportados');
      return;
    }

    this.files = event.target.files;
  }
}
