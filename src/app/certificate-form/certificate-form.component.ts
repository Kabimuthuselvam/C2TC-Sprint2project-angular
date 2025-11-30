import { Component } from '@angular/core';
import { CertificateService } from '../services/certificate.service';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html'
})
export class CertificateFormComponent {
  studentName = '';
  rollNo = '';
  course = '';
  certificateName = '';
  dateIssued = '';

  constructor(private svc: CertificateService) {}

  add() {
    if (!this.studentName || !this.rollNo) return;
    this.svc.add({
      studentName: this.studentName,
      rollNo: this.rollNo,
      course: this.course,
      certificateName: this.certificateName,
      dateIssued: this.dateIssued || new Date().toISOString().slice(0,10),
      collected: false
    });
    this.studentName = this.rollNo = this.course = this.certificateName = this.dateIssued = '';
  }
}
