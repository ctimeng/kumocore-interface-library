import { MobileOS, walletAppUrls, metaMaskExtensionUrls } from "../types/web3/wallet";
import { ProviderOption } from "../types/web3/web3";

export const isWalletInstalled = (providerName: string): boolean => {
	let walletUrl = "";
	if (getMobileOperatingSystem() !== MobileOS.unknown) {
		if (providerName === ProviderOption.metamask) walletUrl = walletAppUrls.metamask;
	} else {
		if (providerName === ProviderOption.metamask) walletUrl = metaMaskExtensionUrls[getBrowser()];
	}

	if (walletUrl) {
		window.location.href = walletUrl;
		return true;
	}

	return false;
};

export const getBrowser = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.includes("chrome")) return "chrome";
	if (userAgent.includes("firefox")) return "firefox";
	if (userAgent.includes("edge")) return "edge";
	return "chrome";
};

export const getMobileOperatingSystem = (): string => {
	const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

	if (/windows phone/i.test(userAgent)) {
		return MobileOS.window;
	}

	if (/android/i.test(userAgent)) {
		return MobileOS.android;
	}

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return MobileOS.window;
	}

	return MobileOS.unknown;
};
