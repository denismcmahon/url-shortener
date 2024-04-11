import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url-shortening-form',
  templateUrl: './url-shortening-form.component.html',
  styleUrls: ['./url-shortening-form.component.sass']
})
export class UrlShorteningFormComponent {
  longUrl: string;
  shortUrl: string;

  constructor(private http: HttpClient) { }

  shortenUrl() {
    this.http.post<{ shortUrl: string }>('/api/shorten', { longUrl: this.longUrl })
      .subscribe(response => {
        this.shortUrl = response.shortUrl;
      }, error => {
        console.error('Error shortening URL:', error);
      });
  }

}
