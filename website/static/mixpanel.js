// Load environment variables from the .env file
require('dotenv').config();

import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel with the token from the environment variables
mixpanel.init(process.env.MIXPANEL_TOKEN);  // Using the token stored in .env

// Track a page view event
function trackPageView() {
  mixpanel.track('Page View', {
    'page': window.location.pathname,
  });
}

// Make sure it's only executed in the browser environment
if (typeof window !== "undefined") {
  window.onload = trackPageView;
}
