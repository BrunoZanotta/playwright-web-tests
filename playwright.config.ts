import { defineConfig } from '@playwright/test';

export default defineConfig({
  workers: 2,

  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [['html', { outputFolder: 'playwright-report' }]],

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
});
