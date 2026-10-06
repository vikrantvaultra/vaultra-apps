/** The logo mark as an inline SVG data URI (Satori renders <img> reliably) */
export const LOGO_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4F46E5"/><stop offset=".55" stop-color="#3B6FD8"/><stop offset="1" stop-color="#10B981"/></linearGradient></defs><rect width="40" height="40" rx="12" fill="url(#g)"/><rect x="7.5" y="12" width="15" height="19" rx="7.5" fill="#fff" fill-opacity=".55" transform="rotate(-12 15 21.5)"/><rect x="17.5" y="9" width="15" height="19" rx="7.5" fill="#fff" transform="rotate(12 25 18.5)"/><circle cx="21.2" cy="22.6" r="2.1" fill="#10B981"/></svg>`,
  );
