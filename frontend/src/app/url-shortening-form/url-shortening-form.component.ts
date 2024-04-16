import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UrlHelperService } from '../services/url-helper.service';

@Component({
  selector: 'app-url-shortening-form',
  templateUrl: './url-shortening-form.component.html',
  styleUrls: ['./url-shortening-form.component.scss']
})
export class UrlShorteningFormComponent {
  longUrl: string;
  shortUrl: string;
  formSubmitted: boolean = false;

  constructor(private http: HttpClient, private urlHelper: UrlHelperService) { }

  isValidUrl(): boolean {
    let formattedUrl = this.urlHelper.formatUrl(this.longUrl);
    const isValidUrl = this.urlHelper.validateUrl(formattedUrl);
    return isValidUrl;
  }

  shortenUrl() {
    this.formSubmitted = true;
    const backendUrl = `${environment.backendUrl}/api/shorten`;
    let formattedUrl = this.urlHelper.formatUrl(this.longUrl);
    this.http.post<{ shortUrl: string }>(backendUrl, { longUrl: formattedUrl })
      .subscribe(response => {
        this.shortUrl = response.shortUrl;
        console.log('DM ==> response.shortUrl: ', response.shortUrl);
      }, error => {
        console.error('Error shortening URL:', error);
      });
  }

  resetFormSubmitted() {
    this.formSubmitted = false;
  }

}
