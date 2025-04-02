import { Stack } from "expo-router";
import "./globals.css";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import appIcon from "@/assets/images/2025/appIcon.png";
import * as Updates from "expo-updates";
import * as SplashScreen from "expo-splash-screen";


// keeps the splashscreen visible until SplashScreen.hide() is called
SplashScreen.preventAutoHideAsync();

// options for fading out the splash screen when ready
SplashScreen.setOptions({
	duration: 1000,
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

	// if there is an update, hide splashcreen and show "update" button
	if (isUpdateAvailable) {
		SplashScreen.hide();
		return (
			<>
				<StatusBar backgroundColor={"#1a1a1a"} barStyle={"light-content"} />
				<View className="flex-1 bg-[#1a1a1a] items-center justify-center gap-4">
					<Image source={appIcon} className="h-[100px] w-[100px]" />
					<TouchableOpacity onPress={onFetchUpdateAsync}>
						<View className="items-center flex-center rounded-lg bg-blue-700 p-4">
							<Text className="text-white font-robotoBold text-2xl">
								Update Availible!
							</Text>
							<Text>Tap to update</Text>
						</View>
					</TouchableOpacity>
				</View>
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
