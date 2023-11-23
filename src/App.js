import React, { useEffect } from 'react';
import appInsights from './appInsights'; // Import the configured appInsights

function App() {
  const value = 'World';

  useEffect(() => {
    // Track a page view when the component mounts
    appInsights.trackPageView();

    // Example of tracking a custom event
    appInsights.trackEvent({ name: 'App Loaded' });
  }, []);

  return (
    <div>
      Hello {value}
      {/* Your app content */}
    </div>
  );
}

export default App;

