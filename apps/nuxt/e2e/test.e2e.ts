import { expect, test } from '@playwright/test'

test('e2e Test', async ({ page }) => {
  await page.goto('/')

  await page.getByText('vue turbo starter')

  await expect(page.getByRole('button', { name: 'Button1' })).toBeVisible()
})
