/** The logo mark as an inline SVG data URI (Satori renders <img> reliably). Same drawing as LogoMark and app/icon.svg */
export const LOGO_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4F46E5"/><stop offset=".55" stop-color="#3B6FD8"/><stop offset="1" stop-color="#10B981"/></linearGradient></defs><rect width="40" height="40" rx="10" fill="url(#g)"/><rect x="19.75" y="8" width="9" height="24" rx="4.5" fill="#fff" fill-opacity=".5" transform="rotate(24 24.25 20)"/><rect x="11.25" y="8" width="9" height="24" rx="4.5" fill="#fff" transform="rotate(24 15.75 20)"/><circle cx="19.4" cy="20" r="2.9" fill="#10B981"/></svg>`,
  );
