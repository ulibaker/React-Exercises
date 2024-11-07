import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE = 'https://cataas.com/cat/'

test('app does show a fact and an image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE)).toBeTruthy()
})
