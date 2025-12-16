/*!
 * MyHelperLib v1.0.0
 * Author: Khin Maung Win
 * License: MIT
 */

var MyHelperLib = (function () {
  function $(selector, parent) {
    if (parent === void 0) { parent = document; }
    return parent.querySelector(selector);
  }

  function $$(selector, parent) {
    if (parent === void 0) { parent = document; }
    return Array.prototype.slice.call(parent.querySelectorAll(selector));
  }

  function on(element, event, handler) {
    element.addEventListener(event, handler);
  }

  function off(element, event, handler) {
    element.removeEventListener(event, handler);
  }

  function setCookie(name, value, days) {
    if (days === void 0) { days = 7; }
    var d = new Date();
    d.setTime(d.getTime() + days * 86400000);
    document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + d.toUTCString() + "; path=/";
  }

  function getCookie(name) {
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      if (parts[0] === name) return decodeURIComponent(parts[1]);
    }
    return null;
  }

  function deleteCookie(name) {
    setCookie(name, '', -1);
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  function lsGet(key, def) {
    if (def === void 0) { def = null; }
    try {
      var v = localStorage.getItem(key);
      return v ? JSON.parse(v) : def;
    } catch (e) {
      return def;
    }
  }

  function lsRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }

  function debounce(fn, wait) {
    if (wait === void 0) { wait = 300; }
    var t;
    return function () {
      var args = arguments;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(null, args); }, wait);
    };
  }

  function throttle(fn, limit) {
    if (limit === void 0) { limit = 300; }
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last >= limit) {
        last = now;
        fn.apply(null, arguments);
      }
    };
  }

  function fetchGet(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    });
  }

  function formatDate(date, locale, options) {
    if (locale === void 0) { locale = 'en-US'; }
    var d = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat(locale, options).format(d);
  }

  function getUrlParam(name, url) {
    if (url === void 0) { url = window.location.href; }
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  return {
    $: $,
    $$: $$,
    on: on,
    off: off,
    setCookie: setCookie,
    getCookie: getCookie,
    deleteCookie: deleteCookie,
    lsSet: lsSet,
    lsGet: lsGet,
    lsRemove: lsRemove,
    debounce: debounce,
    throttle: throttle,
    fetchGet: fetchGet,
    formatDate: formatDate,
    getUrlParam: getUrlParam
  };
})();

if (typeof window !== 'undefined') {
  window.MyHelperLib = MyHelperLib;
}
