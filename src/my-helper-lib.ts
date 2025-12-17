/**
 * MyHelperLib v1.0.2
 * Author: Khin Maung Win
 * License: MIT
 * Simple helper library with TypeScript support
 */

const MyHelperLib = (() => {

  // DOM selector - return single element or null
  function $(selector: string, parent: Document | HTMLElement = document): HTMLElement | null {
    return parent.querySelector(selector);
  }

  // DOM selector - return array of elements
  function $$(selector: string, parent: Document | HTMLElement = document): HTMLElement[] {
    return Array.from(parent.querySelectorAll(selector));
  }

  // Add event listener
  function on(
    element: HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject
  ): void {
    element.addEventListener(event, handler);
  }

  // Remove event listener
  function off(
    element: HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject
  ): void {
    element.removeEventListener(event, handler);
  }

  // Set cookie (default 7 days expiration)
  function setCookie(name: string, value: string, days: number = 7): void {
    const d = new Date();
    d.setTime(d.getTime() + days * 86400000); // 86400000 ms = 1 day
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/`;
  }

  // Get cookie by name
  function getCookie(name: string): string | null {
    const cookieArr = document.cookie.split('; ');
    for (const cookie of cookieArr) {
      const [key, val] = cookie.split('=');
      if (key === name) return decodeURIComponent(val);
    }
    return null;
  }

  // Delete cookie
  function deleteCookie(name: string): void {
    setCookie(name, '', -1);
  }

  // Save JSON-serializable data to localStorage
  function lsSet(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn(`lsSet error for key: ${key}`, e);
    }
  }

  // Get data from localStorage, or defaultValue if not found
  function lsGet<T>(key: string, defaultValue: T | null = null): T | null {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) as T : defaultValue;
    } catch (e) {
      console.warn(`lsGet error for key: ${key}`, e);
      return defaultValue;
    }
  }

  // Remove item from localStorage
  function lsRemove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn(`lsRemove error for key: ${key}`, e);
    }
  }

  // Debounce function to delay calls (wait ms)
  function debounce<T extends (...args: any[]) => any>(fn: T, wait = 300): (...args: Parameters<T>) => void {
    let timer: number | undefined;
    return function (...args: Parameters<T>): void {
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => fn(...args), wait);
    };
  }

  // Throttle function to limit calls (limit ms)
  function throttle<T extends (...args: any[]) => any>(fn: T, limit = 300): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return function (...args: Parameters<T>): void {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn(...args);
      }
    };
  }

  // Fetch JSON data via GET request
  async function fetchGet<T = any>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  }

  // Format date with locale options
  function formatDate(date: Date | string | number, locale = 'en-US', options?: Intl.DateTimeFormatOptions): string {
    const d = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat(locale, options).format(d);
  }

  // Get URL parameter by name
  function getUrlParam(name: string, url: string = window.location.href): string | null {
    name = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Return all public methods
  return {
    $,
    $$,
    on,
    off,
    setCookie,
    getCookie,
    deleteCookie,
    lsSet,
    lsGet,
    lsRemove,
    debounce,
    throttle,
    fetchGet,
    formatDate,
    getUrlParam,
  };
})();

export default MyHelperLib;
