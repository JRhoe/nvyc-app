import { ImageSourcePropType } from "react-native";
import { featuredImages } from ".";

// defined type for the video data (to avoid incorrect data entry ie. mispelings)
type videoType = ["vimeo" | "youtube", string];

// defined type for the year data (to avoid incorrect data entry ie. mispelings)
export type yearType = {
	year: number;
	setImage: ImageSourcePropType | undefined;
	logo: ImageSourcePropType | undefined;
	aboutThemeLong: string;
	aboutThemeShort: string;
	recap: null | {
		openingNightVideo: videoType | null;
		recapVideo: videoType;
		photos: string;
		videos: videoType[] | null;
	};
	preaching: null | {
		featuredImage: ImageSourcePropType | undefined;
		photos: string;
		videos: videoType[];
	};
	skit: null | {
		featuredImage: ImageSourcePropType | undefined;
		introVideo: videoType | null;
		photos: string;
		skitVideos: videoType[];
		extraVideos: videoType[] | null;
	};
};


// the long list of years (read it if you want to waste 7 hours)
export const years: yearType[] = [
	{
		year: 2025,
		setImage: featuredImages.setImage25,
		logo: featuredImages.logo25,
		aboutThemeLong:
			"Our youth stand at a defining moment—a crossroad that will shape their future. This is their High Noon moment. It's a time of critical importance that will have a lasting impact. Every young person must face this moment of truth, choosing to follow God or the world. High Noon is here for the next generation—we want to encourage them to choose Jesus!",
		aboutThemeShort: "In 2025, we encouraged young people to choose God at this 'High Noon' moment in their lives.",
		recap: {
			openingNightVideo: ["vimeo", "1094278407"],
			recapVideo: ["youtube", "9PA54uFBsoo"],
			photos: "https://nvbc.org/app/nvyc/json/2025_photos.json",
			videos: [
				["vimeo","1094281444"]
			],
		},
		preaching: {
			featuredImage: featuredImages.preaching25,
			photos: "https://nvbc.org/app/nvyc/json/2025_preaching.json",
			videos: [
				["vimeo","1094627759"],
				["vimeo","1094629755"],
				["vimeo","1094631976"],
				["vimeo","1094632563"],
				["vimeo","1094635616"],
				["vimeo","1094634986"],
				["vimeo","1094826707"],
				["vimeo","1094633743"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit25,
			introVideo: ["vimeo", "1094281444"],
			photos: "https://nvbc.org/app/nvyc/json/2025_skit.json",
			skitVideos: [
				["vimeo", "1094626210"],
				["vimeo", "1094628874"],
				["vimeo", "1094630199"]
			],
			extraVideos: [
				["youtube", "1vTz_Mf7Ytk"],
				["vimeo", "1094630291"],
				["vimeo", "1095702382"],
			],
		},
	},
	{
		year: 2024,
		setImage: featuredImages.setImage24,
		logo: featuredImages.logo24,
		aboutThemeLong:
			"Teenagers need to DISCOVER what God has in store for their lives. Psalm 34:8 tells us to “taste and see that the Lord is good.” In the face of fear, it will take a generation willing to DISCOVER God's plan, DISCOVER God's Provision, and DISCOVER God's Protection in their lives. Visit nvbc.org/yc for more information.",
		aboutThemeShort:
			"In 2024, we encouraged young people to 'Discover' the goodness of God and to discover God's will for their lives. Experience the powerful preaching, exciting activities, and hilarious skits from this year's Youth Conference via photos and videos.",
		recap: {
			openingNightVideo: ["youtube", "5lBeB0i-KWc"],
			recapVideo: ["youtube", "XjAOwl9uwbU"],
			photos: "https://nvbc.org/app/nvyc/json/2024_photos.json",
			videos: [
				["youtube", "kverHd6MLRA"],
				["youtube", "vk3Zy5hoy0I"],
				["vimeo", "962952035"],
			],
		},
		preaching: {
			featuredImage: featuredImages.preaching24,
			photos: "https://nvbc.org/app/nvyc/json/2024_preaching.json",
			videos: [
				["vimeo", "963639072"],
				["vimeo", "963657590"],
				["vimeo", "963650403"],
				["vimeo", "963673823"],
				["vimeo", "963670991"],
				["vimeo", "963687740"],
				["vimeo", "963714042"],
				["vimeo", "963741212"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit24,
			introVideo: ["youtube", "vk3Zy5hoy0I"],
			photos: "https://nvbc.org/app/nvyc/json/2024_skit.json",
			skitVideos: [
				["vimeo", "963586742"],
				["vimeo", "963596346"],
				["vimeo", "963619186"],
			],
			extraVideos: [["vimeo", "962952035"]],
		},
	},
	{
		year: 2023,
		setImage: featuredImages.setImage23,
		logo: featuredImages.logo23,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2023, we urged the young people that it is their time to make a firm stand for Christ. The theme "Knowing the Time," taken from Romans 13:11, highlights the importance of recognizing the urgency of the current day and the significance of making a decision to follow Christ. Experience the powerful preaching, exciting activities, and hilarious skits from this year\'s Youth Conference via photos and videos.',
		recap: {
			openingNightVideo: ["youtube", "7weBeSOXwC8"],
			recapVideo: ["vimeo", "838590428"],
			photos: "https://nvbc.org/app/nvyc/json/2023_photos.json",
			videos: null,
		},
		preaching: {
			featuredImage: featuredImages.preaching23,
			photos: "https://nvbc.org/app/nvyc/json/2023_preaching.json",
			videos: [
				["vimeo", "838028988"],
				["vimeo", "838115187"],
				["vimeo", "838191928"],
				["vimeo", "838202656"],
				["vimeo", "838427853"],
				["vimeo", "838474967"],
				["vimeo", "838554620"],
				["vimeo", "838810260"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit23,
			introVideo: ["youtube", "ZHRFwqB2D6w"],
			photos: "https://nvbc.org/app/nvyc/json/2023_skit.json",
			skitVideos: [
				["vimeo", "837807451"],
				["vimeo", "838188660"],
				["vimeo", "838548640"],
			],
			extraVideos: [
				["vimeo", "838582282"],
				["vimeo", "838567101"],
				["youtube", "CfObFhDh8aY"],
				["youtube", "E1OjzIeroBs"],
				["vimeo", "838569340"],
			],
		},
	},
	{
		year: 2022,
		setImage: featuredImages.setImage22,
		logo: featuredImages.logo22,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2022, young people were challenged to tell our world about God so that it may never be said in our nation, "Who is the Lord?"',
		recap: {
			openingNightVideo: ["youtube", "5-adStYCS5U"],
			recapVideo: ["vimeo", "723279597"],
			photos: "https://nvbc.org/app/nvyc/json/2022_photos.json",
			videos: null,
		},
		preaching: {
			featuredImage: featuredImages.preaching22,
			photos: "https://nvbc.org/app/nvyc/json/2022_preaching.json",
			videos: [
				["vimeo", "723480285"],
				["vimeo", "722840225"],
				["vimeo", "722838185"],
				["vimeo", "722838503"],
				["vimeo", "722860063"],
				["vimeo", "723242660"],
				["vimeo", "723248868"],
				["vimeo", "723239691"],
				["vimeo", "723484678"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit22,
			introVideo: ["youtube", "6NAwl8w6NV0"],
			photos: "https://nvbc.org/app/nvyc/json/2022_skit.json",
			skitVideos: [
				["vimeo", "722462500"],
				["youtube", "hWQRy9jDxPU"],
				["vimeo", "723228525"],
			],
			extraVideos: [
				["youtube", "FPe8l3xb7QI"],
				["youtube", "QIv3Zah8-3E"],
				["youtube", "Q_i4LcYNT0c"],
				["youtube", "u7QQbriXCms"],
				["vimeo", "723227116"],
			],
		},
	},
	{
		year: 2021,
		setImage: featuredImages.setImage21,
		logo: featuredImages.logo21,
		aboutThemeLong: "",
		aboutThemeShort:
			"In 2021, young people were encouraged to strive for 'The Prize' of the high calling of God in Christ Jesus.",
		recap: {
			openingNightVideo: null,
			recapVideo: ["youtube", "Fbqm2mhMAPA"],
			photos: "",
			videos: [["youtube", "hA2gpUBwoBQ"]],
		},
		preaching: {
			featuredImage: featuredImages.preaching21,
			photos: "",
			videos: [
				["youtube", "QxA8WZQHuSs"],
				["youtube", "S6FOvk43TZg"],
				["youtube", "kmeePMHLJvg"],
				["youtube", "RAZf1jPk-8Q"],
				["youtube", "OYHi593uGTo"],
				["youtube", "b104N2ok1hk"],
				["youtube", "VaPf73g2t8o"],
				["youtube", "aFMkzbgpMYU"],
			],
		},
		skit: null,
	},
	{
		year: 2020,
		setImage: undefined,
		logo: featuredImages.logo20,
		aboutThemeLong: "",
		aboutThemeShort:
			"In 2020, young people were challenged and encouraged as we hosted a Virtual Youth Conference",
		recap: null,
		preaching: {
			featuredImage: featuredImages.preaching20,
			photos: "",
			videos: [
				["vimeo", "718012182"],
				["vimeo", "718010647"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit20,
			introVideo: null,
			photos: "",
			skitVideos: [
				["vimeo", "429478762"],
				["vimeo", "429843839"],
				["vimeo", "430231567"],
				["vimeo", "430231783"],
			],
			extraVideos: null,
		},
	},
	{
		year: 2019,
		setImage: featuredImages.setImage19,
		logo: featuredImages.logo19,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2019, young people were encouraged to "Step Right Up" to the task God has given to them.',
		recap: {
			openingNightVideo: ["vimeo", "343409057"],
			recapVideo: ["vimeo", "343501837"],
			photos: "",
			videos: [
				["vimeo", "343062687"],
				["vimeo", "343175248"],
			],
		},
		preaching: {
			featuredImage: featuredImages.preaching19,
			photos: "",
			videos: [
				["vimeo", "717981321"],
				["vimeo", "717977711"],
				["vimeo", "717979360"],
				["vimeo", "717975229"],
				["vimeo", "717965613"],
				["vimeo", "717964798"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit19,
			introVideo: ["vimeo", "343173527"],
			photos: "",
			skitVideos: [
				["vimeo", "718404709"],
				["vimeo", "718405249"],
				["vimeo", "718405980"],
			],
			extraVideos: [
				["vimeo", "343408415"],
				["vimeo", "343412442"],
				["vimeo", "343409427"],
				["vimeo", "343501834"],
			],
		},
	},
	{
		year: 2018,
		setImage: featuredImages.setImage18,
		logo: featuredImages.logo18,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2018, young people were encouraged to "Rise Above" the world and accomplish something great for God.',
		recap: {
			openingNightVideo: ["vimeo", "275767135"],
			recapVideo: ["vimeo", "276296228"],
			photos: "",
			videos: [
				["vimeo", "275810450"],
				["vimeo", "275995555"],
			],
		},
		preaching: {
			featuredImage: featuredImages.preaching18,
			photos: "",
			videos: [
				["vimeo", "718069445"],
				["vimeo", "718068409"],
				["vimeo", "718065424"],
				["vimeo", "718064271"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit18,
			introVideo: ["vimeo", "275969731"],
			photos: "",
			skitVideos: [
				["vimeo", "718403545"],
				["vimeo", "718403900"],
				["vimeo", "718404292"],
			],
			extraVideos: [
				["vimeo", "276295710"],
				["youtube", "hmCmrzqawzM"],
			],
		},
	},
	{
		year: 2017,
		setImage: featuredImages.setImage17,
		logo: featuredImages.logo17,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2017, young people were encouraged to prepare for the "Journey Ahead".',
		recap: {
			openingNightVideo: ["vimeo", "720447954"],
			recapVideo: ["vimeo", "222721028"],
			photos: "",
			videos: [
				["vimeo", "222425426"],
				["vimeo", "222473450"],
				["vimeo", "222642371"],
				["vimeo", "222425579"],
				["vimeo", "222643284"],
				["vimeo", "222643198"],
				["vimeo", "222724416"],
				["vimeo", "222724630"],
			],
		},
		preaching: {
			featuredImage: featuredImages.preaching17,
			photos: "",
			videos: [
				["vimeo", "718101996"],
				["vimeo", "718101880"],
				["vimeo", "718101760"],
				["vimeo", "718101600"],
				["vimeo", "718101395"],
				["vimeo", "718101254"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit17,
			introVideo: ["vimeo", "222323151"],
			photos: "",
			skitVideos: [
				["vimeo", "717717806"],
				["vimeo", "717718549"],
				["vimeo", "718402647"],
			],
			extraVideos: [
				["vimeo", "222473451"],
				["vimeo", "222321835"],
				["vimeo", "222425298"],
				["vimeo", "222473455"],
				["vimeo", "222642368"],
				["vimeo", "222642696"],
			],
		},
	},
	{
		year: 2016,
		setImage: featuredImages.setImage16,
		logo: featuredImages.logo16,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2016, young people were challenged with the fact that "You Decide" your future.',
		recap: {
			openingNightVideo: ["youtube", "s7MaJYtu--Y"],
			recapVideo: ["vimeo", "718511698"],
			photos: "",
			videos: null,
		},
		preaching: {
			featuredImage: featuredImages.preaching16,
			photos: "",
			videos: [
				["youtube", "3rC1XXr9-Xw"],
				["youtube", "q15ywVP8egI"],
				["youtube", "kObSujXzcJg"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit16,
			introVideo: ["youtube", "IeSINfVs2po"],
			photos: "",
			skitVideos: [
				["vimeo", "717717028"],
				["vimeo", "717717281"],
				["vimeo", "717717584"],
			],
			extraVideos: [
				["youtube", "xo32Yy4mHC4"],
				["youtube", "1Ga43nWnD0A"],
			],
		},
	},
	{
		year: 2015,
		setImage: featuredImages.setImage15,
		logo: featuredImages.logo15,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2015, young people were encouraged with the fact that they are "Commissioned for the Kingdom".',
		recap: {
			openingNightVideo: ["youtube", "9K80pozOfrU"],
			recapVideo: ["vimeo", "718513282"],
			photos: "",
			videos: null,
		},
		preaching: {
			featuredImage: featuredImages.preaching15,
			photos: "",
			videos: [
				["vimeo", "718408009"],
				["vimeo", "718407795"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit15,
			introVideo: ["vimeo", "131192455"],
			photos: "",
			skitVideos: [
				["vimeo", "717716882"],
				["vimeo", "717716925"],
				["vimeo", "717716975"],
			],
			extraVideos: [["vimeo", "131194889"]],
		},
	},
	{
		year: 2014,
		setImage: featuredImages.setImage14,
		logo: featuredImages.logo14,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2014, young people were challenged to not squander their lives, but "Leave It All on the Field".',
		recap: {
			openingNightVideo: null,
			recapVideo: ["vimeo", "99391199"],
			photos: "",
			videos: null,
		},
		preaching: {
			featuredImage: featuredImages.preaching14,
			photos: "",
			videos: [
				["vimeo", "718430052"],
				["vimeo", "718438840"],
				["vimeo", "718429842"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit14,
			introVideo: ["vimeo", "99214091"],
			photos: "",
			skitVideos: [
				["vimeo", "717716665"],
				["vimeo", "717716725"],
				["vimeo", "717716815"],
			],
			extraVideos: [
				["vimeo", "99214089"],
				["vimeo", "99237912"],
				["vimeo", "99214090"],
			],
		},
	},
	{
		year: 2013,
		setImage: featuredImages.setImage13,
		logo: featuredImages.logo13,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2013, young people reminded that we should be "Fighting for the Faith".',
		recap: {
			openingNightVideo: ["vimeo", "69065506"],
			recapVideo: ["vimeo", "69266992"],
			photos: "",
			videos: null,
		},
		preaching: {
			featuredImage: featuredImages.preaching13,
			photos: "",
			videos: [
				["vimeo", "718460902"],
				["vimeo", "718461078"],
				["vimeo", "718461245"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit13,
			introVideo: ["vimeo", "69066373"],
			photos: "",
			skitVideos: [
				["vimeo", "720076926"],
				["vimeo", "720077012"],
				["vimeo", "720077073"],
			],
			extraVideos: [
				["vimeo", "70080432"],
				["youtube", "PCNJDR50B3Q"],
			],
		},
	},
	{
		year: 2012,
		setImage: featuredImages.setImage12,
		logo: featuredImages.logo12,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2012, young people were challenged to be the change and "Turn the Tide".',
		recap: {
			openingNightVideo: null,
			recapVideo: ["vimeo", "44890023"],
			photos: "",
			videos: [],
		},
		preaching: {
			featuredImage: featuredImages.preaching12,
			photos: "",
			videos: [
				["vimeo", "718475281"],
				["vimeo", "718475397"],
				["vimeo", "718475656"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit12,
			introVideo: ["vimeo", "44791377"],
			photos: "",
			skitVideos: [
				["vimeo", "717716249"],
				["vimeo", "717716388"],
				["vimeo", "717716514"],
			],
			extraVideos: [["vimeo", "44859226"]],
		},
	},
	{
		year: 2011,
		setImage: featuredImages.setImage11,
		logo: featuredImages.logo11,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2011, young people were faced with the question, "Who Will Go?".',
		recap: {
			openingNightVideo: ["vimeo", "25411276"],
			recapVideo: ["vimeo", "25695747"],
			photos: "",
			videos: null,
		},
		preaching: {
			featuredImage: featuredImages.preaching11,
			photos: "",
			videos: [
				["vimeo", "718487196"],
				["vimeo", "718487020"],
				["vimeo", "718486820"],
				["vimeo", "718486662"],
			],
		},
		skit: {
			featuredImage: featuredImages.skit11,
			introVideo: ["vimeo", "25447952"],
			photos: "",
			skitVideos: [
				["vimeo", "717716047"],
				["vimeo", "717716088"],
				["vimeo", "717716126"],
			],
			extraVideos: [["vimeo", "24749431"]],
		},
	},
	{
		year: 2010,
		setImage: undefined,
		logo: featuredImages.logo10,
		aboutThemeLong: "",
		aboutThemeShort:
			'In 2010, young people were challenged to "Get in the Game".',
		recap: null,
		preaching: null,
		skit: {
			featuredImage: featuredImages.skit10,
			introVideo: ["vimeo", "12833697"],
			photos: "",
			skitVideos: [
				["vimeo", "717713399"],
				["vimeo", "717714068"],
				["vimeo", "717714831"],
			],
			extraVideos: [
				["vimeo", "12819196"],
				["vimeo", "12818489"],
				["vimeo", "12819133"],
				["vimeo", "12836128"],
				["vimeo", "12834242"],
				["vimeo", "12834383"],
				["vimeo", "12835264"],
			],
		},
	},
];

// set the current and previous year
export const currentYear = years[0];
export const lastYear = years[1];