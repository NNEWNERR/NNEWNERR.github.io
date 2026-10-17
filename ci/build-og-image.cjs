// Renders ci/og-image.html to assets/og-image.png (1200×630) for link previews (LINE, Facebook, email).
// Needs Playwright from any local install, e.g.:
//   PLAYWRIGHT_DIR=D:/github/qa-automation/node_modules/playwright node ci/build-og-image.cjs
const path = require('path')
const { chromium } = require(process.env.PLAYWRIGHT_DIR || 'playwright')

;(async () => {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
    await page.goto('file://' + path.resolve(__dirname, 'og-image.html').replace(/\\/g, '/'))
    await page.evaluate(() => document.fonts.ready)
    const out = path.resolve(__dirname, '..', 'assets', 'og-image.png')
    await page.screenshot({ path: out })
    console.log('wrote', out)
  } finally {
    await browser.close()
  }
})()
