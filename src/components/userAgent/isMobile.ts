export const isMobile = (userAgent): boolean => {
  return !!(/iphone|ipod|android|ie|blackberry|fennec/).test(userAgent.toLowerCase());
}

export default () => {
  return isMobile(navigator.userAgent)
}