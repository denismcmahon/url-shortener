import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-url-shortening-form',
  templateUrl: './url-shortening-form.component.html',
  styleUrls: ['./url-shortening-form.component.scss']
})
export class UrlShorteningFormComponent {
  longUrl: string;
  shortUrl: string;

  constructor(private http: HttpClient) { }

  shortenUrl() {
    const backendUrl = `${environment.backendUrl}/api/shorten`;
    this.http.post<{ shortUrl: string }>(backendUrl, { longUrl: this.longUrl })
      .subscribe(response => {
        this.shortUrl = response.shortUrl;
      }, error => {
        console.error('Error shortening URL:', error);
      });
  }

}
