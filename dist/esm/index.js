var MobileOS;
(function (MobileOS) {
    MobileOS["unknown"] = "Unknown";
    MobileOS["android"] = "Android";
    MobileOS["ios"] = "iOS";
    MobileOS["window"] = "Window";
})(MobileOS || (MobileOS = {}));
var metaMaskExtensionUrls = {
    chrome: "https://chrome.google.com/webstore/detail/metamask/",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/ethmask/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/metamask/",
};
var walletAppUrls = {
    metamask: "https://metamask.app.link/",
};

var ProviderOption;
(function (ProviderOption) {
    ProviderOption["metamask"] = "MetaMask";
    ProviderOption["walletConnect"] = "WalletConnect";
    ProviderOption["coinbaseWallet"] = "Coinbase Wallet";
    ProviderOption["internal"] = "Internal";
    ProviderOption["notConnected"] = "notConnected";
})(ProviderOption || (ProviderOption = {}));

var isWalletInstalled = function (providerName) {
    var walletUrl = "";
    if (getMobileOperatingSystem() !== MobileOS.unknown) {
        if (providerName === ProviderOption.metamask)
            walletUrl = walletAppUrls.metamask;
    }
    else {
        if (providerName === ProviderOption.metamask)
            walletUrl = metaMaskExtensionUrls[getBrowser()];
    }
    if (walletUrl) {
        window.location.href = walletUrl;
        return true;
    }
    return false;
};
var getBrowser = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("chrome"))
        return "chrome";
    if (userAgent.includes("firefox"))
        return "firefox";
    if (userAgent.includes("edge"))
        return "edge";
    return "chrome";
};
var getMobileOperatingSystem = function () {
    var userAgent = window.navigator.userAgent || window.navigator.vendor;
    if (/windows phone/i.test(userAgent)) {
        return MobileOS.window;
    }
    if (/android/i.test(userAgent)) {
        return MobileOS.android;
    }
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return MobileOS.window;
    }
    return MobileOS.unknown;
};

export { isWalletInstalled };
//# sourceMappingURL=index.js.map
