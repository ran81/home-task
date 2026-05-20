import type { Inquiry } from "../types/inquiry";

interface InquiryDetailsProps {
  inquiry: Inquiry | null;
  onClose: () => void;
}

export function InquiryDetails({ inquiry, onClose }: InquiryDetailsProps) {
  if (!inquiry) return null;

  // Clean local date presentation helper
  const formatEventDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString("he-IL", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden flex flex-col h-full">
      {/* Header Container */}
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono text-slate-400 block font-bold">
            INQUIRY TRACKING FILE
          </span>
          <h2 className="text-base font-bold text-slate-900">
            #{inquiry.id} - {inquiry.customerName}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Close panel"
        >
          ✕
        </button>
      </div>

      {/* Main Panel Content (Scrollable Container) */}
      <div className="p-5 flex-1 overflow-y-auto space-y-6 text-sm text-slate-700">
        {/* Section 1: Customer Profile Details */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Customer Information
          </h3>
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 grid grid-cols-1 gap-2.5">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-slate-500">
                National ID (TZ)
              </span>
              <span className="font-mono font-medium text-slate-900">
                {inquiry.customerDetails.idNumber}
              </span>
            </div>
            <div className="flex justify-between items-center border-t border-slate-200/60 pt-2">
              <span className="text-xs font-medium text-slate-500">
                Contact Number
              </span>
              <a
                href={`tel:${inquiry.customerDetails.phone}`}
                className="text-blue-600 hover:underline font-medium"
              >
                {inquiry.customerDetails.phone}
              </a>
            </div>
            <div className="flex justify-between items-center border-t border-slate-200/60 pt-2">
              <span className="text-xs font-medium text-slate-500">
                Email Address
              </span>
              <a
                href={`mailto:${inquiry.customerDetails.email}`}
                className="text-blue-600 hover:underline break-all font-medium"
              >
                {inquiry.customerDetails.email}
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Statement Summary */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Inquiry Summary
          </h3>
          <div className="bg-blue-50/40 p-4 rounded-lg border border-blue-100/50 text-slate-800 leading-relaxed italic">
            "{inquiry.summary}"
          </div>
        </div>

        {/* Section 3: Historical Audit Trail Timeline */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Action History Trail
          </h3>
          <div className="relative pl-4 border-l-2 border-slate-100 space-y-5 ml-1.5">
            {inquiry.history.map((event) => (
              <div key={event.id} className="relative">
                {/* Visual Bullet Point Marker on Timeline */}
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white ring-4 ring-white" />

                {/* Event Heading Row */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-semibold text-slate-900 text-xs">
                    {event.user}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {formatEventDate(event.date)}
                  </span>
                </div>

                {/* Inner Change Details */}
                <p className="text-xs text-slate-500 mt-1 bg-slate-50/60 p-2 rounded border border-slate-100/40">
                  <span className="inline-block font-semibold px-1 py-0.5 rounded text-[10px] bg-slate-200/70 text-slate-700 mr-1.5 uppercase">
                    {event.status}
                  </span>
                  {event.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Operational System Context (Custom choice requested by task) */}
        <div className="pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            System Telemetry
          </h3>
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500">
            <div className="bg-slate-50 p-2 rounded border border-slate-100">
              <span className="block text-[10px] text-slate-400 font-semibold uppercase">
                SLA Window
              </span>
              <span className="font-medium text-emerald-600">
                Within Compliance
              </span>
            </div>
            <div className="bg-slate-50 p-2 rounded border border-slate-100">
              <span className="block text-[10px] text-slate-400 font-semibold uppercase">
                Routing Tier
              </span>
              <span className="font-medium text-slate-700">
                {inquiry.category} Team Alpha
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
