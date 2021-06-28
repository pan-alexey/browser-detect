import { BrowserDetect } from './';

try {
  window['__BROWSER_DETECT__'] = new BrowserDetect();
} catch (error) {}
