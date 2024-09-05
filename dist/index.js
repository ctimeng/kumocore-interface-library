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
export { MobileOS, ProviderOption, getBrowser, getMobileOperatingSystem, isWalletInstalled, metaMaskExtensionUrls, walletAppUrls };
