import { WhatsAppIcon } from "./icons";

const WA_LINK =
  "https://wa.me/917030501069?text=" +
  encodeURIComponent("Hi Firoz! I saw your portfolio and would like to discuss a project.");

/**
 * Floating WhatsApp chat button — fixed bottom-right, pure CSS animation,
 * no client JavaScript needed.
 */
export default function WhatsAppWidget() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Firoz on WhatsApp"
      className="wa-widget group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_8px_36px_rgba(37,211,102,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <span
        aria-hidden="true"
        className="wa-ping absolute inset-0 rounded-full bg-[#25D366]"
      />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#0d0d1a]/95 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-xl ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
