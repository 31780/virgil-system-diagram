import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function generatePrintPoster() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // High-res for print (3x scale)
  await page.setViewport({ 
    width: 1400, 
    height: 2000,
    deviceScaleFactor: 3
  });

  console.log('Loading poster template...');
  await page.goto(`file://${join(__dirname, 'poster.html')}`, {
    waitUntil: 'networkidle0'
  });

  // Wait for fonts
  await new Promise(r => setTimeout(r, 2000));

  console.log('Capturing high-res PNG...');
  await page.screenshot({
    path: join(__dirname, 'virgil-creative-system-print.png'),
    fullPage: true,
    type: 'png'
  });

  // Generate clean PDF
  console.log('Generating print PDF...');
  await page.pdf({
    path: join(__dirname, 'virgil-creative-system-print.pdf'),
    format: 'A2',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('\nDone! Generated print-ready files:');
  console.log('  📄 virgil-creative-system-print.png (high-res)');
  console.log('  📄 virgil-creative-system-print.pdf (A2 format)');
}

generatePrintPoster().catch(console.error);
