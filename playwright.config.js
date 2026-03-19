// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: false, // run sequentially

  forbidOnly: !!process.env.CI,

  retries: 1,   

  workers: 7,    

  reporter: [
    ['list'],     // shows test execution in terminal
    ['html']      // keeps html report
  ],

  use: {
    headless: false,          // open browser
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]

});
