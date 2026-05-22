import { useInquiries } from "./hooks/useInquiries";
import { InquiryFilters } from "./components/InquiryFilters";
import { InquiryListTable } from "./components/InquiryListTable";
import { InquiryDetails } from "./components/InquiryDetails";

function App() {
  const { inquiries, selectedInquiry, filters, updateFilters } = useInquiries();

  const handleSelectInquiry = (id: string) => {
    updateFilters({ selectedId: id });
  };

  const handleCloseDetails = () => {
    updateFilters({ selectedId: null });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 antialiased selection:bg-blue-500/10">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm backdrop-blur-md">
        <div className="max-w-400 mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
              IL
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 tracking-tight leading-none mb-1">
                Inquiry Management Center
              </h1>
              <p className="text-[11px] font-medium text-slate-400">
                Israeli Enterprise Insurance Operations System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 rounded-lg">
              Total Found:{" "}
              <strong className="text-slate-900 font-bold">
                {inquiries.length}
              </strong>
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-400 mx-auto px-4 sm:px-6 py-6">
        <InquiryFilters filters={filters} updateFilters={updateFilters} />

        <div className="w-full">
          <InquiryListTable
            inquiries={inquiries}
            selectedId={filters.selectedId}
            onSelectInquiry={handleSelectInquiry}
          />
        </div>

        <InquiryDetails
          inquiry={selectedInquiry}
          onClose={handleCloseDetails}
        />
      </main>
    </div>
  );
}

export default App;
