import { formatDate } from "../utils.ts/date";
import { Badge } from "./ui/Badge";
import type { Inquiry } from "../types/inquiry";

interface InquiryListTableProps {
  inquiries: Inquiry[];
  selectedId: string | null;
  onSelectInquiry: (id: string) => void;
}

export function InquiryListTable({
  inquiries,
  selectedId,
  onSelectInquiry,
}: InquiryListTableProps) {
  if (inquiries.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-slate-200 shadow-sm text-center">
        <p className="text-sm font-medium text-slate-500">
          No customer inquiries found matching your filter selections.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
              <th className="py-3 px-4">Inquiry ID</th>
              <th className="py-3 px-4">Customer Name</th>
              <th className="py-3 px-4">Line of Insurance</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Creation Date</th>
              <th className="py-3 px-4">Summary</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {inquiries.map((inquiry) => {
              const isSelected = inquiry.id === selectedId;
              return (
                <tr
                  key={inquiry.id}
                  onClick={() => onSelectInquiry(inquiry.id)}
                  className={`group cursor-pointer transition-colors duration-150 ease-in-out ${
                    isSelected
                      ? "bg-blue-50/70 hover:bg-blue-50"
                      : "hover:bg-slate-50/80"
                  }`}
                >
                  {/* Inquiry ID */}
                  <td className="py-3.5 px-4 font-mono font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                    #{inquiry.id}
                  </td>

                  {/* Customer Name */}
                  <td className="py-3.5 px-4 font-medium text-slate-900">
                    {inquiry.customerName}
                  </td>

                  {/* Insurance Category Line */}
                  <td className="py-3.5 px-4">
                    <span className="text-xs bg-slate-100 text-slate-800 font-medium px-2 py-1 rounded">
                      {inquiry.category}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4">
                    <Badge status={inquiry.status} />
                  </td>

                  {/* Formatted Local Date */}
                  <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">
                    {formatDate(inquiry.createdAt)}
                  </td>

                  {/* Summary Text Clip */}
                  <td className="py-3.5 px-4 max-w-xs text-slate-500 truncate">
                    {inquiry.summary}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
