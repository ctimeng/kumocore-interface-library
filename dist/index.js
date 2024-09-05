// src/types/web3/wallet.ts
var metaMaskExtensionUrls = {
    chrome: "https://chrome.google.com/webstore/detail/metamask/",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/ethmask/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/"
};
var walletAppUrls = {
    metamask: "https://metamask.app.link/"
};
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
    var userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "Window" /* window */ ;
    }
    if (/android/i.test(userAgent)) {
        return "Android" /* android */ ;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "Window" /* window */ ;
    }
    return "Unknown" /* unknown */ ;
};
export { isWalletInstalled };
