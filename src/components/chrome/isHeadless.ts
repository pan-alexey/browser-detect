export const isHeadless = async () => {
  if (/HeadlessChrome/.test(navigator.userAgent)) {
    return true
  }

  if(navigator.webdriver) {
    return true
  }

  try {
    const hasNotify = await new Promise(resolve => {
      navigator.permissions.query({name:'notifications'}).then(permissionStatus => {
        resolve(Notification.permission === 'denied' && permissionStatus.state === 'prompt')
      })
    });
  
    return !!hasNotify;
  } catch (error) {}

  return false
};

export default isHeadless;
