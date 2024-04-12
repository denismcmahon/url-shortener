import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // get the short code from the URL
    const shortCode = this.route.snapshot.paramMap.get('shortCode');
    // send a request to the backend to retrieve the long URL
    const backendUrl = `${environment.backendUrl}/api/${shortCode}`;
    this.http.get< { longUrl: string }>(backendUrl)
      .subscribe(response => {
        // redirect to the long URL
        window.location.replace(response.longUrl);
      }, error => {
        console.error('Error redirecting:', error);
        // handle error (e.g. display error message)
        //this.router.navigateByUrl('/error');
      })
  }

}
