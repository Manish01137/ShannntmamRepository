import { bio } from "@/content/bio";

export function WhatsAppButton() {
  const digits = bio.contact.phone.replace(/\D/g, "");
  const href = `https://wa.me/91${digits}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Message on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-charcoal/20 transition-transform hover:scale-105 md:right-8 md:bottom-8"
    >
      <svg viewBox="0 0 32 32" fill="white" className="h-7 w-7">
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.34.65 4.52 1.78 6.38L4 29l7.78-1.75a11.97 11.97 0 0 0 4.24.77h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3Zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.85.87-3.68-.24-.38a9.83 9.83 0 0 1-1.5-5.24c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.47-4.45 9.9-9.87 9.9v.15Zm5.42-7.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.45 0 1.44 1.06 2.83 1.2 3.03.15.2 2.08 3.18 5.05 4.46.7.3 1.25.48 1.68.62.7.22 1.35.19 1.85.12.57-.09 1.75-.72 2-1.41.24-.7.24-1.29.17-1.41-.07-.13-.27-.2-.56-.35Z" />
      </svg>
    </a>
  );
}
