import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    connectionString: 'InstrumentationKey=375830ca-81df-4f8d-89f6-94cc3ef12182;IngestionEndpoint=https://australiacentral-0.in.applicationinsights.azure.com/;LiveEndpoint=https://australiacentral.livediagnostics.monitor.azure.com/',
    /* ...Other Configuration Options... */
  }
});

appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;
