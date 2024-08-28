// utility/localStorageWithExpiry.ts

interface ItemWithExpiry<T> {
  value: T;
  expiry: number;
}

export const setLocalStorageItemWithExpiry = <T>(
  key: string,
  value: T,
  expiryInMinutes = 60
): void => {
  const now = new Date();
  const item: ItemWithExpiry<T> = {
    value,
    expiry: now.getTime() + expiryInMinutes * 60 * 1000, // expiryInMinutes converted to milliseconds
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorageItemWithExpiry = <T>(key: string): T | null => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item: ItemWithExpiry<T> = JSON.parse(itemStr);
  const now = new Date();

  // Compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, remove it from storage and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
