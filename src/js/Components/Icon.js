const paths = {
  arrow_back: '<path d="m15 18-6-6 6-6"/><path d="M9 12h10"/>',
  aspect_ratio: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v6h6M9 21v-6H3"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 9-12h-7Z"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/>',
  cloud_off: '<path d="m2 2 20 20"/><path d="M5.5 15.5A6.5 6.5 0 0 1 9 3.5a6.8 6.8 0 0 1 6.7 5.5h1.8a4.5 4.5 0 0 1 2.6.8M9 19h8.5"/>',
  code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
  code_blocks: '<path d="m7 7-4 5 4 5M17 7l4 5-4 5M14 4l-4 16"/>',
  css: '<path d="m5 3 1.5 16L12 21l5.5-2.5L19 3Z"/><path d="M8 7h8M8.5 11h7M9 15h6"/>',
  database: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"/>',
  dataset: '<ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
  deployed_code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/><path d="M3 19h18"/>',
  desktop_windows: '<rect width="18" height="12" x="3" y="3" rx="1"/><path d="M8 21h8M12 15v6"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  folder: '<path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2h6.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z"/>',
  folder_special: '<path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H10l2 2h6.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5Z"/><path d="m12 9 .9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3Z"/>',
  hub: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="m10.7 7.2-4.4 8.6M13.3 7.2l4.4 8.6M7.5 18h9"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  lock: '<rect width="14" height="11" x="5" y="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  mail: '<rect width="18" height="14" x="3" y="5" rx="2"/><path d="m3 7 9 6 9-6"/>',
  monitoring: '<path d="M3 3v18h18"/><path d="m7 16 3-4 3 2 5-7"/>',
  memory: '<rect width="16" height="12" x="4" y="6" rx="2"/><path d="M8 6V3M12 6V3M16 6V3M8 18v3M12 18v3M16 18v3M4 10H1M4 14H1M23 10h-3M23 14h-3"/>',
  open_in_new: '<path d="M14 5h5v5M19 5l-8 8"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
  photo_library: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  play_circle: '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/>',
  refresh: '<path d="M20 11a8 8 0 1 0 1 5M20 4v7h-7"/>',
  expand_more: '<path d="m6 9 6 6 6-6"/>',
  restart_alt: '<path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.5M4 4v4.5h4.5"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  search_off: '<path d="m3 3 18 18M10.5 17a6.5 6.5 0 1 1 5.3-10.3M16 16l5 5"/>',
  rocket_launch: '<path d="M14 6 18 2l4 4-4 4M18 2c-4 0-7 2-9 5l-2 3 4 4 3-2c3-2 5-5 5-9Z"/><path d="m9 14-4 4M5 18l-2 3 3-2M7 10 3 6"/>',
  schedule: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5"/>',
  shield: '<path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6Z"/><path d="m9 12 2 2 4-4"/>',
  smartphone: '<rect width="10" height="18" x="7" y="3" rx="2"/><path d="M11 17h2"/>',
  subject: '<path d="M4 6h16M4 12h16M4 18h10"/>',
  swap_vert: '<path d="m8 9-3 3 3 3M5 12h14M16 15l3-3-3-3"/>',
  sync: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.2 9A7 7 0 0 1 20 12M4 12a7 7 0 0 0 13.8 3"/>',
  sync_saved_locally: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.2 9A7 7 0 0 1 20 12M4 12a7 7 0 0 0 13.8 3"/><path d="m9 12 2 2 4-4"/>',
  tablet_mac: '<rect width="14" height="18" x="5" y="3" rx="2"/><path d="M11 17h2"/>',
  table_chart: '<path d="M3 5h18v14H3zM3 10h18M9 5v14M15 5v14"/>',
  terminal: '<path d="m4 5 6 7-6 7M12 19h8"/>',
  verified: '<path d="m12 3 2 2 3-.2.8 2.8 2.5 1.7-1.2 2.7.7 2.9-2.8 1-1.5 2.6-2.8-1-2.8 1-1.5-2.6-2.8-1 .7-2.9-1.2-2.7 2.5-1.7L7 4.8l3 .2Z"/><path d="m9 12 2 2 4-4"/>',
  web: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  work: '<rect width="18" height="14" x="3" y="7" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/>',
  zoom_in: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M10.5 7v7M7 10.5h7"/>'
};

export function Icon(name, className = "") {
  const iconPath = paths[name];
  if (!iconPath) {
    throw new Error(`Unknown icon: ${name}`);
  }

  return `<svg aria-hidden="true" class="inline-block shrink-0 ${className}" fill="none" height="1em" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">${iconPath}</svg>`;
}

export function replaceMaterialIcons(markup) {
  return markup.replace(
    /<span\s+class="([^"]*material-symbols-outlined[^"]*)"[^>]*>\s*([^<\s]+)\s*<\/span>/gs,
    (_, className, name) =>
      Icon(name, className.replace(/\bmaterial-symbols-outlined\b/g, "").trim()),
  );
}
