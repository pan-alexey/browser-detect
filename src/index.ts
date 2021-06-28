import detectBrowser, { Browser } from './components/userAgent/browser';
import detectOS, { OperatingSystem } from './components/userAgent/operatingSystem';
import isMobile from './components/userAgent/isMobile';
import { isHeadless } from './components/chrome/isHeadless';
import { Scoring } from './components/scoring';

export class BrowserDetect {
  private userAgent = navigator.userAgent;
  private browser: Browser;
  // private os: OperatingSystem;
  private mobile: boolean;

  private scoring: Scoring;

  constructor() {
    this.browser = detectBrowser();
    // this.os = detectOS();
    this.mobile = isMobile();
    this.scoring = new Scoring();
  };

  public getBrowser = async () => {
    // Mobile and device not support touch
    if (this.mobile && !('ontouchstart' in window || navigator.msMaxTouchPoints) ) return 'puppeteer';

    const headlessDetect = await isHeadless();
    if (headlessDetect) return 'puppeteer';
    const score = this.scoring.getScore();

    if (score < 2) return 'puppeteer';
    return this.browser
  }
}
