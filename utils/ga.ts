// log the pageview with their URL
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "";
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// log specific events happening.
export const gaEvent = (
  action: Gtag.EventNames | string,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};
