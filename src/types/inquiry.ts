export type InquiryStatus = "New" | "In Progress" | "Resolved" | "Closed";
export type InsuranceCategory = "Car" | "Health" | "Home" | "Life";

export interface HistoryEvent {
  id: string;
  date: string;
  status: InquiryStatus;
  user: string;
  comment: string;
}

export interface CustomerDetails {
  idNumber: string;
  phone: string;
  email: string;
}

export interface Inquiry {
  id: string; // Inquiry number
  customerName: string;
  customerDetails: CustomerDetails;
  status: InquiryStatus;
  category: InsuranceCategory;
  createdAt: string;
  summary: string;
  history: HistoryEvent[];
}
