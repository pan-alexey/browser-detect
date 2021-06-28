export const getCookie = (name, base64 = false) => {
  if (!name) {
    return undefined;
  }
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  if (matches) {
    let res = decodeURIComponent(matches[1]);
    res = base64 ? atob(res) : res;
    try {
      return JSON.parse(res);
    }
    catch(e) {}
  }
  return undefined;
}

export const setCookie = (name, value, base64 = false) => {
  if (!name || value === null) {
    return;
  }
  const options = {path: '/'}
  if (typeof value == 'object') {
    value = JSON.stringify(value);
    value = base64 ? btoa(value) : value;
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}