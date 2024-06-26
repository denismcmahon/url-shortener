import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shortened-url-display',
  templateUrl: './shortened-url-display.component.html',
  styleUrls: ['./shortened-url-display.component.scss']
})
export class ShortenedUrlDisplayComponent {
  @Input() shortUrl: string;
}
