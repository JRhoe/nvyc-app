import SectionHeader from "@/components/ui/SectionHeader";
import ShareButton from "@/components/ui/ShareButton";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { icons, images } from "@/constants";
import { currentYear } from "@/constants/data";
import { Link } from "expo-router";
import React from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

const Videos = () => {
	return (
        <>
            <View className="bg-black flex-row items-center">
                <Text className="text-white font-robotoBold text-lg absolute text-center w-full">
                    Youth Conference Videos
                </Text>
                <Link href={"/"}>
                    <View className="flex-row items-center justify-center py-4 pr-5">
                        <Image
                            source={icons.backIcon}
                            className="size-6"
                            tintColor={"#E1AD6F"}
                        />
                        <Text className="text-main-text font-roboto text-lg ">Back</Text>
                    </View>
                </Link>
            </View>
            <ScrollView className="bg-black">
                <Hero />
                <Media />
                <Extras/>
                <ShareButton accentColor="#8c1301"/>
            </ScrollView>
        </>
	);
};

const Hero = () => {
	return (
		<>
			<View className="h-[30vh] w-full flex items-start justify-center">
				<Image
					source={images.themeHeader2}
					className="w-full h-full absolute"
					resizeMode="cover"
				/>
			</View>
			<View className="px-2 mt-7 items-center">
				<Text className="text-main text-4xl text-center font-robotoBlack border-b-[5px]">
					{currentYear.year} videos
				</Text>
				<Text className="text-main mt-5 text-lg/6 font-robotoSemibold text-center">
					Here are a few videos from the {currentYear.year} Youth Conference.
				</Text>
			</View>
		</>
	);
};

const Media = () => {
	return (
        <>
            <View className="px-2 items-center mt-4">
                <SectionHeader
                    iconURL={icons.videoIcon}
                    iconSize={25}
                    textSize={20}
                    text="View Videos"
                    accentColor="#8c1301"
                />
            </View>
            <Text className="text-white text-sm text-center">Youth Conference Videos</Text>
            {currentYear.recap?.recapVideo &&
                <VideoPlayer videoData={currentYear.recap.recapVideo}/>
            }
            {currentYear.recap?.openingNightVideo &&
                <VideoPlayer videoData={currentYear.recap.openingNightVideo}/>
            }
            {currentYear.skit?.introVideo &&
                <VideoPlayer videoData={currentYear.skit.introVideo}/>
            }
            <VideoPlayer videoData={["youtube", "1vTz_Mf7Ytk"]}/>
        </>
	);
};

const Extras = () => {
	return (
		<View className="px-2 items-center mt-4">
			{/* Stickers (IOS only) */}
			{/* {Platform.OS === "ios" && (
				<>
					<SectionHeader
						iconURL={icons.commentIcon}
						iconSize={25}
						textSize={20}
						text="Use the Stickers in Imessage"
						accentColor="#E1AD6F"
					/>
					<Text className="text-main-text text-center text-lg">
						To use the stickers, go to iMessage, tap the "+" button, choose
						"stickers", and pick the NVYC app.
					</Text>
                    <View className="w-full">
                        <Image
                            key={images.stickerPack}
                            source={images.stickerPack}
                            className="w-full h-[250px]"
                            resizeMode="contain"
                        />
                    </View>
				</>
                )
			} */}

			{/* About the Conference */}
			<SectionHeader
				iconURL={icons.InfoIcon}
				iconSize={25}
				textSize={20}
				text="Conference Theme"
				accentColor="#8c1301"
			/>
			<View className="w-full">
                <Image
                    key={images.themeHeader}
                    source={images.themeHeader}
                    className="w-full h-[250px]"
                    resizeMode="contain"
                />
            </View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Videos;
