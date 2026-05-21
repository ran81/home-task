import { useEffect } from "react";
import { formatDate } from "../utils.ts/date";
import type { Inquiry } from "../types/inquiry";

interface InquiryDetailsProps {
  inquiry: Inquiry | null;
  onClose: () => void;
}

export function InquiryDetails({ inquiry, onClose }: InquiryDetailsProps) {
  const isOpen = inquiry !== null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed right-0 top-0 bottom-0 z-40 flex justify-end transition-all duration-300 pointer-events-none`}
    >
      <div
        className={`w-[90vw] sm:w-[450px] md:w-[560px] h-full bg-white shadow-2xl flex flex-col border-l border-slate-200 transition-transform duration-300 ease-in-out transform pointer-events-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {inquiry && (
          <>
            <div className="p-5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 block font-bold tracking-wider">
                  INQUIRY TRACKING FILE
                </span>
                <h2 className="text-lg font-bold text-slate-900">
                  #{inquiry.id} - {inquiry.customerName}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto space-y-6 text-sm text-slate-700">
              {/* Customer Profile Details */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Customer Information
                </h3>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 grid grid-cols-1 gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500">
                      National ID (TZ)
                    </span>
                    <span className="font-mono font-semibold text-slate-900">
                      {inquiry.customerDetails.idNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-200/60 pt-3">
                    <span className="text-xs font-medium text-slate-500">
                      Contact Number
                    </span>
                    <a
                      href={`tel:${inquiry.customerDetails.phone}`}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {inquiry.customerDetails.phone}
                    </a>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-200/60 pt-3">
                    <span className="text-xs font-medium text-slate-500">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${inquiry.customerDetails.email}`}
                      className="text-blue-600 hover:underline break-all font-semibold"
                    >
                      {inquiry.customerDetails.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Statement Summary */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Inquiry Summary
                </h3>
                <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100/50 text-slate-800 leading-relaxed italic text-base">
                  "{inquiry.summary}"
                </div>
              </div>

              {/* Historical Audit Trail Timeline */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Action History Trail
                </h3>
                <div className="relative pl-5 border-l-2 border-slate-100 space-y-6 ml-2">
                  {inquiry.history.map((event) => (
                    <div key={event.id} className="relative">
                      <div className="absolute -left-[26px] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white ring-4 ring-white" />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <span className="font-bold text-slate-900 text-sm">
                          {event.user}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1.5 bg-slate-50/60 p-2.5 rounded-lg border border-slate-100">
                        <span className="inline-block font-bold px-1.5 py-0.5 rounded text-[10px] bg-slate-200 text-slate-700 mr-2 uppercase">
                          {event.status}
                        </span>
                        {event.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  System Telemetry
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wide mb-1">
                      SLA Status
                    </span>
                    <span className="font-semibold text-emerald-600">
                      Within Compliance
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wide mb-1">
                      Routing Tier
                    </span>
                    <span className="font-semibold text-slate-700">
                      {inquiry.category} Operations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
