var site_config = {
    /* Mapbox Access Token */
    accessToken: 'pk.eyJ1IjoiZ2VtdGVhbTEiLCJhIjoiY2xtbm90dThtMDB2azJrbnhuZ2JhbGZ4NCJ9.eBYvRjhtNJYgZDXQymTmlQ',

    /* Mapbox Base Map Style */
    mapStyle: 'mapbox://styles/gemteam1/cls98k6sf02li01p2fqtu67lc',
    //'mapbox://styles/gemteam1/clmi71nwz03zm01qr7l04gcu2',

    /* Zoom level that asset detail cards open at; this is a good one to override in tracker config,
     depending on scale of facilities */

    img_detail_zoom: 15,

    /* Define labels for sitewide colors, referenced in tracker config */
    colors: {
        'red': '#c74a48',
        'blue': '#5c62cf',
        'green': '#4c9d4f',
        'grey': '#8f8f8e'
    },

    /* Mapbox styling applied to all trackers */
    paint: {
        'circle-opacity':.85
    },

    /* radius associated with minimum/maximum value on map */
    minRadius: 2,
    maxRadius: 10,

    /* radius to increase min/max to under high zoom */
    highZoomMinRadius: 4,
    highZoomMaxRadius: 32,

    /* define column names to pull data from */
    linkField: 'url',
    countryField: 'country',
    statusField: 'status',
    capacityField: 'capacity',
    locationColumns:{
        lat: 'lat',
        lng: 'lng'
    },

    /* by default, no all phases link; override in tracker config where appropriate */
    showAllPhases: false,

    /* zoom level to set map when viewing all phases */
    phasesZoom: 8,

    /* initial load zoom multiplier */
    zoomFactor: 1.25
};
