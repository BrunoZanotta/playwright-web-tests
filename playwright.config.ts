import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
  workers: 2,

  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'], 
    ['playwright-qase-reporter', {
      apiToken: 'process.env.QASE_API_TOKEN,',
      projectCode: 'process.env.QASE_PROJECT_CODE',
      runComplete: true
    }]
  ],

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
