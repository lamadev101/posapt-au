/** @format */

export function navigateHelper(type, storeName, returnSlash) {
  if (type && storeName) {
    return `/${type}/${storeName}`;
  } else {
    return returnSlash && !type && !storeName ? "/" : "";
  }
}
