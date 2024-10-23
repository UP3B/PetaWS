var size = 0;
var placement = "point";

var style_LabelDAS_2 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };
  var value = "";
  var labelText = "";
  size = 0;
  var labelFont = "bold italic 12px 'Roboto', sans-serif";
  var labelFill = "#000";
  var bufferColor = "#FFF";
  var bufferWidth = 1;
  var textAlign = "left";
  var offsetX = 8;
  var offsetY = 3;
  var placement = "point";
  if (feature.get("NAMA_DAS") !== null) {
    labelText = String(feature.get("NAMA_DAS"));
  }
  var style = [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(35,35,35,0.0)",
        lineDash: null,
        lineCap: "butt",
        lineJoin: "miter",
        width: 0.988,
      }),
      fill: new ol.style.Fill({ color: "rgba(125,139,143,0.0)" }),
      text: createTextStyle(
        feature,
        resolution,
        labelText,
        labelFont,
        labelFill,
        placement,
        bufferColor,
        bufferWidth
      ),
    }),
  ];

  return style;
};
