import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CertificateFormComponent } from './certificate-form/certificate-form.component';
import { CertificateListComponent } from './certificate-list/certificate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificateFormComponent,
    CertificateListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
