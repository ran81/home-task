import type { Inquiry } from "../types/inquiry";

export const MOCK_INQUIRIES: Inquiry[] = [
  {
    id: "1001",
    customerName: "Yossi Cohen",
    customerDetails: {
      idNumber: "012345678",
      phone: "054-1234567",
      email: "yossi.cohen@gmail.com",
    },
    status: "New",
    category: "Car",
    createdAt: "2026-05-18T09:30:00Z",
    summary:
      "Claim submission following a minor rear-end collision in Tel Aviv.",
    history: [
      {
        id: "h1",
        date: "2026-05-18T09:30:00Z",
        status: "New",
        user: "System",
        comment: "Inquiry opened via online portal.",
      },
    ],
  },
  {
    id: "1002",
    customerName: "Michal Levi",
    customerDetails: {
      idNumber: "098765432",
      phone: "052-7654321",
      email: "michal.l@outlook.com",
    },
    status: "In Progress",
    category: "Health",
    createdAt: "2026-05-15T14:15:00Z",
    summary:
      "Request for pre-approval regarding private orthopedic surgery coverage.",
    history: [
      {
        id: "h2",
        date: "2026-05-15T14:15:00Z",
        status: "New",
        user: "System",
        comment: "Inquiry received.",
      },
      {
        id: "h3",
        date: "2026-05-16T11:00:00Z",
        status: "In Progress",
        user: "Dana (Rep)",
        comment:
          "Sent medical documents to underwriting department for review.",
      },
    ],
  },
  {
    id: "1003",
    customerName: "Avi Mizrahi",
    customerDetails: {
      idNumber: "034567891",
      phone: "050-5554433",
      email: "avi.miz@windowslive.com",
    },
    status: "Resolved",
    category: "Home",
    createdAt: "2026-05-10T08:00:00Z",
    summary: "Water damage assessment in apartment kitchen ceiling.",
    history: [
      {
        id: "h4",
        date: "2026-05-10T08:00:00Z",
        status: "New",
        user: "System",
        comment: "Opened via phone call.",
      },
      {
        id: "h5",
        date: "2026-05-12T16:00:00Z",
        status: "In Progress",
        user: "Ron (Rep)",
        comment: "Plumber dispatch confirmed.",
      },
      {
        id: "h6",
        date: "2026-05-14T10:30:00Z",
        status: "Resolved",
        user: "Ron (Rep)",
        comment: "Plumber visit completed, claim approved and settled.",
      },
    ],
  },
];
