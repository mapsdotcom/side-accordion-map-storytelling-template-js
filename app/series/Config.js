define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
			  id: "e781aee5c3bf4d88be204fffa8cf38da",
			  title: "Total 2016 Presidential Campaign Contributions",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},{
			  id: "00c1854af9564cdcb1b5829970460b0f",
			  title: "Contributions to Clinton",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
			  id: "be337b5848384a8e8202011787e61e5a",
				title: "Contributions to Trump",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			}
			// To add additional maps to the template, uncomment the below section for
			// each map you would like to add. Webmap titles from ArcGIS Online will
			// be used unless you fill in title attribute.
			//, {
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false,
			//  // Hide legend and legend toggle for specific map by setting this option to false
			//	legendVisible: true,
			//  // Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
			//	openLegendOnChange: false
			//	},{
			//
			//	id: "739db23c3f674005a405c68e337f5011",
			//	title: "",
			//	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			//	showSingleTimeInstance: false,
			//  // Hide legend and legend toggle for specific map by setting this option to false
			//	legendVisible: true,
			//  // Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
			//	openLegendOnChange: false
			//	}
			],
			//Enter a title, if no title is specified, the first webmap's title is used.
			title: "2016 Presidential Campaign Contributions",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "",
			// If false, each tab will have a number on it. If true, the first tab will not have a number and the second tab will start counting at 1.
			startCountOnSecondTab: false,
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: false,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "https://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "https://www.arcgis.com/sharing/rest/content/items",
		  //Maximum zoom level allowed in the storymap (0 - 20)
			maximumZoom: 8,

      //Social Media Configurations
		  //Include logo in header
		  includeLogo: false,
		  //Logo Image URL for header logo:
		  logoImgUrl: "resources/images/app/MapscomLogo_white.png",
		  //URL to load when logo is clicked:
		  logoClickThru: "https://education.maps.com",
		  //Include Social Media Links in header:
		  includeSocialMedia: false,
		  //Some text to precede the social media links:
		  socialText: "",
		  //Social Text click-thru URL - URL to load when the Social text is clicked:
		  socialLink: "",
		  //ShareThis Publisher ID:
		  shareThisPubId: "",
		  //ShareThis Twitter Handle - When map is shared via twitter, what Twitter handle should be cited:
		  twitterViaHandle: "Mapsdotcom",

		  //Pop-up Configurations
		  //Specify a custom popup width (in pixels) to override application default (min:0,max:1000):
		  popupWidth: undefined,
		  //Specify a maximum popup height (in pixels) to override application default (min:0,max:1000). Only used if popupWidth is specified
		  popupMaxHeight: undefined,
		  //Include 'Zoom out' link button in popups:
		  popupIncludeZoomOutLink: true
		}
	}
);
