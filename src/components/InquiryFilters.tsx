import { Input } from "./ui/Input";
import { Select } from "./ui/Select";

interface InquiryFiltersProps {
  filters: {
    search: string;
    status: string;
    category: string;
    sortBy: string;
    sortOrder: string;
  };
  updateFilters: (updates: Record<string, string | null>) => void;
}

export function InquiryFilters({
  filters,
  updateFilters,
}: InquiryFiltersProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters({ search: e.target.value });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilters({ status: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFilters({ category: e.target.value });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [sortBy, sortOrder] = e.target.value.split(":");
    updateFilters({ sortBy, sortOrder });
  };

  const clearAllFilters = () => {
    updateFilters({
      search: "",
      status: "All",
      category: "All",
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  const isFiltered =
    filters.search !== "" ||
    filters.status !== "All" ||
    filters.category !== "All";

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Text Search Field */}
        <Input
          label="Search"
          value={filters.search}
          onChange={handleSearchChange}
          onClear={() => updateFilters({ search: "" })}
          placeholder="Name or inquiry ID..."
        />

        {/* Status Filter Dropdown */}
        <Select
          label="Status"
          value={filters.status}
          onChange={handleStatusChange}
          options={[
            { value: "All", label: "All Statuses" },
            { value: "New", label: "New" },
            { value: "In Progress", label: "In Progress" },
            { value: "Resolved", label: "Resolved" },
            { value: "Closed", label: "Closed" },
          ]}
        />

        {/* Insurance Line Category Filter */}
        <Select
          label="Insurance Category"
          value={filters.category}
          onChange={handleCategoryChange}
          options={[
            { value: "All", label: "All Lines" },
            { value: "Car", label: "Car" },
            { value: "Health", label: "Health" },
            { value: "Home", label: "Home" },
            { value: "Life", label: "Life" },
          ]}
        />

        {/* Unified Sorting Menu */}
        <Select
          label="Sort By"
          value={`${filters.sortBy}:${filters.sortOrder}`}
          onChange={handleSortChange}
          options={[
            { value: "createdAt:desc", label: "Newest First" },
            { value: "createdAt:asc", label: "Oldest First" },
            { value: "customerName:asc", label: "Client Name" },
            { value: "id:asc", label: "Inquiry Number" },
          ]}
        />
      </div>

      {isFiltered && (
        <div className="flex justify-end pt-1">
          <button
            onClick={clearAllFilters}
            className="text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors focus:outline-none"
          >
            Reset active filters
          </button>
        </div>
      )}
    </div>
  );
}
