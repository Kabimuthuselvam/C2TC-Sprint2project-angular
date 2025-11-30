export interface StudentCertificate {
  id: number;
  studentName: string;
  rollNo: string;
  course: string;
  certificateName: string;
  dateIssued: string; // YYYY-MM-DD
  collected: boolean;
}
