import { test, expect } from '@playwright/test'

test.describe('index page tests', () => {
  test('title is correct', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)
    await expect(page).toHaveTitle('Portfolio')
  })

  test('has a section about me', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#about')

    await expect(locator).toBeVisible()
  })

  test('has a section projects', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#projects')

    await expect(locator).toBeVisible()
  })

  test('has a section contacts', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')

    await expect(locator, 'The contacts section was not found').toBeVisible()
  })

  test('has a section socials', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#socials')

    await expect(locator, 'The socials section was not found').toBeVisible()
  })

  test('title of the section about me is correct', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#about')
    const heading = locator.getByRole('heading', { name: 'About Me' })

    await expect(heading).toBeVisible()
  })

  test('title of the section projects is correct', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#projects')
    const heading = locator.getByRole('heading', { name: 'Projects' })

    await expect(heading).toBeVisible()
  })

  test('title of the section contacts is correct', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')
    const heading = locator.getByRole('heading', { name: 'Contact Me' })

    await expect(heading).toBeVisible()
  })

  test('title of the section socials is correct', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#socials')
    const heading = locator.getByRole('heading', { name: 'My Social' })

    await expect(heading).toBeVisible()
  })

  test('has input the first name in the contacts section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')
    const input = locator.getByPlaceholder('First Name')

    await expect(input).toBeVisible()
  })

  test('has input the email in the contacts section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')
    const input = locator.getByPlaceholder('Email')

    await expect(input).toBeVisible()
  })

  test('has input the message in the contacts section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')
    const input = locator.getByPlaceholder('Message')

    await expect(input).toBeVisible()
  })

  test('has a button in the contacts section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')
    const button = locator.getByRole('button')

    await expect(button).toBeVisible()
  })

  test('has a send button in the contacts section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')
    const button = locator.getByRole('button', { name: 'SEND' })

    await expect(button).toBeVisible()
  })

  test('Visual comparison of the entire page', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    expect(
      await page.screenshot({ fullPage: true }),
      'Visually, the pages in the screenshots did not match',
    ).toMatchSnapshot(['landing', `page.png`])
  })

  test('Visual comparison of the about me section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#about')

    expect(await locator.screenshot(), 'Visually, the sections in the screenshots did not match').toMatchSnapshot([
      'about',
      `section.png`,
    ])
  })

  test('Visual comparison of the projects section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#projects')

    expect(await locator.screenshot(), 'Visually, the sections in the screenshots did not match').toMatchSnapshot([
      'projects',
      `section.png`,
    ])
  })

  test('Visual comparison of the contacts section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#contacts')

    expect(await locator.screenshot(), 'Visually, the sections in the screenshots did not match').toMatchSnapshot([
      'contacts',
      `section.png`,
    ])
  })

  test('Visual comparison of the socials section', async ({ page }) => {
    await page.goto(`${process.env.CLIENT_URL}/`)

    const locator = page.locator('#socials')

    expect(await locator.screenshot(), 'Visually, the sections in the screenshots did not match').toMatchSnapshot([
      'socials',
      `section.png`,
    ])
  })
})
