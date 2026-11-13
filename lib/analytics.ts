// Leads que abrem o WhatsApp via window.open não passam pelo listener de
// cliques em links do layout, então registram o generate_lead aqui.
export function trackLead(method: string) {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "generate_lead", {
    method,
    page_path: window.location.pathname,
  });
}
