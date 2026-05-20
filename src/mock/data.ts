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
  {
    id: "1004",
    customerName: "Tamar Dayan",
    customerDetails: {
      idNumber: "054321098",
      phone: "053-2221100",
      email: "tamar.dayan@hotmail.com",
    },
    status: "New",
    category: "Life",
    createdAt: "2026-05-19T11:20:00Z",
    summary:
      "Inquiry regarding policy modifications and updating premium beneficiaries.",
    history: [
      {
        id: "h7",
        date: "2026-05-19T11:20:00Z",
        status: "New",
        user: "System",
        comment: "Beneficiary change request form uploaded by user.",
      },
    ],
  },
  {
    id: "1005",
    customerName: "Roni Ashkenazi",
    customerDetails: {
      idNumber: "043210987",
      phone: "054-9876543",
      email: "roni.ash@gmail.com",
    },
    status: "In Progress",
    category: "Car",
    createdAt: "2026-05-14T07:45:00Z",
    summary:
      "Windshield replacement request following gravel storm damage on Highway 6.",
    history: [
      {
        id: "h8",
        date: "2026-05-14T07:45:00Z",
        status: "New",
        user: "System",
        comment: "Digital claim file initialized.",
      },
      {
        id: "h9",
        date: "2026-05-15T09:15:00Z",
        status: "In Progress",
        user: "Gal (Rep)",
        comment:
          "Authorized repair voucher forwarded to partner garage network.",
      },
    ],
  },
  {
    id: "1006",
    customerName: "Dan Shapira",
    customerDetails: {
      idNumber: "023456782",
      phone: "052-4445566",
      email: "d.shapira@yahoo.com",
    },
    status: "Closed",
    category: "Home",
    createdAt: "2026-04-28T16:10:00Z",
    summary:
      "Inquiry concerning premium discounts due to new smart home security installation.",
    history: [
      {
        id: "h10",
        date: "2026-04-28T16:10:00Z",
        status: "New",
        user: "System",
        comment: "Inquiry logged via CRM portal.",
      },
      {
        id: "h11",
        date: "2026-04-30T13:00:00Z",
        status: "Closed",
        user: "Maya (Rep)",
        comment:
          "Applied 5% protective system discount to policy structure. Case closed.",
      },
    ],
  },
  {
    id: "1007",
    customerName: "Noa Friedman",
    customerDetails: {
      idNumber: "087654321",
      phone: "050-8889900",
      email: "noa.friedman@gmail.com",
    },
    status: "In Progress",
    category: "Health",
    createdAt: "2026-05-13T12:00:00Z",
    summary:
      "Appeal submission regarding denied reimbursement for out-of-network dental care.",
    history: [
      {
        id: "h12",
        date: "2026-05-13T12:00:00Z",
        status: "New",
        user: "System",
        comment: "Inquiry initialized via formal email appeal document.",
      },
      {
        id: "h13",
        date: "2026-05-16T15:30:00Z",
        status: "In Progress",
        user: "Dana (Rep)",
        comment:
          "Escalated file parameters to senior medical claims appeals committee.",
      },
    ],
  },
  {
    id: "1008",
    customerName: "Eran Goldstein",
    customerDetails: {
      idNumber: "065432109",
      phone: "054-3334455",
      email: "eran.gold@gmail.com",
    },
    status: "Resolved",
    category: "Car",
    createdAt: "2026-05-05T10:00:00Z",
    summary:
      "Third-party liability inquiry regarding parking lot scratch incident in Haifa.",
    history: [
      {
        id: "h14",
        date: "2026-05-05T10:00:00Z",
        status: "New",
        user: "System",
        comment: "Phone registration completed.",
      },
      {
        id: "h15",
        date: "2026-05-07T11:00:00Z",
        status: "In Progress",
        user: "Gal (Rep)",
        comment: "Collected matching statements from opposing party insurer.",
      },
      {
        id: "h16",
        date: "2026-05-09T14:20:00Z",
        status: "Resolved",
        user: "Gal (Rep)",
        comment: "Settlement finalized. Financial clearance fully processed.",
      },
    ],
  },
  {
    id: "1009",
    customerName: "Adi Stern",
    customerDetails: {
      idNumber: "076543210",
      phone: "052-1112233",
      email: "adi.stern@gmail.com",
    },
    status: "New",
    category: "Life",
    createdAt: "2026-05-20T06:15:00Z",
    summary:
      "Requesting comprehensive quotes for policy expansion to cover critical illness.",
    history: [
      {
        id: "h17",
        date: "2026-05-20T06:15:00Z",
        status: "New",
        user: "System",
        comment:
          "Automated submission received via customer dashboard application.",
      },
    ],
  },
  {
    id: "1010",
    customerName: "Omer Barkai",
    customerDetails: {
      idNumber: "045678912",
      phone: "053-7778899",
      email: "omer.b@cyber-security.co.il",
    },
    status: "Closed",
    category: "Health",
    createdAt: "2026-04-15T09:00:00Z",
    summary:
      "Inquiry on worldwide coverage additions prior to a business relocation layout.",
    history: [
      {
        id: "h18",
        date: "2026-04-15T09:00:00Z",
        status: "New",
        user: "System",
        comment: "Inquiry initialized via premium corporate account route.",
      },
      {
        id: "h19",
        date: "2026-04-18T16:45:00Z",
        status: "Closed",
        user: "Maya (Rep)",
        comment:
          "Provided target international rider documents. Customer declined options, file archived.",
      },
    ],
  },
];
