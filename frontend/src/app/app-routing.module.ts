import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlShorteningFormComponent } from './url-shortening-form/url-shortening-form.component';
import { ShortenedUrlDisplayComponent } from './shortened-url-display/shortened-url-display.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: '', component: UrlShorteningFormComponent },
  { path: 'shortened-url', component: ShortenedUrlDisplayComponent },
  { path: ':shortCode', component: RedirectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
