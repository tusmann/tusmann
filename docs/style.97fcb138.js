// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"fonts/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./TRYVesterbro-Poster.woff2":[["TRYVesterbro-Poster.9cacf8e0.woff2","fonts/TRYVesterbro-Poster.woff2"],"fonts/TRYVesterbro-Poster.woff2"],"./TRYVesterbro-Poster.woff":[["TRYVesterbro-Poster.6c9b11ce.woff","fonts/TRYVesterbro-Poster.woff"],"fonts/TRYVesterbro-Poster.woff"],"./TRYVesterbro-Poster.ttf":[["TRYVesterbro-Poster.7c1dac42.ttf","fonts/TRYVesterbro-Poster.ttf"],"fonts/TRYVesterbro-Poster.ttf"],"./TRYVesterbro-Bold.ttf":[["TRYVesterbro-Bold.bf7f9838.ttf","fonts/TRYVesterbro-Bold.ttf"],"fonts/TRYVesterbro-Bold.ttf"],"./TRYVesterbro-Bold.woff":[["TRYVesterbro-Bold.136b5eaa.woff","fonts/TRYVesterbro-Bold.woff"],"fonts/TRYVesterbro-Bold.woff"],"./TRYVesterbro-Bold.woff2":[["TRYVesterbro-Bold.5a5aeca6.woff2","fonts/TRYVesterbro-Bold.woff2"],"fonts/TRYVesterbro-Bold.woff2"],"./TRYVesterbro-Regular.ttf":[["TRYVesterbro-Regular.9837b92d.ttf","fonts/TRYVesterbro-Regular.ttf"],"fonts/TRYVesterbro-Regular.ttf"],"./TRYVesterbro-Regular.woff":[["TRYVesterbro-Regular.44ba70bc.woff","fonts/TRYVesterbro-Regular.woff"],"fonts/TRYVesterbro-Regular.woff"],"./TRYVesterbro-Regular.woff2":[["TRYVesterbro-Regular.2092fef2.woff2","fonts/TRYVesterbro-Regular.woff2"],"fonts/TRYVesterbro-Regular.woff2"],"./GT-America-Mono-Regular.ttf":[["GT-America-Mono-Regular.6df69689.ttf","fonts/GT-America-Mono-Regular.ttf"],"fonts/GT-America-Mono-Regular.ttf"],"./GT-America-Mono-Regular.woff":[["GT-America-Mono-Regular.f7307cd3.woff","fonts/GT-America-Mono-Regular.woff"],"fonts/GT-America-Mono-Regular.woff"],"./GT-America-Mono-Regular.woff2":[["GT-America-Mono-Regular.8a024427.woff2","fonts/GT-America-Mono-Regular.woff2"],"fonts/GT-America-Mono-Regular.woff2"],"./GTSectraFine-Regular.woff2":[["GTSectraFine-Regular.19a38b9a.woff2","fonts/GTSectraFine-Regular.woff2"],"fonts/GTSectraFine-Regular.woff2"],"./GTSectraFine-Regular.woff":[["GTSectraFine-Regular.4076b5b8.woff","fonts/GTSectraFine-Regular.woff"],"fonts/GTSectraFine-Regular.woff"],"./GTSectraFine-Regular.ttf":[["GTSectraFine-Regular.d1e050b4.ttf","fonts/GTSectraFine-Regular.ttf"],"fonts/GTSectraFine-Regular.ttf"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
<<<<<<< HEAD
},{"./fonts/fonts.css":"fonts/fonts.css","./cards\\card1.jpg":[["card1.4c48483c.jpg","cards/card1.jpg"],"cards/card1.jpg"],"./cards\\card2.jpg":[["card2.a5e0f1ec.jpg","cards/card2.jpg"],"cards/card2.jpg"],"./styles\\first\\roycroft-webfont.woff2":[["roycroft-webfont.51df3fbb.woff2","styles/first/roycroft-webfont.woff2"],"styles/first/roycroft-webfont.woff2"],"./styles\\first\\roycroft-webfont.woff":[["roycroft-webfont.8abc1c68.woff","styles/first/roycroft-webfont.woff"],"styles/first/roycroft-webfont.woff"],"./styles\\third\\FuturaFuturisBlackC.woff2":[["FuturaFuturisBlackC.fec8ffe5.woff2","styles/third/FuturaFuturisBlackC.woff2"],"styles/third/FuturaFuturisBlackC.woff2"],"./styles\\third\\FuturaFuturisBlackC.woff":[["FuturaFuturisBlackC.f7dfd6a4.woff","styles/third/FuturaFuturisBlackC.woff"],"styles/third/FuturaFuturisBlackC.woff"],"./styles\\third\\FuturaFuturisBlackC.ttf":[["FuturaFuturisBlackC.c00f348e.ttf","styles/third/FuturaFuturisBlackC.ttf"],"styles/third/FuturaFuturisBlackC.ttf"],"./styles\\third\\FuturaFuturisC.woff2":[["FuturaFuturisC.d75ec207.woff2","styles/third/FuturaFuturisC.woff2"],"styles/third/FuturaFuturisC.woff2"],"./styles\\third\\FuturaFuturisC.woff":[["FuturaFuturisC.2f686f96.woff","styles/third/FuturaFuturisC.woff"],"styles/third/FuturaFuturisC.woff"],"./styles\\third\\FuturaFuturisC.ttf":[["FuturaFuturisC.8e916d9d.ttf","styles/third/FuturaFuturisC.ttf"],"styles/third/FuturaFuturisC.ttf"],"./styles\\third\\WaddemChooNFW01-Regular.woff2":[["WaddemChooNFW01-Regular.76dcca79.woff2","styles/third/WaddemChooNFW01-Regular.woff2"],"styles/third/WaddemChooNFW01-Regular.woff2"],"./styles\\third\\WaddemChooNFW01-Regular.woff":[["WaddemChooNFW01-Regular.da99d54d.woff","styles/third/WaddemChooNFW01-Regular.woff"],"styles/third/WaddemChooNFW01-Regular.woff"],"./styles\\third\\WaddemChooNFW01-Regular.ttf":[["WaddemChooNFW01-Regular.3308270a.ttf","styles/third/WaddemChooNFW01-Regular.ttf"],"styles/third/WaddemChooNFW01-Regular.ttf"],"./styles\\first\\background.jpg":[["background.708683ce.jpg","styles/first/background.jpg"],"styles/first/background.jpg"],"./images\\four.png":[["four.b72f6141.png","images/four.png"],"images/four.png"],"./images\\five.png":[["five.dd2a19df.png","images/five.png"],"images/five.png"],"./images\\six.png":[["six.04897191.png","images/six.png"],"images/six.png"],"./images\\rinpa_duo.jpg":[["rinpa_duo.f5b000ac.jpg","images/rinpa_duo.jpg"],"images/rinpa_duo.jpg"],"./images\\jan_duo.jpg":[["jan_duo.d5a40610.jpg","images/jan_duo.jpg"],"images/jan_duo.jpg"],"./images\\munari_duo.jpg":[["munari_duo.35d95cdb.jpg","images/munari_duo.jpg"],"images/munari_duo.jpg"],"./images\\arrow2.png":[["arrow2.bc7c6268.png","images/arrow2.png"],"images/arrow2.png"],"./images\\arrow3.png":[["arrow3.384b5b70.png","images/arrow3.png"],"images/arrow3.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
=======
},{"./fonts/fonts.css":"fonts/fonts.css","./cards\\card1.jpg":[["card1.4c48483c.jpg","cards/card1.jpg"],"cards/card1.jpg"],"./cards\\card2.jpg":[["card2.a5e0f1ec.jpg","cards/card2.jpg"],"cards/card2.jpg"],"./styles\\first\\roycroft-webfont.woff2":[["roycroft-webfont.51df3fbb.woff2","styles/first/roycroft-webfont.woff2"],"styles/first/roycroft-webfont.woff2"],"./styles\\first\\roycroft-webfont.woff":[["roycroft-webfont.8abc1c68.woff","styles/first/roycroft-webfont.woff"],"styles/first/roycroft-webfont.woff"],"./styles\\second\\ZinHenaKokuryu-RCF.ttf":[["ZinHenaKokuryu-RCF.c78880ff.ttf","styles/second/ZinHenaKokuryu-RCF.ttf"],"styles/second/ZinHenaKokuryu-RCF.ttf"],"./styles\\first\\background.jpg":[["background.708683ce.jpg","styles/first/background.jpg"],"styles/first/background.jpg"],"./styles\\second\\background.jpg":[["background.273bbb38.jpg","styles/second/background.jpg"],"styles/second/background.jpg"],"./images\\four.png":[["four.b72f6141.png","images/four.png"],"images/four.png"],"./images\\five.png":[["five.dd2a19df.png","images/five.png"],"images/five.png"],"./images\\six.png":[["six.04897191.png","images/six.png"],"images/six.png"],"./images\\rinpa_duo.jpg":[["rinpa_duo.f5b000ac.jpg","images/rinpa_duo.jpg"],"images/rinpa_duo.jpg"],"./images\\jan_duo.jpg":[["jan_duo.d5a40610.jpg","images/jan_duo.jpg"],"images/jan_duo.jpg"],"./images\\munari_duo.jpg":[["munari_duo.35d95cdb.jpg","images/munari_duo.jpg"],"images/munari_duo.jpg"],"./images\\arrow2.png":[["arrow2.bc7c6268.png","images/arrow2.png"],"images/arrow2.png"],"./images\\arrow3.png":[["arrow3.384b5b70.png","images/arrow3.png"],"images/arrow3.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
>>>>>>> 31d0fa3fcc74a1a392c6988ef7315b97d8f9e452
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
<<<<<<< HEAD
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51434" + '/');
=======
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1329" + '/');
>>>>>>> 31d0fa3fcc74a1a392c6988ef7315b97d8f9e452

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/style.97fcb138.js.map