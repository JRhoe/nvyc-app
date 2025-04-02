import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
	if (IS_DEV) {
		return "com.anonymous.nvyc.dev";
	}

	if (IS_PREVIEW) {
		return "com.anonymous.nvyc.preview";
	}

	return "com.anonymous.nvyc";
};

const getAppName = () => {
	if (IS_DEV) {
		return "NVYC (Dev)";
	}

	if (IS_PREVIEW) {
		return "NVYC (Preview)";
	}

	return "NVYC";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
	...config,
	name: getAppName(),
	slug: "nv-youth-conference",
	version: "1.0.0",
	orientation: "portrait",
	icon: "./assets/images/2025/appIcon.png",
	scheme: "myapp",
	userInterfaceStyle: "automatic",
	newArchEnabled: true,
	ios: {
		supportsTablet: true,
		bundleIdentifier: getUniqueIdentifier(),
		infoPlist: {
			ITSAppUsesNonExemptEncryption: false,
		},
	},
	android: {
		package: getUniqueIdentifier(),
	},
	web: {
		bundler: "metro",
		output: "static",
		favicon: "./assets/images/2024/appLogo.png",
	},
	plugins: [
		"expo-router",
		"expo-font",
		[
			"expo-splash-screen",
			{
				android: {
					image: "./assets/images/2025/appIcon.png",
					imageWidth: 200,
					resizeMode: "contain",
					backgroundColor: "#1a1a1a",
				},
				ios: {
					image: "./assets/images/2025/yc25-splash.jpg",
					enableFullScreenImage_legacy: true,
				},
			},
		],
	],
	experiments: {
		typedRoutes: true,
	},
	extra: {
		router: {
			origin: false,
		},
		eas: {
			projectId: "2aec227f-875c-4002-9a37-2db4f6a9bd38",
		},
	},
	updates: {
		url: "https://u.expo.dev/2aec227f-875c-4002-9a37-2db4f6a9bd38",
	},
	runtimeVersion: {
		policy: "appVersion",
	},
	owner: "blackgt",
});
