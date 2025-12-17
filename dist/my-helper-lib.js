/**
 * MyHelperLib v1.0.2
 * Author: Khin Maung Win
 * License: MIT
 * Simple helper library with TypeScript support
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MyHelperLib = (function () {
    // DOM selector - return single element or null
    function $(selector, parent) {
        if (parent === void 0) { parent = document; }
        return parent.querySelector(selector);
    }
    // DOM selector - return array of elements
    function $$(selector, parent) {
        if (parent === void 0) { parent = document; }
        return Array.from(parent.querySelectorAll(selector));
    }
    // Add event listener
    function on(element, event, handler) {
        element.addEventListener(event, handler);
    }
    // Remove event listener
    function off(element, event, handler) {
        element.removeEventListener(event, handler);
    }
    // Set cookie (default 7 days expiration)
    function setCookie(name, value, days) {
        if (days === void 0) { days = 7; }
        var d = new Date();
        d.setTime(d.getTime() + days * 86400000); // 86400000 ms = 1 day
        document.cookie = "".concat(name, "=").concat(encodeURIComponent(value), "; expires=").concat(d.toUTCString(), "; path=/");
    }
    // Get cookie by name
    function getCookie(name) {
        var cookieArr = document.cookie.split('; ');
        for (var _i = 0, cookieArr_1 = cookieArr; _i < cookieArr_1.length; _i++) {
            var cookie = cookieArr_1[_i];
            var _a = cookie.split('='), key = _a[0], val = _a[1];
            if (key === name)
                return decodeURIComponent(val);
        }
        return null;
    }
    // Delete cookie
    function deleteCookie(name) {
        setCookie(name, '', -1);
    }
    // Save JSON-serializable data to localStorage
    function lsSet(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        }
        catch (e) {
            console.warn("lsSet error for key: ".concat(key), e);
        }
    }
    // Get data from localStorage, or defaultValue if not found
    function lsGet(key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        try {
            var val = localStorage.getItem(key);
            return val ? JSON.parse(val) : defaultValue;
        }
        catch (e) {
            console.warn("lsGet error for key: ".concat(key), e);
            return defaultValue;
        }
    }
    // Remove item from localStorage
    function lsRemove(key) {
        try {
            localStorage.removeItem(key);
        }
        catch (e) {
            console.warn("lsRemove error for key: ".concat(key), e);
        }
    }
    // Debounce function to delay calls (wait ms)
    function debounce(fn, wait) {
        if (wait === void 0) { wait = 300; }
        var timer;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (timer)
                clearTimeout(timer);
            timer = window.setTimeout(function () { return fn.apply(void 0, args); }, wait);
        };
    }
    // Throttle function to limit calls (limit ms)
    function throttle(fn, limit) {
        if (limit === void 0) { limit = 300; }
        var lastCall = 0;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var now = Date.now();
            if (now - lastCall >= limit) {
                lastCall = now;
                fn.apply(void 0, args);
            }
        };
    }
    // Fetch JSON data via GET request
    function fetchGet(url) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url)];
                    case 1:
                        res = _a.sent();
                        if (!res.ok)
                            throw new Error("HTTP error! status: ".concat(res.status));
                        return [2 /*return*/, res.json()];
                }
            });
        });
    }
    // Format date with locale options
    function formatDate(date, locale, options) {
        if (locale === void 0) { locale = 'en-US'; }
        var d = date instanceof Date ? date : new Date(date);
        return new Intl.DateTimeFormat(locale, options).format(d);
    }
    // Get URL parameter by name
    function getUrlParam(name, url) {
        if (url === void 0) { url = window.location.href; }
        name = name.replace(/[[\]]/g, '\\$&');
        var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
        var results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    // Return all public methods
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
        getUrlParam: getUrlParam,
    };
})();
export default MyHelperLib;
//# sourceMappingURL=my-helper-lib.js.map
