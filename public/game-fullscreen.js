(function () {
  "use strict";

  if (window.__gjFullscreenInit) return;
  window.__gjFullscreenInit = true;

  var ICON_ENTER =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>';
  var ICON_EXIT =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M16 3v3a2 2 0 0 0 2 2h3"/><path d="M8 21v-3a2 2 0 0 0-2-2H3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>';

  function fullscreenElement() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      null
    );
  }

  function requestFn(el) {
    return (
      el.requestFullscreen ||
      el.webkitRequestFullscreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen ||
      null
    );
  }

  function exitFn() {
    return (
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen ||
      null
    );
  }

  function supported() {
    return !!requestFn(document.documentElement);
  }

  function dispatchResize() {
    try {
      window.dispatchEvent(new Event("resize"));
    } catch (e) {
      var ev = document.createEvent("Event");
      ev.initEvent("resize", true, true);
      window.dispatchEvent(ev);
    }
  }

  var button = null;

  function lockOrientation() {
    if (!screen.orientation || typeof screen.orientation.lock !== "function") {
      return;
    }
    try {
      var lock = screen.orientation.lock("landscape");
      if (lock && typeof lock.catch === "function") lock.catch(function () {});
    } catch (e) {}
  }

  function update() {
    if (!button) return;
    var active = !!fullscreenElement();
    button.innerHTML = active ? ICON_EXIT : ICON_ENTER;
    button.setAttribute(
      "aria-label",
      active ? "Sair da tela cheia" : "Tela cheia",
    );
    button.setAttribute("aria-pressed", active ? "true" : "false");
    if (active) lockOrientation();
    dispatchResize();
    setTimeout(dispatchResize, 150);
  }

  function enterFullscreen() {
    var el = document.documentElement;
    var fn = requestFn(el);
    if (!fn) return;
    try {
      var result = fn.call(el);
      if (result && typeof result.catch === "function") {
        result.catch(function () {});
      }
    } catch (e) {}

    update();
  }

  function leaveFullscreen() {
    var fn = exitFn();
    if (!fn) return;
    try {
      var result = fn.call(document);
      if (result && typeof result.catch === "function") {
        result.catch(function () {});
      }
    } catch (e) {}
    update();
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function build() {
    if (!supported() || button) return;

    button = document.createElement("button");
    button.id = "gj-fullscreen-btn";
    button.type = "button";
    button.className = "gj-visible";
    button.innerHTML = ICON_ENTER;
    button.setAttribute("aria-label", "Tela cheia");
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (fullscreenElement()) leaveFullscreen();
      else enterFullscreen();
    });

    ["pointerdown", "touchstart", "mousedown"].forEach(function (type) {
      button.addEventListener(type, stopPropagation, { passive: false });
    });

    document.body.appendChild(button);

    [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange",
    ].forEach(function (type) {
      document.addEventListener(type, update);
    });

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
