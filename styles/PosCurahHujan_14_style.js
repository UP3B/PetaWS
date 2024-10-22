var size = 0;
var placement = 'point';

var style_PosCurahHujan_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Roboto\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#1853c9";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Nama_Pos") !== null) {
        labelText = String(feature.get("Nama_Pos"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [64, 64],
                  scale: 0.296875,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/PCH.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
