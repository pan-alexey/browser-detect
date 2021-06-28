import mock from './browsers.__mock__';
import { detectOS } from '../operatingSystem';
import { detectBrowser } from '../Browser';


describe('UserAgent', () => {
  it('browser', async () => {
    mock.forEach(browserMock => {
      const [userAgent, browser, version, os ] = browserMock;
      expect( detectBrowser(userAgent) ).toBe( browser );
    })
  });

  it('os', async () => {
    mock.forEach(browserMock => {
      const [userAgent, browser, version, os ] = browserMock;
      expect( detectOS(userAgent) ).toBe( os );
    })
  });
});