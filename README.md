# MyHelperLib

A lightweight helper library written in TypeScript for everyday web development tasks.

## ✨ Features

- DOM selector helpers (`$`, `$$`)
- Event handling helpers
- Cookie utilities
- localStorage helpers (JSON-safe)
- Debounce & Throttle
- Fetch JSON helper
- Date formatting
- URL parameter parsing
- Written in TypeScript
- Zero dependencies

---

## 📦 Installation

CDN (compiled JS)
```html
<script src="https://cdn.jsdelivr.net/gh/kokhinmaungwin/myhelperlib@v1.0.3/dist/my-helper-lib.js"></script>
```
Local / Module
```ts
import MyHelperLib from "./my-helper-lib";
```

---

## 📢 Versioning

Source code version: 1.0.2

Current release tag: v1.0.3

v1.0.3 includes build fixes and dist rebuild

---

## 🚀 Usage

DOM Selectors
```ts
const el = MyHelperLib.$("#app");
const items = MyHelperLib.$$(".item");
```
Events
```ts
MyHelperLib.on(window, "resize", () => {
  console.log("Window resized");
});
```
Cookies
```ts
MyHelperLib.setCookie("theme", "dark", 7);
const theme = MyHelperLib.getCookie("theme");
MyHelperLib.deleteCookie("theme");
```
localStorage
```ts
MyHelperLib.lsSet("user", { name: "Bro" });
const user = MyHelperLib.lsGet<{ name: string }>("user");
MyHelperLib.lsRemove("user");
```
Debounce
```ts
const onResize = MyHelperLib.debounce(() => {
  console.log("Resized");
}, 300);
```
Throttle
```ts
const onScroll = MyHelperLib.throttle(() => {
  console.log("Scrolling");
}, 200);
```
Fetch JSON
```ts
const data = await MyHelperLib.fetchGet("https://api.example.com/data");
```
Date Formatting
```ts
const formatted = MyHelperLib.formatDate(new Date(), "en-US");
```
URL Parameter
```ts
const id = MyHelperLib.getUrlParam("id");
```

---

## 🧩 TypeScript Support

This library is written in TypeScript and provides full type safety and IntelliSense support.


---

## 📄 License

MIT License © 2025 Khin Maung Win


---
