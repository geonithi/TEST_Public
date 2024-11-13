var size = 0;
var placement = 'point';

var style_CADASTRAL_RIFFA_ALBUHAIR_1 = function(feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;
    
    var labelFont = "13.0px 'Open Sans', sans-serif"; // Adjust font size and family
    var labelFill = "#323232"; // Text color
    var bufferColor = ""; // Buffer color if needed
    var bufferWidth = 0; // Buffer width
    var textAlign = "left"; // Text alignment
    var offsetX = 8; // X offset for text placement
    var offsetY = 3; // Y offset for text placement
    var placement = 'point'; // Placement type

    if (feature.get("Shape_Area") !== null) {
        // Get the shape area and convert to string
        let areaValue = Number(feature.get("Shape_Area"));

        // Check if the value is a valid number
        if (!isNaN(areaValue)) {
            // Append additional characters like " sqm" to the area value
            labelText = areaValue.toFixed(2) + " sqm"; // Format to two decimal places
        } else {
            labelText = "Invalid Area"; // Fallback value in case of invalid data
        }
    }

    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(35,35,35,1.0)',
            lineDash: null,
            lineCap: 'butt',
            lineJoin: 'miter',
            width: 0.988
        }),
        fill: new ol.style.Fill({
            color: 'rgba(251,154,153,1.0)'
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY) // Pass additional parameters to createTextStyle
    })];

    return style;
};

// Create text style function
function createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth, textAlign, offsetX, offsetY) {
    return new ol.style.Text({
        text: labelText,
        font: labelFont,
        fill: new ol.style.Fill({
            color: labelFill
        }),
        stroke: bufferColor ? new ol.style.Stroke({
            color: bufferColor,
            width: bufferWidth
        }) : undefined,
        textAlign: textAlign,
        offsetX: offsetX,
        offsetY: offsetY,
        placement: placement
    });
}