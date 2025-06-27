import { ImageSourcePropType } from "react-native";
// icon imports
import currentYear from "@/assets/images/icons/2025.png";
import recaps from "@/assets/images/icons/recaps.png";
import preaching from "@/assets/images/icons/preaching.png";
import skits from "@/assets/images/icons/masks.png";
import game from "@/assets/images/icons/games.png";
import videoIcon from "@/assets/images/icons/videoIcon.png";
import commentIcon from "@/assets/images/icons/commentIcon.png";
import TvIcon from "@/assets/images/icons/TVicon.png";
import InfoIcon from "@/assets/images/icons/infoIcon.png";
import ShareIcon from "@/assets/images/icons/shareIcon.png";
import picturesIcon from "@/assets/images/icons/picturesIcon.png";
import forwardIcon from "@/assets/images/icons/forwardIcon.png";
import backIcon from "@/assets/images/icons/backIcon.png";
import messageIcon from "@/assets/images/icons/messageIcon.png";
import solidInfoIcon from "@/assets/images/icons/solidInfoIcon.png";
import linkIcon from "@/assets/images/icons/linkIcon.png";

// current year image imports

import themeHeader from "@/assets/images/2025/yc25-header.jpg";
import themeHeader2 from "@/assets/images/2025/yc25-header2.jpg";
import videosImg from "@/assets/images/2025/videos2025.jpg";
import photosImg from "@/assets/images/2025/photos2025.jpg";

// preacher image imports
import brownPortait from "@/assets/images/2025/preachers/brown25.jpg";
import epleyPortait from "@/assets/images/2025/preachers/epley25.jpg";
import floodPortait from "@/assets/images/2025/preachers/flood25.jpg";
import pastorPortait from "@/assets/images/2025/preachers/pastor25.jpg";
import stroudPortait from "@/assets/images/2025/preachers/stroud25.jpg";

// image and icon exports
export const icons = {
	currentYear,
	recaps,
	preaching,
	skits,
	game,
	videoIcon,
	commentIcon,
	TvIcon,
	InfoIcon,
	ShareIcon,
	picturesIcon,
	forwardIcon,
	backIcon,
	messageIcon,
	solidInfoIcon,
	linkIcon,
};

export const images = {
	themeHeader,
	themeHeader2,
	photosImg,
	videosImg,
};

// recap, preaching, skit main page data
export const pages = {
	recaps: {
		pageType: "Recap",
		headerText: "Recap Photos & Videos",
		accentColor: "#eb3f1c",
	},
	preaching: {
		pageType: "Preaching",
		headerText: "YC Preaching",
		accentColor: "#8193d6",
	},
	skits: {
		pageType: "Skits",
		headerText: "Skit Photos & Videos",
		accentColor: "#E1AD6F",
	},
};

// info for each preacher
export type preacher = {
	name: string;
	displayName: string;
	portrait: ImageSourcePropType;
	location: string;
	about: string;
};
export const preachersList: preacher[] = [
	{
		name: "Pastor Trieber",
		displayName: "Pastor Jack Trieber",
		portrait: pastorPortait,
		location: "Host Pastor",
		about: "Pastor Trieber has been the pastor at North Valley since 1976. Under his leadership, hundreds of pastors, evangelists, missionaries, and Christian servants have been called and sent forth into the Gospel ministry. Pastor Trieber has been hosting this conference for over 40 years.",
	},
	{
		name: "Joseph Brown",
		displayName: "Pastor Joseph Brown",
		portrait: brownPortait,
		location: "Washington, IA",
		about: "Pastor Joseph Brown grew up in Iowa at Marion Avenue Baptist Church. Bro. Joseph served alongside his father, Pastor Larry Brown, for ten years as the youth pastor. In 2011, he became the senior pastor of his home church. His heart for God and young people is evident in his preaching and singing.",
	},
	{
		name: "Sam Epley",
		displayName: "Pastor Sam Epley",
		portrait: epleyPortait,
		location: "Murfreesboro, TN",
		about: "Pastor Sam Epley was raised in a preacher’s home in Western Kentucky and was saved at the age of 5. He was privileged to be in ministry from a young age, having traveled in full time evangelism, singing and preaching with his family. He has been serving as the Senior Pastor at the Temple Baptist Church in Murfreesboro, TN since June, 2017.",
	},
	{
		name: "Luke Flood",
		displayName: "Bro. Luke Flood",
		portrait: floodPortait,
		location: "Conference Host",
		about: "Luke Flood is a product of North Valley. He grew up in a wonderful Christian family and had the privilege of attending North Valley Baptist Schools from kindergarten through twelfth grade. After graduation, he attended Golden State Baptist College, where he earned both his bachelor’s and master’s degrees. He currently serves on staff as the bus director and is the conference host for this year’s conference.",
	},
	{
		name: "Mark Stroud",
		displayName: "Pastor Mark Stroud",
		portrait: stroudPortait,
		location: "Murrayville, GA",
		about: "Pastor Mark Stroud has been the Pastor of Wahoo Baptist Church since November 2001. After serving almost eight years as a youth pastor, Wahoo Baptist Church called Pastor Stroud to be their Pastor. The Lord has graciously opened many doors for Pastor Stroud to travel and preach in revivals, youth meetings, and camp meetings all across America.",
	},
];

// extra information (for the accordian)
export const moreInformation = [
	{
		title: "General Information",
		details: `To register visit our website at nvbc.org/yc

Registration fees are nonrefundable.The conference is open to those in seventh through twelfth grade.
		
There must be at least one worker for every eight teenagers. Every group that brings both young ladies and young men must have at least one male youth worker and one female youth worker.

Young ladies are required to wear knee-length skirts or dresses, and young men should wear a collared shirts to all evening services. Young ladies may wear modest culottes during activity times--no pants, please,

The following meals are included in the registration fees: light refreshments following the Monday evening service; breakfast, lunch, and dinner on Tuesday and Wednesday. Nurseries will not be provided.

Many groups arrive in time to get the conference materials and freshen up before the Monday evening service.

Materials for the week will be distributed on the first floor of the GSBC Academic Building on Monday, June 16, from 3:00-6:00 PM and then following the evening service.`,
	},
	{
		title: "Accomodation Information",
		details: `A conference hotel rate has been secured by North Valley Baptist Church for three hotels. The cost for lodging is not included in your conference fee. Occupancy per room is based on 4, depending on room type. For example, if the number of adult ladies and teenage girls in your group is 12, you should book 3 rooms. If the number were 13, the number would be rounded up.

To get hotel information please email us at info@nvbc.org.
	`,
	},
	{
		title: "Transportation Information",
		details: `We do provide airport transportation. However, pick-ups and drop-offs must be confirmed with our office prior to the conference. Please contact Tom Apusen at 408-988-8881, x228, for further details. Please note that the nearest airport to the conference is San José International Airport (4 miles, 8 minutes), followed by San Francisco International Airport and Oakland International Airport (both approximately 33 miles, 39 minutes).

Transportation will only run to the hotel that is sponsored by the conference. Please plan on providing your own transportation to and from the church if you are staying in hotels not recommended by the conference.`,
	},
];

// logo and featured image import and exports (this ended up loading faster than fetching the images from online)
import setImage25 from "@/assets/images/2025/setImage.jpg";
import setImage24 from "@/assets/images/2024/setImage.jpg";
import setImage23 from "@/assets/images/2023/setImage.jpg";
import setImage22 from "@/assets/images/2022/setImage.jpg";
import setImage21 from "@/assets/images/2021/setImage.jpg";
import setImage19 from "@/assets/images/2019/setImage.jpg";
import setImage18 from "@/assets/images/2018/setImage.jpg";
import setImage17 from "@/assets/images/2017/setImage.jpg";
import setImage16 from "@/assets/images/2016/setImage.jpg";
import setImage15 from "@/assets/images/2015/setImage.jpg";
import setImage14 from "@/assets/images/2014/setImage.jpg";
import setImage13 from "@/assets/images/2013/setImage.jpg";
import setImage12 from "@/assets/images/2012/setImage.jpg";
import setImage11 from "@/assets/images/2011/setImage.jpg";
import logo25 from "@/assets/images/2025/logo.png";
import logo24 from "@/assets/images/2024/logo.png";
import logo23 from "@/assets/images/2023/logo.png";
import logo22 from "@/assets/images/2022/logo.png";
import logo21 from "@/assets/images/2021/logo.png";
import logo20 from "@/assets/images/2020/logo.png";
import logo19 from "@/assets/images/2019/logo.png";
import logo18 from "@/assets/images/2018/logo.png";
import logo17 from "@/assets/images/2017/logo.png";
import logo16 from "@/assets/images/2016/logo.png";
import logo15 from "@/assets/images/2015/logo.png";
import logo14 from "@/assets/images/2014/logo.png";
import logo13 from "@/assets/images/2013/logo.png";
import logo12 from "@/assets/images/2012/logo.png";
import logo11 from "@/assets/images/2011/logo.png";
import logo10 from "@/assets/images/2010/logo.png";
import preaching25 from "@/assets/images/2025/preachingFeatured.jpg";
import preaching24 from "@/assets/images/2024/preachingFeatured.jpg";
import preaching23 from "@/assets/images/2023/preachingFeatured.jpg";
import preaching22 from "@/assets/images/2022/preachingFeatured.jpg";
import preaching21 from "@/assets/images/2021/YC21-preaching-1.jpg";
import preaching20 from "@/assets/images/2020/YC20-preaching-1.jpg";
import preaching19 from "@/assets/images/2019/YC19-preaching-1.jpg";
import preaching18 from "@/assets/images/2018/YC18-preaching-1.jpg";
import preaching17 from "@/assets/images/2017/YC17-preaching-1.jpg";
import preaching16 from "@/assets/images/2016/YC16-preaching-1.jpg";
import preaching15 from "@/assets/images/2015/YC15-preaching-1.jpg";
import preaching14 from "@/assets/images/2014/YC14-preaching-1.jpg";
import preaching13 from "@/assets/images/2013/YC13-preaching-1.jpg";
import preaching12 from "@/assets/images/2012/YC12-preaching-1.jpg";
import preaching11 from "@/assets/images/2011/YC11-preaching-1.jpg";
import skit25 from "@/assets/images/2025/skitFeatured.jpg";
import skit24 from "@/assets/images/2024/skitFeatured.jpg";
import skit23 from "@/assets/images/2023/skitFeatured.jpg";
import skit22 from "@/assets/images/2022/skitFeatured.jpg";
import skit20 from "@/assets/images/2020/YC20-skits-1.jpg";
import skit19 from "@/assets/images/2019/YC19-skits-1.jpg";
import skit18 from "@/assets/images/2018/YC18-skits-1.jpg";
import skit17 from "@/assets/images/2017/YC17-skits-1.jpg";
import skit16 from "@/assets/images/2016/YC16-skits-1.jpg";
import skit15 from "@/assets/images/2015/YC15-skits-1.jpg";
import skit14 from "@/assets/images/2014/YC14-skits-1.jpg";
import skit13 from "@/assets/images/2013/YC13-skits-1.jpg";
import skit12 from "@/assets/images/2012/YC12-skits-1.jpg";
import skit11 from "@/assets/images/2011/YC11-skits-1.jpg";
import skit10 from "@/assets/images/2010/YC10-skits-1.jpg";
export const featuredImages = {
	setImage25,
	setImage24,
	setImage23,
	setImage22,
	setImage21,
	setImage19,
	setImage18,
	setImage17,
	setImage16,
	setImage15,
	setImage14,
	setImage13,
	setImage12,
	setImage11,
	logo25,
	logo24,
	logo23,
	logo22,
	logo21,
	logo20,
	logo19,
	logo18,
	logo17,
	logo16,
	logo15,
	logo14,
	logo13,
	logo12,
	logo11,
	logo10,
	preaching25,
	preaching24,
	preaching23,
	preaching22,
	preaching21,
	preaching20,
	preaching19,
	preaching18,
	preaching17,
	preaching16,
	preaching15,
	preaching14,
	preaching13,
	preaching12,
	preaching11,
	skit25,
	skit24,
	skit23,
	skit22,
	skit20,
	skit19,
	skit18,
	skit17,
	skit16,
	skit15,
	skit14,
	skit13,
	skit12,
	skit11,
	skit10,
};
