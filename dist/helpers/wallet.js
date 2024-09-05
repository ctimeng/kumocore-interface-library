"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMobileOperatingSystem = exports.getBrowser = exports.isWalletInstalled = void 0;
const wallet_1 = require("../types/web3/wallet");
const web3_1 = require("../types/web3/web3");
const isWalletInstalled = (providerName) => {
    let walletUrl = "";
    if ((0, exports.getMobileOperatingSystem)() !== wallet_1.MobileOS.unknown) {
        if (providerName === web3_1.ProviderOption.metamask)
            walletUrl = wallet_1.walletAppUrls.metamask;
    }
    else {
        if (providerName === web3_1.ProviderOption.metamask)
            walletUrl = wallet_1.metaMaskExtensionUrls[(0, exports.getBrowser)()];
    }
    if (walletUrl) {
        window.location.href = walletUrl;
        return true;
    }
    return false;
};
exports.isWalletInstalled = isWalletInstalled;
const getBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("chrome"))
        return "chrome";
    if (userAgent.includes("firefox"))
        return "firefox";
    if (userAgent.includes("edge"))
        return "edge";
    return "chrome";
};
exports.getBrowser = getBrowser;
const getMobileOperatingSystem = () => {
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return wallet_1.MobileOS.window;
    }
    if (/android/i.test(userAgent)) {
        return wallet_1.MobileOS.android;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return wallet_1.MobileOS.window;
    }
    return wallet_1.MobileOS.unknown;
};
exports.getMobileOperatingSystem = getMobileOperatingSystem;
//# sourceMappingURL=wallet.js.map