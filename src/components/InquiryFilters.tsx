// import type { InquiryStatus, InsuranceCategory } from '../types/inquiry';

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

  // Determine if any filters are currently active beyond defaults
  const isFiltered =
    filters.search !== "" ||
    filters.status !== "All" ||
    filters.category !== "All";

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Text Search Field */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">Search</label>
          <div className="relative">
            <input
              type="text"
              value={filters.search}
              onChange={handleSearchChange}
              placeholder="Name or inquiry ID..."
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Status Filter Dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">Status</label>
          <select
            value={filters.status}
            onChange={handleStatusChange}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Insurance Line Category Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">
            Insurance Category
          </label>
          <select
            value={filters.category}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          >
            <option value="All">All Lines</option>
            <option value="Car">Car</option>
            <option value="Health">Health</option>
            <option value="Home">Home</option>
            <option value="Life">Life</option>
          </select>
        </div>

        {/* Unified Sorting Menu */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600">
            Sort By
          </label>
          <select
            value={`${filters.sortBy}:${filters.sortOrder}`}
            onChange={handleSortChange}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          >
            <option value="createdAt:desc">Date: Newest First</option>
            <option value="createdAt:asc">Date: Oldest First</option>
            <option value="customerName:asc">Client Name (A-Z)</option>
            <option value="id:asc">Inquiry Number</option>
          </select>
        </div>
      </div>

      {/* Conditional Reset Button Row */}
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
