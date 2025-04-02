import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ImageCarousel from "./ImageCarousel";
import YearDisplayCard from "./YearDisplayCard";
import Footer from "./Footer";
import { years, yearType } from "@/constants/data";

const LandingPage = ({
	pageType,
	headerText,
	accentColor,
}: {
	pageType: string;
	headerText: string;
	accentColor: string;
}) => {
	function restructureYeardata(yrs: yearType[]) {
		// filter list of years to display only the years with the correct page type (preaching, recaps, or skit)
		// maps over the list to extract only the data that is needed
		if (pageType === "Recap") {
			return yrs
				.filter((yr) => yr.recap)
				.map((yr) => ({
					displayImage: yr.setImage,
					year: yr.year,
					titleText: `YC${yr.year - 2000} Recap`,
					paraText: yr.aboutThemeShort,
					link: `/Recap-${yr.year}`,
				}));
		} else if (pageType === "Preaching") {
			return yrs
				.filter((yr) => yr.preaching)
				.map((yr) => ({
					displayImage: yr.preaching?.featuredImage,
					year: yr.year,
					titleText: `YC${yr.year - 2000} Preaching`,
					paraText: yr.aboutThemeShort,
					link: `/Preaching-${yr.year}`,
				}));
		}
		//(pageType === "Skits")
		else {
			return yrs
				.filter((yr) => yr.skit)
				.map((yr) => ({
					displayImage: yr.skit?.featuredImage,
					year: yr.year,
					titleText: `YC${yr.year - 2000} Skits`,
					paraText: yr.aboutThemeShort,
					link: `/Skits-${yr.year}`,
				}));
		}
	}

	return (
		<View className="flex-1 bg-black px-[24px]">
			{/* list out the years */}
			<FlatList
				data={restructureYeardata(years)}
				keyExtractor={(item) => item.year.toString()}
				className="bg-[#171616] mt-[8vh] rounded-2xl overflow-hidden"
				ListHeaderComponent={
					// image carousel and page title
					<View className="h-[34vh] w-full">
						<ImageCarousel
							data={restructureYeardata(years).map((yr) => yr.displayImage)}
						/>
						<View className="px-4 items-start">
							<Text
								className="text-white font-robotoBold text-2xl mt-[8px] flex-col relative uppercase border-b-[5px]"
								style={{ borderColor: accentColor }}>
								{headerText}
							</Text>
						</View>
					</View>
				}
				renderItem={(item) => (
					// the list item for each year
					<YearDisplayCard year={item.item} accentColor={accentColor} />
				)}
				ListFooterComponent={<Footer accentColor={accentColor} />}
				ListFooterComponentStyle={{
					marginBottom: 16,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default LandingPage;
