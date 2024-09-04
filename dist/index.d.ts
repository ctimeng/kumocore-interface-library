declare enum MobileOS {
    unknown = "Unknown",
    android = "Android",
    ios = "iOS",
    window = "Window"
}
declare const metaMaskExtensionUrls: {
    chrome: string;
    firefox: string;
    edge: string;
};
declare const walletAppUrls: {
    metamask: string;
};

declare enum ProviderOption {
    metamask = "MetaMask",
    walletConnect = "WalletConnect",
    coinbaseWallet = "Coinbase Wallet",
    internal = "Internal",
    notConnected = "notConnected"
}

export { MobileOS, ProviderOption, metaMaskExtensionUrls, walletAppUrls };
