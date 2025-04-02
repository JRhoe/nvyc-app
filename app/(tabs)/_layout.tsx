import { icons } from "@/constants";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";

const TabIcon = ({
	focused,
	icon,
	title,
}: {
	focused: boolean;
	icon: any;
	title: string;
}) => {
	return (
		<View className="flex-col items-center mt-6 w-full min-w-[60px] p-0">
			<Image
				source={icon}
				className={`size-8 ${focused ? "opacity-100" : "opacity-40"}`}
				tintColor={focused ? "#c7c4b7" : ""}
			/>
			<Text
				className={`${
					focused ? "text-main-text opacity-100" : "text-white opacity-40"
				} text-xs mt-[4px]`}>
				{title}
			</Text>
		</View>
	);
};

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				},
				tabBarBackground: () =>
					Platform.OS === "android" ? (
						<View className="h-full w-full bg-black/80"></View>
					) : (
						<BlurView intensity={90} className={"h-full w-full"}></BlurView>
					),
				tabBarStyle: {
					backgroundColor: "transparent",
					height: 80,
					position: "absolute",
					overflow: "hidden",
					borderColor: "transparent",
					paddingHorizontal: 24,
				},
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.currentYear}
							title={"YC 2025"}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="recaps"
				options={{
					title: "Recaps",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.recaps} title={"Recaps"} />
					),
				}}
			/>
			<Tabs.Screen
				name="preaching"
				options={{
					title: "Preaching",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={icons.preaching}
							title={"Preaching"}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="skits"
				options={{
					title: "Skits",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.skits} title={"Skits"} />
					),
				}}
			/>
			<Tabs.Screen
				name="game"
				options={{
					title: "Game",
					headerShown: false,
					href: null,
					tabBarIcon: ({ focused }) => (
						<TabIcon focused={focused} icon={icons.game} title={"Game"} />
					),
				}}
			/>
			<Tabs.Screen
				name="(current year)/photos"
				options={{
					headerShown: false,
					href: null,
				}}
			/>
			<Tabs.Screen
				name="(current year)/videos"
				options={{
					headerShown: false,
					href: null,
				}}
			/>
			<Tabs.Screen
				name="(selected year)/[yearData]"
				options={{
					headerShown: false,
					href: null,
				}}
			/>
		</Tabs>
	);
};

const styles = StyleSheet.create({});

export default Layout;
