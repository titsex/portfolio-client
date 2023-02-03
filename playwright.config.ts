import { config as dotenv } from 'dotenv'
dotenv()

import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import { join } from 'path'

const testsDirPath = join('tests')
const snapshotsDirPath = join('snapshots')

const config: PlaywrightTestConfig = {
  testDir: testsDirPath,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  snapshotDir: snapshotsDirPath,
  updateSnapshots: 'missing',
  fullyParallel: true,
  ignoreSnapshots: process.env.IGNORE_SNAPSHOTS === 'true' ? true : false,
  reporter: 'html',
  use: {
    baseURL: process.env.CLIENT_URL,
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
}

export default config
