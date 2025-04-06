import { Stack } from "expo-router";
import "./globals.css";
import {
	ActivityIndicator,
	Image,
	Platform,
	StatusBar,
	Text,
	View,
} from "react-native";
import appIcon from "@/assets/images/2025/appIcon.png";
import iosSplashScreen from "@/assets/images/2025/yc25-splash.jpg";
import * as Updates from "expo-updates";
import * as SplashScreen from "expo-splash-screen";

// keeps the splashscreen visible until SplashScreen.hide() is called
SplashScreen.preventAutoHideAsync();

// options for fading out the splash screen when ready
SplashScreen.setOptions({
	duration: 500,
	fade: true,
});

export default function RootLayout() {
	// checks for updates
	const { isUpdateAvailable } = Updates.useUpdates();

	// update the app and restart (once the button is pushed)
	async function onFetchUpdateAsync() {
		try {
			const update = await Updates.checkForUpdateAsync();
			if (update.isAvailable) {
				await Updates.fetchUpdateAsync();
				await Updates.reloadAsync();
			}
		} catch (error) {
			alert(`Error fetching latest Expo update: ${error}`);
		}
	}

	// if there is an update, hide splashcreen and show updating indicator
	if (isUpdateAvailable) {
		SplashScreen.hide();
		return (
			<>
				<StatusBar backgroundColor={"#1a1a1a"} barStyle={"light-content"} />
				{/* show different loading screens for android and ios */}
				{Platform.OS === "android" && (
					<View
						className="w-full h-full bg-[#1a1a1a] items-center justify-center gap-4"
						onLayout={onFetchUpdateAsync}>
						<View className="h-[190px] w-[190px] overflow-hidden rounded-[35%] items-center justify-center">
							<Image source={appIcon} className="w-[200px] h-[200px]" />
						</View>
						<View className="flex-row items-center justify-center gap-4">
							<ActivityIndicator color={"#ffffff"} />
							<Text className="text-white font-bold text-lg">Updating...</Text>
						</View>
					</View>
				)}
				{Platform.OS === "ios" && (
					<View className="flex-1" onLayout={onFetchUpdateAsync}>
						<Image
							source={iosSplashScreen}
							className="h-full w-full absolute"
							resizeMode="contain"
						/>
						<View className="h-full w-full flex-row items-end justify-center gap-4 pb-[20%]">
							<ActivityIndicator color={"#ffffff"} />
							<Text className="text-white font-bold text-lg">Updating...</Text>
						</View>
					</View>
				)}
			</>
		);
	}

	// if there is no update show the app
	else
		return (
			<>
				<StatusBar backgroundColor={"black"} barStyle={"light-content"} />
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</>
		);
}
