import SectionHeader from "@/components/ui/SectionHeader";
import ShareButton from "@/components/ui/ShareButton";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { icons } from "@/constants";
import { years, yearType } from "@/constants/data";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
	FlatList,
	Image,
	ImageSourcePropType,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";

// this is where the info about each year is displayed
// (when you tap on a year in the recap, preaching, of skit list)

const YearData = () => {
	// get the info for the selected year
	const { pageType, selectedYear, featuredImage, photoUrl, media, returnLink } =
		getYearDetails();

	// If the year isnt found, return not found page
	if (!selectedYear) return <YearNotFound pageType={pageType} />;

	// If the year is found...

	// reset scroll
	const scrollRef = useRef<null | ScrollView>(null);
	useEffect(() => {
		scrollRef.current?.scrollTo({ y: 0, animated: false });
	});

	return (
		<SafeAreaView className="flex-1 bg-black px-2">
			{/* header and back button */}
			<View className="bg-black flex-row items-center px-2">
				<Text className="text-white font-robotoBold text-lg absolute text-center w-full">
					Youth Conference {pageType}
				</Text>
				<Link href={`/${returnLink}`}>
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

			{/* content */}
			<ScrollView className="bg-black flex-1" ref={scrollRef}>
				<Hero
					year={selectedYear}
					pageType={pageType}
					featuredImage={featuredImage}
				/>
				{media}
				<Theme year={selectedYear} />
				<Photos
					photoUrl={photoUrl}
					pageType={pageType}
					year={selectedYear.year}
				/>
				<ShareButton accentColor="#E1AD6F" />
			</ScrollView>
		</SafeAreaView>
	);
};

const Hero = ({
	year,
	featuredImage,
	pageType,
}: {
	year: yearType;
	featuredImage?: ImageSourcePropType | undefined;
	pageType: string | string[];
}) => {
	return (
		<>
			<View className="h-[30vh] w-full flex items-start justify-center">
				<Image
					source={featuredImage}
					className="w-full h-full absolute"
					resizeMode="cover"
				/>
			</View>
			<View className="px-2 mt-7 items-center">
				<Text className="text-main-text text-3xl text-center font-robotoBlack border-b-[5px] uppercase">
					{year.year} {pageType} videos
				</Text>
				{/* I dont want the theme paragraph to be shown on the skits page */}
				{pageType !== "Skits" && (
					<Text className="text-main-text mt-5 text-lg/6 font-robotoSemibold text-center">
						{year.aboutThemeShort}
					</Text>
				)}
			</View>
		</>
	);
};

// different media section depending on the page type (recap, skit, preaching)
const RecapMedia = ({ year }: { year: yearType }) => {
	return (
		<View className="mt-5 px-4">
			<SectionHeader
				accentColor="#E1AD6F"
				iconSize={25}
				text="View Recap Videos"
				iconURL={icons.videoIcon}
				textSize={18}
			/>
			<Text className="text-white text-center">Youth Conference Videos</Text>
			{/* if the videos exists, show the video */}
			{year.recap?.recapVideo && (
				<VideoPlayer videoData={year.recap?.recapVideo} />
			)}
			{year.recap?.openingNightVideo && (
				<VideoPlayer videoData={year.recap?.openingNightVideo} />
			)}
			{year.recap?.videos &&
				year.recap.videos.map((item) => (
					<VideoPlayer key={item[1]} videoData={item} />
				))}
		</View>
	);
};

const PreachingMedia = ({ year }: { year: yearType }) => {
	return (
		<View className="mt-5 px-4">
			<SectionHeader
				accentColor="#E1AD6F"
				iconSize={25}
				text="View Preaching Videos"
				iconURL={icons.videoIcon}
				textSize={18}
			/>
			<Text className="text-white text-center">
				Youth Preaching Conference Videos
			</Text>
			{/* if the videos exists, show the video */}
			{year.preaching?.videos &&
				year.preaching?.videos.map((item) => (
					<VideoPlayer key={item[1]} videoData={item} />
				))}
		</View>
	);
};

const SkitMedia = ({ year }: { year: yearType }) => {
	return (
		<View className="mt-5 px-4">
			<SectionHeader
				accentColor="#E1AD6F"
				iconSize={25}
				text="View Skit Videos"
				iconURL={icons.videoIcon}
				textSize={18}
			/>
			<Text className="text-white text-center text-sm">
				Youth Conference Nightly Skit Videos
			</Text>
			{/* if the videos exists, show the video */}
			{year.skit?.skitVideos &&
				year.skit?.skitVideos.map((item) => (
					<VideoPlayer key={item[1]} videoData={item} />
				))}
			{(year.skit?.extraVideos || year.skit?.introVideo) && (
				<Text className="text-white text-center text-sm my-4">
					Youth Conference Extra Skit Videos
				</Text>
			)}
			{year.skit?.introVideo && (
				<VideoPlayer videoData={year.skit.introVideo} />
			)}
			{year.skit?.extraVideos &&
				year.skit?.extraVideos.map((item) => (
					<VideoPlayer key={item[1]} videoData={item} />
				))}
		</View>
	);
};

const Theme = ({ year }: { year: yearType }) => {
	return (
		<View className="items-center mt-[32px]">
			<SectionHeader
				accentColor="#E1AD6F"
				iconSize={25}
				text="Conference Theme"
				iconURL={icons.InfoIcon}
				textSize={18}
			/>
			<Image
				source={year.logo}
				className="w-[80%] h-[200px]"
				resizeMode="contain"
			/>
		</View>
	);
};

// image carosel at the bottom
const Photos = ({
	photoUrl,
	pageType,
	year,
}: {
	photoUrl?: string;
	pageType: string;
	year: number;
}) => {
	// this is where the list of photos are stored (empty by default)
	const [listOfPhotos, setListOfPhotos] = useState<any[]>([]);

	useEffect(() => {
		async function getData() {
			// for years 2021 and older there is no rest API for the images. photoUrl will be = null
			if (!photoUrl) {
				// Set the images manualy
				setListOfPhotos(getPhotoListLegacy(pageType, year));
				return;
			}
			// for year 2022 and newer there is a rest API for the images. Use photoUrl to get list of images
			const res = await fetch(photoUrl);
			const data = await res.json();
			setListOfPhotos(data);
		}
		getData();
	}, [year, pageType]);
	return (
		<>
			{listOfPhotos.length > 0 && (
				<>
					<SectionHeader
						accentColor="#E1AD6F"
						iconSize={25}
						text="Photos"
						iconURL={icons.picturesIcon}
						textSize={18}
					/>
					<View className="w-full h-[30vh] py-4">
						<FlatList
							data={listOfPhotos}
							key={listOfPhotos[0].path}
							keyExtractor={(_, i) => i.toString()}
							horizontal
							renderItem={(item) => (
								<Image
									source={{ uri: item.item.path }}
									className="h-full w-[80vw] ml-3"
									resizeMode="cover"
								/>
							)}
						/>
					</View>
				</>
			)}
		</>
	);
};

// year not found page
const YearNotFound = ({ pageType }: { pageType: string }) => {
	return (
		<SafeAreaView className="flex-1 bg-black">
			<View className="bg-black flex-row items-center">
				<Text className="text-white font-robotoBold text-lg absolute text-center w-full">
					Youth Conference {pageType}
				</Text>
				<Link href={`/`}>
					<View className="flex-row items-center justify-center py-4 pr-5">
						<Image
							source={icons.backIcon}
							className="size-6"
							tintColor={"#E1AD6F"}
						/>
						<Text className="text-main-text font-roboto text-lg ">Home</Text>
					</View>
				</Link>
			</View>
			<View className="w-full h-full justify-center items-center bg-black">
				<Text className="text-white text-2xl font-robotoBold">
					Year Not Found
				</Text>
			</View>
		</SafeAreaView>
	);
};

// this returns the data I need from the selected year based on the page type (skit, preaching, reacap)
const getYearDetails = () => {
	// the year and page type are stored in the url ( .../skit-2024 )
	const { yearData }: { yearData: string } = useLocalSearchParams();
	const pageType = yearData.split("-")[0];
	const selectedYear = years.find(
		(item) => item.year.toString() === yearData.split("-")[1]
	);

	if (!selectedYear)
		return {
			selectedYear: null,
			pageType: pageType,
			photoUrl: null,
			featuredImage: null,
			media: null,
			returnLink: null,
		};

	if (pageType === "Recap") {
		return {
			selectedYear: selectedYear,
			pageType: pageType,
			photoUrl: selectedYear.recap?.photos,
			featuredImage: selectedYear.setImage,
			media: <RecapMedia year={selectedYear} />,
			returnLink: "recaps",
		};
	} else if (pageType === "Preaching") {
		return {
			selectedYear: selectedYear,
			pageType: pageType,
			photoUrl: selectedYear.preaching?.photos,
			featuredImage: selectedYear.preaching?.featuredImage,
			media: <PreachingMedia year={selectedYear} />,
			returnLink: "preaching",
		};
	}
	//page type = skit
	else {
		return {
			selectedYear: selectedYear,
			pageType: pageType,
			photoUrl: selectedYear.skit?.photos,
			featuredImage: selectedYear.skit?.featuredImage,
			media: <SkitMedia year={selectedYear} />,
			returnLink: "skits",
		};
	}
};

// maually set the list of photos for years 2021 and older
// images are stored in a github repo
const getPhotoListLegacy = (pageType: string, year: number) => {
	if (pageType === "Recap") {
		return [
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-featured-1.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-featured-2.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-featured-3.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-featured-4.jpg`,
			},
		];
	} else if (pageType === "Preaching") {
		// 2020 only has one image (covid)
		if (year === 2020)
			return [
				{
					path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
						year - 2000
					}-preaching-1.jpg`,
				},
			];
		return [
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-preaching-1.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-preaching-2.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-preaching-3.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-preaching-4.jpg`,
			},
		];
	}
	//page type = skit
	else {
		// 2020 only has one image (covid)
		if (year === 2020)
			return [
				{
					path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
						year - 2000
					}-skits-1.jpg`,
				},
			];
		return [
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-skits-1.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-skits-2.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-skits-3.jpg`,
			},
			{
				path: `https://jrhoe.github.io/nv-image-server/${year}/YC${
					year - 2000
				}-skits-4.jpg`,
			},
		];
	}
};

export default YearData;
