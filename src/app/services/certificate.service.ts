import { Injectable } from '@angular/core';
import { StudentCertificate } from '../models/student-certificate';

@Injectable({ providedIn: 'root' })
export class CertificateService {
  private items: StudentCertificate[] = [];
  private nextId = 1;

  constructor() {
    // load from localStorage if available
    const raw = localStorage.getItem('certificates_v1');
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as StudentCertificate[];
        this.items = parsed;
        this.nextId = this.items.reduce((m, x) => Math.max(m, x.id), 0) + 1;
      } catch {}
    }
  }

  private persist() {
    localStorage.setItem('certificates_v1', JSON.stringify(this.items));
  }

  getAll(): StudentCertificate[] { return [...this.items]; }

  add(cert: Omit<StudentCertificate, 'id'>) {
    const item: StudentCertificate = { id: this.nextId++, ...cert };
    this.items.push(item);
    this.persist();
  }

  markCollected(id: number) {
    const it = this.items.find(x => x.id === id);
    if (it) {
      it.collected = true;
      this.persist();
    }
  }

  remove(id: number) {
    this.items = this.items.filter(x => x.id !== id);
    this.persist();
  }

  clearAll() {
    this.items = [];
    this.nextId = 1;
    this.persist();
  }
}
