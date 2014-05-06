{
  "configurationSettings":[{
    "category": "<b>Application Settings</b>",
    "fields": [{
      "type": "string",
      "fieldName": "title",
      "tooltip": "Specify a title for the application",
      "placeHolder": "Title",
      "label": "Title:"
    },{
      "type": "string",
      "fieldName": "subtitle",
      "tooltip": "Specify a subtitle for the application",
      "placeHolder": "Subtitle",
      "label": "Subtitle:"
    },{
      "type": "number",
      "fieldName": "maximumZoom",
      "tooltip": "Specify the highest zoom level allowed (0 - 20)",
      "label": "Maximum Zoom:",
      "constraints" :{min:0,max:20,places:0}
    },{
      "type": "boolean",
      "fieldName": "includeLogo",
      "label": "Include Logo",
      "tooltip": ""
    },{
      "type": "string",
      "fieldName": "logoImgUrl",
      "tooltip": "Specify the image URL to the logo image",
      "placeHolder": "",
      "label": "Logo Image URL:"
    },{
      "type": "string",
      "fieldName": "logoClickThru",
      "tooltip": "Specify a URL to load when the logo image is clicked",
      "placeHolder": "",
      "label": "URL to load when logo is clicked:"
    },{
      "type": "boolean",
      "fieldName": "includeSocialMedia",
      "label": "Include Social Media Links in header",
      "tooltip": ""
    },{
      "type": "string",
      "fieldName": "socialText",
      "tooltip": "Some text to precede the social media links",
      "placeHolder": "",
      "label": "Social Text:"
    },{
      "type": "string",
      "fieldName": "socialLink",
      "tooltip": "Specify a URL to load when the Social text is clicked",
      "placeHolder": "",
      "label": "Social Text click-thru URL:"
    },{
      "type": "string",
      "fieldName": "shareThisPubId",
      "tooltip": "Specify a ShareThis Publisher ID if social media links are used",
      "placeHolder": "",
      "label": "ShareThis Publisher ID:"
    },{
      "type": "string",
      "fieldName": "twitterViaHandle",
      "tooltip": "When map is shared via twitter, what Twitter handle should be cited",
      "placeHolder": "",
      "label": "ShareThis Twitter Handle:"
    }]
  },{
    "category": "<b>Pop-ups</b>",
    "fields": [{
      "type": "number",
      "fieldName": "popupWidth",
      "tooltip": "Specify a custom popup width (in pixels) to override application default",
      "label": "Popup Width:",
      "constraints" :{min:0,max:1000,places:0}
    },{
      "type": "number",
      "fieldName": "popupMaxHeight",
      "tooltip": "Specify a maximum popup height (in pixels) to override application default",
      "label": "Maximum Popup Height:",
      "constraints" :{min:0,max:1000,places:0}
    },{
      "type": "boolean",
      "fieldName": "popupIncludeZoomOutLink",
      "label": "Include 'Zoom out' link button in popups",
      "tooltip": ""
    }]
  },{
    "category": "<b>Webmaps</b>",
    "fields": [{
      "fieldName": "webmap",
      "label": "Webmap IDs:",
      "stringFieldOption": "textarea",
      "tooltip": "Enter web map ids for maps separated by commas"
    },{
      "type": "paragraph",
      "value": "Enter webmap ID's separated with a comma. The ID can be found in the URL when looking at the details page of a web map."
    },{
      "type": "string",
      "fieldName": "mapTitle",
      "label": "Map Titles:",
      "stringFieldOption": "textarea",
      "tooltip": "Enter labels for tabs separated by commas"
    },{
      "type": "paragraph",
      "value": "Enter the labels to be displayed on accodion, separated with a comma. The order of the labels must be in the same order as the webmaps ID's above that they are associated with."
    },{
      "type": "boolean",
      "fieldName": "syncMaps",
      "label": "Sync scale and location of maps",
      "tooltip": ""
    }]
  }],
    "values":{
      "popupIncludeZoomOutLink": false,
      "includeLogo": false,
      "includeSocialMedia": false
    }
}