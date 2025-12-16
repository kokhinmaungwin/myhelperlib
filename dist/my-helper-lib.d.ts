declare const MyHelperLib: {
  $: (selector: string, parent?: Document | HTMLElement) => HTMLElement | null;
  $$: (selector: string, parent?: Document | HTMLElement) => HTMLElement[];
  on: (
    element: HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject
  ) => void;
  off: (
    element: HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject
  ) => void;
  setCookie: (name: string, value: string, days?: number) => void;
  getCookie: (name: string) => string | null;
  deleteCookie: (name: string) => void;
  lsSet: (key: string, value: any) => void;
  lsGet: <T>(key: string, defaultValue?: T | null) => T | null;
  lsRemove: (key: string) => void;
  debounce: <T extends (...args: any[]) => any>(fn: T, wait?: number) => (...args: Parameters<T>) => void;
  throttle: <T extends (...args: any[]) => any>(fn: T, limit?: number) => (...args: Parameters<T>) => void;
  fetchGet: <T = any>(url: string) => Promise<T>;
  formatDate: (date: Date | string | number, locale?: string, options?: Intl.DateTimeFormatOptions) => string;
  getUrlParam: (name: string, url?: string) => string | null;
};

export default MyHelperLib;
