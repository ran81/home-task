import { useSearchParams } from "react-router-dom";
import { MOCK_INQUIRIES } from "../mock/data";
import type { Inquiry } from "../types/inquiry";

export function useInquiries() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Extract and normalize values from URL search params
  const search = searchParams.get("search") || "";
  const statusFilter = searchParams.get("status") || "All";
  const categoryFilter = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const sortOrder = searchParams.get("sortOrder") || "desc";
  const selectedId = searchParams.get("selectedId") || null;

  // 2. Filter, search, and sort the data locally
  const filteredAndSortedInquiries = MOCK_INQUIRIES.filter((inquiry) => {
    // Search match (Name or Inquiry Number)
    const matchesSearch =
      inquiry.customerName.toLowerCase().includes(search.toLowerCase()) ||
      inquiry.id.includes(search);

    // Status filter match
    const matchesStatus =
      statusFilter === "All" || inquiry.status === statusFilter;

    // Category filter match
    const matchesCategory =
      categoryFilter === "All" || inquiry.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  }).sort((a, b) => {
    // Sorting logic
    const valA = a[sortBy as keyof Inquiry];
    const valB = b[sortBy as keyof Inquiry];

    // Handle nested or complex fields if you add them later,
    // but for strings/dates basic comparison works cleanly.
    if (typeof valA === "string" && typeof valB === "string") {
      return sortOrder === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return 0;
  });

  // Find the single active inquiry if one is selected in the UI panel
  const selectedInquiry =
    MOCK_INQUIRIES.find((i) => i.id === selectedId) || null;

  // 3. Centralized state modifiers to update the URL cleanly
  const updateFilters = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "All" || value === "") {
        newParams.delete(key); // Keep the URL clean from defaults
      } else {
        newParams.set(key, value);
      }
    });

    setSearchParams(newParams);
  };

  return {
    inquiries: filteredAndSortedInquiries,
    selectedInquiry,
    filters: {
      search,
      status: statusFilter,
      category: categoryFilter,
      sortBy,
      sortOrder,
      selectedId,
    },
    updateFilters,
  };
}
