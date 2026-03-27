import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generatePoster() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to poster dimensions (high res)
  await page.setViewport({ 
    width: 1920, 
    height: 1080,
    deviceScaleFactor: 2 
  });

  console.log('Loading live site...');
  await page.goto('https://31780.github.io/virgil-system-diagram/', {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Wait for React Flow to render
  await page.waitForSelector('.react-flow__nodes', { timeout: 15000 });
  await new Promise(r => setTimeout(r, 3000)); // Extra time for animations to settle

  // Hide controls/minimap for clean export, keep legend/header
  await page.evaluate(() => {
    const controls = document.querySelector('.react-flow__controls');
    const minimap = document.querySelector('.react-flow__minimap');
    if (controls) controls.style.display = 'none';
    if (minimap) minimap.style.display = 'none';
  });

  console.log('Capturing screenshot...');
  await page.screenshot({
    path: join(__dirname, 'virgil-creative-system-poster.png'),
    fullPage: false,
    type: 'png'
  });

  // Also generate a PDF version
  console.log('Generating PDF...');
  await page.pdf({
    path: join(__dirname, 'virgil-creative-system-poster.pdf'),
    width: '24in',
    height: '18in',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('Done! Generated:');
  console.log('  - virgil-creative-system-poster.png');
  console.log('  - virgil-creative-system-poster.pdf');
}

generatePoster().catch(console.error);
