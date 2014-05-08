define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
			  id: "796c5f4a9a004ae0b12ad168bb14a3fa",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},{
			  id: "0d83578f2aef4b8e9af218a6a0702c75",
				title: "",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
			  id: "06548aaf9c34460dbe4e35f3758f23b3",
				title: "",
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
			title: "Levels of Freedom in the World",
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
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//If the webmap uses Bing Maps data, you will need to provided your Bing Maps Key
			bingmapskey : "",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items",
		  //Maximum zoom level allowed in the storymap (0 - 20)
			maximumZoom: 6,

      //Social Media Configurations
		  //Include logo in header
		  includeLogo: false,
		  //Logo Image URL for header logo:
		  logoImgUrl: "resources/images/app/MapscomLogo.png",
		  //URL to load when logo is clicked:
		  logoClickThru: "http://www.maps.com",
		  //Include Social Media Links in header:
		  includeSocialMedia: false,
		  //Some text to precede the social media links:
		  socialText: "",
		  //Social Text click-thru URL - URL to load when the Social text is clicked:
		  socialLink: "",
		  //ShareThis Publisher ID:
		  shareThisPubId: "",
		  //ShareThis Twitter Handle - When map is shared via twitter, what Twitter handle should be cited:
		  twitterViaHandle: "",

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
