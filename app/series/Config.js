define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
			  id: "2952f10e036b40158686e93b11c224f5",
			  title: "2000 Presidential Election",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
			  id: "8e5eb76dde2e4986b2b7e7a0469a28ac",
			  title: "2004 Presidential Election",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{
			  id: "f6a0c17fbab748c19a771c0ec9ecc548",
			  title: "2008 Presidential Election",
				// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
				showSingleTimeInstance: false,
				// Hide legend and legend toggle for specific map by setting this option to false
				legendVisible: true,
				// Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
				openLegendOnChange: false
			},
			{  
			  id: "05b3a6df2d52484b9badb49b02a25a83",
			  title: "2012 Presidential Election",
			  	// If your map has time properties, choose to show a single time instance instead of the time interval saved with the web map.
			  	showSingleTimeInstance: false,
			    // Hide legend and legend toggle for specific map by setting this option to false
			  	legendVisible: true,
			    // Set to true if you want the legend of this specific map to open when a user selects the tab for this map.
			  	openLegendOnChange: false
			},
			{  
			  id: "2babbc617249480eb8c060d87145031c",
			  title: "2016 Presidential Election",
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
			//,{
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
			title: "Popular and Electoral Votes, 2000 - 2016",
			//Enter a subtitle, if no subtitle is specified, the first webmap's subtitle is used.
			subtitle: "Compare the popular vote count with the winner of each state in recent presidential elections.",
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
			maximumZoom: 8,

      //Social Media Configurations
		  //Include logo in header
		  includeLogo: false,
		  //Logo Image URL for header logo:
		  logoImgUrl: "resources/images/app/MapscomLogo_white.png",
		  //URL to load when logo is clicked:
		  logoClickThru: "http://education.maps.com",
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
