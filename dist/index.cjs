"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    MobileOS: function() {
        return MobileOS;
    },
    ProviderOption: function() {
        return ProviderOption;
    },
    getBrowser: function() {
        return getBrowser;
    },
    getMobileOperatingSystem: function() {
        return getMobileOperatingSystem;
    },
    isWalletInstalled: function() {
        return isWalletInstalled;
    },
    metaMaskExtensionUrls: function() {
        return metaMaskExtensionUrls;
    },
    walletAppUrls: function() {
        return walletAppUrls;
    }
});
module.exports = __toCommonJS(src_exports);
// src/types/web3/wallet.ts
var MobileOS = /* @__PURE__ */ function(MobileOS2) {
    MobileOS2["unknown"] = "Unknown";
    MobileOS2["android"] = "Android";
    MobileOS2["ios"] = "iOS";
    MobileOS2["window"] = "Window";
    return MobileOS2;
}(MobileOS || {});
var metaMaskExtensionUrls = {
    chrome: "https://chrome.google.com/webstore/detail/metamask/",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/ethmask/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/"
};
var walletAppUrls = {
    metamask: "https://metamask.app.link/"
};
// src/types/web3/web3.ts
var ProviderOption = /* @__PURE__ */ function(ProviderOption2) {
    ProviderOption2["metamask"] = "MetaMask";
    ProviderOption2["walletConnect"] = "WalletConnect";
    ProviderOption2["coinbaseWallet"] = "Coinbase Wallet";
    ProviderOption2["internal"] = "Internal";
    ProviderOption2["notConnected"] = "notConnected";
    return ProviderOption2;
}(ProviderOption || {});
// src/helpers/wallet.ts
var isWalletInstalled = function(providerName) {
    var walletUrl = "";
    if (getMobileOperatingSystem() !== "Unknown" /* unknown */ ) {
        if (providerName === "MetaMask" /* metamask */ ) walletUrl = walletAppUrls.metamask;
    } else {
        if (providerName === "MetaMask" /* metamask */ ) walletUrl = metaMaskExtensionUrls[getBrowser()];
    }
    if (walletUrl) {
        window.location.href = walletUrl;
        return true;
    }
    return false;
};
var getBrowser = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("chrome")) return "chrome";
    if (userAgent.includes("firefox")) return "firefox";
    if (userAgent.includes("edge")) return "edge";
    return "chrome";
};
var getMobileOperatingSystem = function() {
    var userAgent = window.navigator.userAgent || window.navigator.vendor;
    if (/windows phone/i.test(userAgent)) {
        return "Window" /* window */ ;
    }
    if (/android/i.test(userAgent)) {
        return "Android" /* android */ ;
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "Window" /* window */ ;
    }
    return "Unknown" /* unknown */ ;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    MobileOS: MobileOS,
    ProviderOption: ProviderOption,
    getBrowser: getBrowser,
    getMobileOperatingSystem: getMobileOperatingSystem,
    isWalletInstalled: isWalletInstalled,
    metaMaskExtensionUrls: metaMaskExtensionUrls,
    walletAppUrls: walletAppUrls
});
