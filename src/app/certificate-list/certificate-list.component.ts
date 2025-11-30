import { Component } from '@angular/core';
import { CertificateService } from '../services/certificate.service';
import { StudentCertificate } from '../models/student-certificate';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html'
})
export class CertificateListComponent {
  constructor(public svc: CertificateService) {}
  get items(): StudentCertificate[] { return this.svc.getAll(); }
}
