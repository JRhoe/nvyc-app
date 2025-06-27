import SectionHeader from "@/components/ui/SectionHeader";
import VideoPlayer from "@/components/ui/VideoPlayer";
import {
	icons,
	images,
	moreInformation,
	preacher,
	preachersList,
} from "@/constants";
import {
	FlatList,
	Image,
	ImageSourcePropType,
	Pressable,
	ScrollView,
	Text,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "@/components/Footer";
import { currentYear, lastYear } from "@/constants/data";
import { Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import PreacherCard from "@/components/PreacherCard";
import Accorion from "@/components/ui/Accorion";

export default function Index() {
	const [appIsReady, setAppIsReady] = useState(false);

	// Starts loading fonts
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("@/assets/fonts/Roboto-Regular.ttf"),
		"Roboto-SemiBold": require("@/assets/fonts/Roboto-SemiBold.ttf"),
		"Roboto-Bold": require("@/assets/fonts/Roboto-Bold.ttf"),
		"Roboto-Black": require("@/assets/fonts/Roboto-Black.ttf"),
		"Roboto-Italic": require("@/assets/fonts/Roboto-Italic.ttf"),
		"Roboto-Thin": require("@/assets/fonts/Roboto-Thin.ttf"),
		"Roboto-Light": require("@/assets/fonts/Roboto-Light.ttf"),
	});

	// once the fonts are loaded set appIsReady = true
	useEffect(() => {
		if (fontsLoaded) {
			setAppIsReady(true);
		}
	}, [fontsLoaded]);

	// when called, this hides the splash screen
	const onLayoutRootView = () => {
		if (appIsReady) {
			// extra delay for smoothness
			setTimeout(() => {
				SplashScreen.hide();
			}, 1500);
		}
	};

	// if the app is not ready return nothing (splash screen still visible)
	if (!appIsReady) {
		return null;
	}

	// if the app is ready return the homepage (splash screen still visible)
	return (
		<SafeAreaView className="flex-1 bg-black">
			<ScrollView showsVerticalScrollIndicator={false}>
				<Hero loadedFunc={onLayoutRootView} />
				<Media />
				<Extras />
				<Footer accentColor="#2a89c0" />
			</ScrollView>
		</SafeAreaView>
	);
}

const Hero = ({ loadedFunc }: { loadedFunc: () => void }) => {
	return (
		<>
			<View className="h-[35vh] w-full flex items-start justify-center">
				{/* the splash screen is hidden once this image loads *see onLoad parameter */}
				<Image
					source={currentYear.setImage}
					className="w-full h-full absolute"
					resizeMode="cover"
					onLoad={loadedFunc}
				/>
			</View>
			<View className="px-2 mt-12 items-center">
				<Text className="text-white text-[32px] leading-[44px] text-center font-robotoBlack tracking-widest border-b-[5px] pb-2 border-main uppercase">
					National Youth Conference 2025
				</Text>
				<Text className="text-main-text mt-7 text-lg/6 font-robotoSemibold">
					Enjoy this exciting week of fiery preaching, awesome activities, hilarious skits, and lifelong memories at the 42nd Annual National Youth Conference
				</Text>
			</View>
		</>
	);
};

const Media = () => {
	return (
		<View className="px-2 items-center mt-4">
			<SectionHeader
				iconURL={icons.videoIcon}
				iconSize={25}
				textSize={20}
				text="Recap and Opening Night Video"
				accentColor="#8c1301"
			/>

			{/* Photos and Videos Link */}
			<View className="w-full mt-2">
				<VideoPlayer videoData={["youtube","9PA54uFBsoo"]}/>
				<VideoPlayer videoData={["vimeo", "1094278407"]}/>
			</View>
		</View>
	);
};

const Extras = () => {
	// Preacher Card variables
	const [preacherCardActive, setPreacherCardActive] = useState<boolean>(false);
	const [selectedPreacher, setSelectedPreacher] = useState<preacher>(
		preachersList[0]
	);

	return (
		<View className="px-2 items-center mt-4">
			<View className="w-full">
				<Link href={"/photos"}>
					<ImageView imageURL={images.photosImg}/>
				</Link>
				<Link href={"/videos"}>
					<ImageView imageURL={images.photosImg}/>
				</Link>
			</View>

			{/* About the Conference */}
			<SectionHeader
				iconURL={icons.InfoIcon}
				iconSize={25}
				textSize={20}
				text="Conference Theme"
				accentColor="#8c1301"
			/>
			<ImageView imageURL={images.themeHeader} />
			<View className="px-4 items-center">
				<Text className="text-main-text mt-5 text-xl/7 font-roboto">
					{currentYear.aboutThemeLong}
				</Text>
			</View>

			{/* More Information accordian */}
			{/* <SectionHeader
				iconURL={icons.solidInfoIcon}
				iconSize={25}
				textSize={20}
				text="More Information"
				accentColor="#8c1301"
			/>
			<View>
				{moreInformation.map((item, index) => (
					<Accorion title={item.title} details={item.details} key={index} />
				))}
			</View> */}
		</View>
	);
};

// custom image component
const ImageView = ({ imageURL }: { imageURL: ImageSourcePropType }) => {
	return (
		<View className="w-full">
			<Image
				source={imageURL}
				className="w-full h-[300px]"
				resizeMode="contain"
			/>
		</View>
	);
};
