var wms_layers = [];

var lyr_BasemapPetaOSM_0 = new ol.layer.Tile({
  title: "Basemap Peta OSM",
  //'type': 'base',
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions: " ",
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  }),
});

var lyr_BasemapCitraSatelit_1 = new ol.layer.Tile({
  title: "Basemap Citra Satelit",
  //'type': 'base',
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions:
      ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  }),
});
var format_LabelDAS_2 = new ol.format.GeoJSON();
var features_LabelDAS_2 = format_LabelDAS_2.readFeatures(json_LabelDAS_2, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_LabelDAS_2 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_LabelDAS_2.addFeatures(features_LabelDAS_2);
var lyr_LabelDAS_2 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_LabelDAS_2,
  style: style_LabelDAS_2,
  popuplayertitle: "Label DAS",
  interactive: false,
  title: '<img src="styles/legend/LabelDAS_2.png" /> Label DAS',
});
var format_LabelKabupaten_3 = new ol.format.GeoJSON();
var features_LabelKabupaten_3 = format_LabelKabupaten_3.readFeatures(
  json_LabelKabupaten_3,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_LabelKabupaten_3 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_LabelKabupaten_3.addFeatures(features_LabelKabupaten_3);
var lyr_LabelKabupaten_3 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_LabelKabupaten_3,
  style: style_LabelKabupaten_3,
  popuplayertitle: "Label Kabupaten",
  interactive: false,
  title: '<img src="styles/legend/LabelKabupaten_3.png" /> Label Kabupaten',
});
var format_OrdeSungai_4 = new ol.format.GeoJSON();
var features_OrdeSungai_4 = format_OrdeSungai_4.readFeatures(
  json_OrdeSungai_4,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_OrdeSungai_4 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_OrdeSungai_4.addFeatures(features_OrdeSungai_4);
var lyr_OrdeSungai_4 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_OrdeSungai_4,
  style: style_OrdeSungai_4,
  popuplayertitle: "Orde Sungai",
  interactive: true,
  title:
    'Orde Sungai<br />\
    <img src="styles/legend/OrdeSungai_4_0.png" /> 1<br />\
    <img src="styles/legend/OrdeSungai_4_1.png" /> 2<br />\
    <img src="styles/legend/OrdeSungai_4_2.png" /> 3<br />\
    <img src="styles/legend/OrdeSungai_4_3.png" /> 4<br />',
});
var format_TanggulSungai_5 = new ol.format.GeoJSON();
var features_TanggulSungai_5 = format_TanggulSungai_5.readFeatures(
  json_TanggulSungai_5,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_TanggulSungai_5 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_TanggulSungai_5.addFeatures(features_TanggulSungai_5);
var lyr_TanggulSungai_5 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_TanggulSungai_5,
  style: style_TanggulSungai_5,
  popuplayertitle: "Tanggul Sungai",
  interactive: true,
  title:
    'Tanggul Sungai<br />\
    <img src="styles/legend/TanggulSungai_5_1.png" /> Parapet<br />\
    <img src="styles/legend/TanggulSungai_5_2.png" /> Tanggul Tanah<br />',
});
var format_BendungGerak_6 = new ol.format.GeoJSON();
var features_BendungGerak_6 = format_BendungGerak_6.readFeatures(
  json_BendungGerak_6,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_BendungGerak_6 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BendungGerak_6.addFeatures(features_BendungGerak_6);
var lyr_BendungGerak_6 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_BendungGerak_6,
  style: style_BendungGerak_6,
  popuplayertitle: "Bendung Gerak",
  interactive: true,
  title: '<img src="styles/legend/BendungGerak_6.png" /> Bendung Gerak',
});
var format_Bendungan_7 = new ol.format.GeoJSON();
var features_Bendungan_7 = format_Bendungan_7.readFeatures(json_Bendungan_7, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_Bendungan_7 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Bendungan_7.addFeatures(features_Bendungan_7);
var lyr_Bendungan_7 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_Bendungan_7,
  style: style_Bendungan_7,
  popuplayertitle: "Bendungan",
  interactive: true,
  title: '<img src="styles/legend/Bendungan_7.png" /> Bendungan',
});
var format_WorkshopAlatBerat_8 = new ol.format.GeoJSON();
var features_WorkshopAlatBerat_8 = format_WorkshopAlatBerat_8.readFeatures(
  json_WorkshopAlatBerat_8,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_WorkshopAlatBerat_8 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_WorkshopAlatBerat_8.addFeatures(features_WorkshopAlatBerat_8);
var lyr_WorkshopAlatBerat_8 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_WorkshopAlatBerat_8,
  style: style_WorkshopAlatBerat_8,
  popuplayertitle: "Workshop Alat Berat",
  interactive: true,
  title:
    '<img src="styles/legend/WorkshopAlatBerat_8.png" height="18" width="18"/> Workshop Alat Berat',
});
var format_RumahPompa_9 = new ol.format.GeoJSON();
var features_RumahPompa_9 = format_RumahPompa_9.readFeatures(
  json_RumahPompa_9,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_RumahPompa_9 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_RumahPompa_9.addFeatures(features_RumahPompa_9);
var lyr_RumahPompa_9 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_RumahPompa_9,
  style: style_RumahPompa_9,
  popuplayertitle: "Rumah Pompa",
  interactive: true,
  title: '<img src="styles/legend/RumahPompa_9.png" /> Rumah Pompa',
});
var format_PoskoBencana_10 = new ol.format.GeoJSON();
var features_PoskoBencana_10 = format_PoskoBencana_10.readFeatures(
  json_PoskoBencana_10,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_PoskoBencana_10 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_PoskoBencana_10.addFeatures(features_PoskoBencana_10);
var lyr_PoskoBencana_10 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_PoskoBencana_10,
  style: style_PoskoBencana_10,
  popuplayertitle: "Posko Bencana",
  interactive: true,
  title: '<img src="styles/legend/PoskoBencana_10.png" /> Posko Bencana',
});
var format_PintuAir_11 = new ol.format.GeoJSON();
var features_PintuAir_11 = format_PintuAir_11.readFeatures(json_PintuAir_11, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_PintuAir_11 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_PintuAir_11.addFeatures(features_PintuAir_11);
var lyr_PintuAir_11 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_PintuAir_11,
  style: style_PintuAir_11,
  popuplayertitle: "Pintu Air",
  interactive: true,
  title: '<img src="styles/legend/PintuAir_11.png" /> Pintu Air',
});
var format_LokasiRawanBanjir_12 = new ol.format.GeoJSON();
var features_LokasiRawanBanjir_12 = format_LokasiRawanBanjir_12.readFeatures(
  json_LokasiRawanBanjir_12,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_LokasiRawanBanjir_12 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_LokasiRawanBanjir_12.addFeatures(features_LokasiRawanBanjir_12);
var lyr_LokasiRawanBanjir_12 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_LokasiRawanBanjir_12,
  style: style_LokasiRawanBanjir_12,
  popuplayertitle: "Lokasi Rawan Banjir",
  interactive: true,
  title:
    '<img src="styles/legend/LokasiRawanBanjir_12.png" height="17" width="17" /> Lokasi Rawan Banjir',
});
var format_PosDugaAir_13 = new ol.format.GeoJSON();
var features_PosDugaAir_13 = format_PosDugaAir_13.readFeatures(
  json_PosDugaAir_13,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_PosDugaAir_13 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_PosDugaAir_13.addFeatures(features_PosDugaAir_13);
var lyr_PosDugaAir_13 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_PosDugaAir_13,
  style: style_PosDugaAir_13,
  popuplayertitle: "Pos Duga Air",
  interactive: true,
  title: '<img src="styles/legend/PosDugaAir_13.png" /> Pos Duga Air',
});
var format_PosCurahHujan_14 = new ol.format.GeoJSON();
var features_PosCurahHujan_14 = format_PosCurahHujan_14.readFeatures(
  json_PosCurahHujan_14,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_PosCurahHujan_14 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_PosCurahHujan_14.addFeatures(features_PosCurahHujan_14);
var lyr_PosCurahHujan_14 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_PosCurahHujan_14,
  style: style_PosCurahHujan_14,
  popuplayertitle: "Pos Curah Hujan",
  interactive: true,
  title: '<img src="styles/legend/PosCurahHujan_14.png" /> Pos Curah Hujan',
});
var format_PosKlimatologi_15 = new ol.format.GeoJSON();
var features_PosKlimatologi_15 = format_PosKlimatologi_15.readFeatures(
  json_PosKlimatologi_15,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_PosKlimatologi_15 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_PosKlimatologi_15.addFeatures(features_PosKlimatologi_15);
var lyr_PosKlimatologi_15 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_PosKlimatologi_15,
  style: style_PosKlimatologi_15,
  popuplayertitle: "Pos Klimatologi",
  interactive: true,
  title: '<img src="styles/legend/PosKlimatologi_15.png" /> Pos Klimatologi',
});
var format_BatasWSBengawanSolo_16 = new ol.format.GeoJSON();
var features_BatasWSBengawanSolo_16 =
  format_BatasWSBengawanSolo_16.readFeatures(json_BatasWSBengawanSolo_16, {
    dataProjection: "EPSG:4326",
    featureProjection: "EPSG:3857",
  });
var jsonSource_BatasWSBengawanSolo_16 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BatasWSBengawanSolo_16.addFeatures(features_BatasWSBengawanSolo_16);
var lyr_BatasWSBengawanSolo_16 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_BatasWSBengawanSolo_16,
  style: style_BatasWSBengawanSolo_16,
  popuplayertitle: "Batas WS Bengawan Solo",
  interactive: true,
  title:
    '<img src="styles/legend/BatasWSBengawanSolo_16.png" /> Batas WS Bengawan Solo',
});
var format_BatasKabupaten_17 = new ol.format.GeoJSON();
var features_BatasKabupaten_17 = format_BatasKabupaten_17.readFeatures(
  json_BatasKabupaten_17,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_BatasKabupaten_17 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BatasKabupaten_17.addFeatures(features_BatasKabupaten_17);
var lyr_BatasKabupaten_17 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_BatasKabupaten_17,
  style: style_BatasKabupaten_17,
  popuplayertitle: "Batas Kabupaten",
  interactive: true,
  title: '<img src="styles/legend/BatasKabupaten_17.png" /> Batas Kabupaten',
});
var format_BatasProvinsi_18 = new ol.format.GeoJSON();
var features_BatasProvinsi_18 = format_BatasProvinsi_18.readFeatures(
  json_BatasProvinsi_18,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_BatasProvinsi_18 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BatasProvinsi_18.addFeatures(features_BatasProvinsi_18);
var lyr_BatasProvinsi_18 = new ol.layer.Vector({
  declutter: false,
  source: jsonSource_BatasProvinsi_18,
  style: style_BatasProvinsi_18,
  popuplayertitle: "Batas Provinsi",
  interactive: true,
  title: '<img src="styles/legend/BatasProvinsi_18.png" /> Batas Provinsi',
});

lyr_BasemapPetaOSM_0.setVisible(true);
lyr_BasemapCitraSatelit_1.setVisible(false);
lyr_LabelDAS_2.setVisible(true);
lyr_LabelKabupaten_3.setVisible(true);
lyr_OrdeSungai_4.setVisible(true);
lyr_TanggulSungai_5.setVisible(false);
lyr_BendungGerak_6.setVisible(false);
lyr_Bendungan_7.setVisible(false);
lyr_WorkshopAlatBerat_8.setVisible(false);
lyr_RumahPompa_9.setVisible(false);
lyr_PoskoBencana_10.setVisible(true);
lyr_PintuAir_11.setVisible(false);
lyr_LokasiRawanBanjir_12.setVisible(true);
lyr_PosDugaAir_13.setVisible(false);
lyr_PosCurahHujan_14.setVisible(false);
lyr_PosKlimatologi_15.setVisible(false);
lyr_BatasWSBengawanSolo_16.setVisible(true);
lyr_BatasKabupaten_17.setVisible(true);
lyr_BatasProvinsi_18.setVisible(true);

var layersList = [
  lyr_BasemapPetaOSM_0,
  lyr_BasemapCitraSatelit_1,
  lyr_LabelDAS_2,
  lyr_LabelKabupaten_3,
  lyr_OrdeSungai_4,
  lyr_TanggulSungai_5,
  lyr_BendungGerak_6,
  lyr_Bendungan_7,
  lyr_WorkshopAlatBerat_8,
  lyr_RumahPompa_9,
  lyr_PoskoBencana_10,
  lyr_PintuAir_11,
  lyr_LokasiRawanBanjir_12,
  lyr_PosDugaAir_13,
  lyr_PosCurahHujan_14,
  lyr_PosKlimatologi_15,
  lyr_BatasWSBengawanSolo_16,
  lyr_BatasKabupaten_17,
  lyr_BatasProvinsi_18,
];
lyr_LabelDAS_2.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  KODE: "KODE",
  NAMA_DAS: "NAMA DAS",
  WS: "WS",
  Luas_km2: "Luas km2",
  Shape_Leng: "Shape Leng",
  Shape_Area: "Shape Area",
  Kode_DAS: "Kode DAS",
  Luas_Km2_1: "Luas Km2 1",
  Luas: "Luas",
});
lyr_LabelKabupaten_3.set("fieldAliases", {
  NAMOBJ: "NAMOBJ",
  FCODE: "FCODE",
  REMARK: "REMARK",
  METADATA: "METADATA",
  SRS_ID: "SRS_ID",
  KDBBPS: "KDBBPS",
  KDCBPS: "KDCBPS",
  KDCPUM: "KDCPUM",
  KDEBPS: "KDEBPS",
  KDEPUM: "KDEPUM",
  KDPBPS: "KDPBPS",
  KDPKAB: "KDPKAB",
  KDPPUM: "KDPPUM",
  LUASWH: "LUASWH",
  TIPADM: "TIPADM",
  WADMKC: "WADMKC",
  WADMKD: "WADMKD",
  WADMKK: "WADMKK",
  WADMPR: "WADMPR",
  WIADKC: "WIADKC",
  WIADKK: "WIADKK",
  WIADPR: "WIADPR",
  WIADKD: "WIADKD",
  Shape_Leng: "Shape Leng",
  Shape_Area: "Shape Area",
});
lyr_OrdeSungai_4.set("fieldAliases", {
  OBJECTID: "OBJECTID",
  Id: "Id",
  NAMA_UNSUR: "NAMA UNSUR",
  ORDE: "ORDE",
  Nama_RBI: "Nama RBI",
  Nomor: "Nomor",
  Shape_Leng: "Shape Leng",
  Panjang: "Panjang",
});
lyr_TanggulSungai_5.set("fieldAliases", {
  Jenis_Pras: "Jenis Pras",
  ID: "ID",
  Shape_Leng: "Shape Leng",
  Shape_Le_1: "Shape Le 1",
});
lyr_BendungGerak_6.set("fieldAliases", {
  Nama: "Nama Bendung",
  y: "Koordinat X",
  x: "Koordinat Y",
});
lyr_Bendungan_7.set("fieldAliases", {
  No: "No",
  Nama_Balai: "Nama_Balai",
  Nama_Bendu: "Nama Bendungan",
  Nama_DAS: "DAS",
  Nama_Sunga: "Nama Sungai",
  y: "y",
  x: "x",
  Provinsi: "Provinsi",
  Kab___Kota: "Kabupaten/Kota",
  Kec___Desa: "Kecamatan",
  Tipe_Bendu: "Tipe Bendungan",
  Irigasi__H: "Irigasi",
  Air_Baku__: "Air Baku",
  Listrik__M: "Listrik",
  Luas_Genan: "Luas Genangan",
  Efektif__j: "Tampungan Efektif (juta/m3)",
  Total__jt_: "Tampungan Total (juta/m3)",
  Elevasi_Pu: "Elevasi Puncak",
  Elevasi_Sp: "Elevasi Spillway",
  Elevasi_In: "Elevasi Intake",
  Kondisi_Fi: "Kondisi_Fi",
  Kondisi_Fu: "Kondisi_Fu",
  Nilai_AKNO: "Nilai_AKNO",
  Nilai_AK_1: "Nilai_AK_1",
  Nilai_AK_2: "Nilai_AK_2",
});
lyr_WorkshopAlatBerat_8.set("fieldAliases", {
  Nama_Lokas: "Lokasi Workshop",
  Alat_Berat: "Jenis Alat",
  y: "Koordinat Y",
  x: "Koordinat X",
});
lyr_RumahPompa_9.set("fieldAliases", {
  No: "No",
  Nama_Pompa: "Nama Pompa",
  Desa___Kel: "Desa/Kelurahan",
  Kecamatan: "Kecamatan",
  Kota_Kabup: "Kabupaten/Kota",
  Provinsi: "Provinsi",
  y: "y",
  x: "x",
  Jenis_Pomp: "Jenis Pompa",
  Tipe_Pompa: "Tipe Pompa",
  Jumlah_uni: "Jumlah Unit",
  Kapasitas_: "Kapasitas_",
  Kapasitas1: "Kapasitas",
  Kondisi: "Kondisi",
  No_BMN: "Nomor BMN",
  Pengelolaa: "Pengelolaan",
  Status_Kep: "Kepemilikan",
  Dokumentas: "Dokumentas",
});
lyr_PoskoBencana_10.set("fieldAliases", {
  nama_posko: "Nama Posko",
  y: "y",
  x: "x",
});
lyr_PintuAir_11.set("fieldAliases", {
  No: "No",
  Nama_Sunga: "Nama Sungai",
  Nama_Pintu: "Nama Pintu",
  Desa_Kelur: "Desa/Kelurahan",
  Kecamatan: "Kecamatan",
  Kota__Kabu: "Kota/Kabupaten",
  Provinsi: "Provinsi",
  LS: "LS",
  BT: "BT",
  y: "y",
  x: "x",
  PPA: "PPA",
  Pekarya: "Pekarya",
  Kode_Baran: "Kode Barang",
  Tahun_Mula: "Tahun Mula",
  Dimensi_Pi: "Dimensi Pintu",
  Jenis_Pint: "Jenis Pintu",
  Kewenangan: "Kewenangan",
});
lyr_LokasiRawanBanjir_12.set("fieldAliases", { Id: "Id" });
lyr_PosDugaAir_13.set("fieldAliases", {
  No: "No",
  X: "X",
  Y: "Y",
  Lintang: "Lintang",
  Bujur: "Bujur",
  Nama_Pos: "Nama Pos",
  Jenis: "Jenis",
  DAS: "DAS",
  Nama_Sunga: "Nama Sungai",
  Desa: "Desa",
  Kecamatan: "Kecamatan",
  Kabupaten: "Kabupaten",
  Jenis_Alat: "Jenis Alat",
});
lyr_PosCurahHujan_14.set("fieldAliases", {
  No: "No",
  X: "X",
  Y: "Y",
  Lintang: "Lintang",
  Bujur: "Bujur",
  Nama_Pos: "Nama_Pos",
  Jenis: "Jenis",
  Nama_DAS: "Nama_DAS",
  Desa: "Desa",
  Kecamatan: "Kecamatan",
  Kabupaten: "Kabupaten",
  Jenis_Alat: "Jenis_Alat",
  Kode_Pos: "Kode_Pos",
});
lyr_PosKlimatologi_15.set("fieldAliases", {
  Kode: "Kode",
  X: "X",
  Y: "Y",
  Nama: "Nama",
  Jenis: "Jenis",
  DAS: "DAS",
  Desa: "Desa",
  Kecamatan: "Kecamatan",
  Kabupaten: "Kabupaten",
  Jenis_Alat: "Jenis Alat",
  Lattitude: "Lattitude",
  Longtitude: "Longtitude",
});
lyr_BatasWSBengawanSolo_16.set("fieldAliases", {
  LEFT_FID: "LEFT_FID",
  RIGHT_FID: "RIGHT_FID",
});
lyr_BatasKabupaten_17.set("fieldAliases", {
  LEFT_FID: "LEFT_FID",
  RIGHT_FID: "RIGHT_FID",
});
lyr_BatasProvinsi_18.set("fieldAliases", {
  LEFT_FID: "LEFT_FID",
  RIGHT_FID: "RIGHT_FID",
});
lyr_LabelDAS_2.set("fieldImages", {
  OBJECTID: "TextEdit",
  KODE: "TextEdit",
  NAMA_DAS: "TextEdit",
  WS: "TextEdit",
  Luas_km2: "TextEdit",
  Shape_Leng: "TextEdit",
  Shape_Area: "RelationReference",
  Kode_DAS: "RelationReference",
  Luas_Km2_1: "TextEdit",
  Luas: "TextEdit",
});
lyr_LabelKabupaten_3.set("fieldImages", {
  NAMOBJ: "TextEdit",
  FCODE: "TextEdit",
  REMARK: "TextEdit",
  METADATA: "TextEdit",
  SRS_ID: "TextEdit",
  KDBBPS: "TextEdit",
  KDCBPS: "TextEdit",
  KDCPUM: "TextEdit",
  KDEBPS: "TextEdit",
  KDEPUM: "TextEdit",
  KDPBPS: "TextEdit",
  KDPKAB: "TextEdit",
  KDPPUM: "TextEdit",
  LUASWH: "TextEdit",
  TIPADM: "TextEdit",
  WADMKC: "TextEdit",
  WADMKD: "TextEdit",
  WADMKK: "TextEdit",
  WADMPR: "TextEdit",
  WIADKC: "TextEdit",
  WIADKK: "TextEdit",
  WIADPR: "TextEdit",
  WIADKD: "Range",
  Shape_Leng: "TextEdit",
  Shape_Area: "TextEdit",
});
lyr_OrdeSungai_4.set("fieldImages", {
  OBJECTID: "TextEdit",
  Id: "TextEdit",
  NAMA_UNSUR: "TextEdit",
  ORDE: "TextEdit",
  Nama_RBI: "TextEdit",
  Nomor: "TextEdit",
  Shape_Leng: "TextEdit",
  Panjang: "TextEdit",
});
lyr_TanggulSungai_5.set("fieldImages", {
  Jenis_Pras: "TextEdit",
  ID: "TextEdit",
  Shape_Leng: "TextEdit",
  Shape_Le_1: "TextEdit",
});
lyr_BendungGerak_6.set("fieldImages", {
  Nama: "TextEdit",
  y: "TextEdit",
  x: "TextEdit",
});
lyr_Bendungan_7.set("fieldImages", {
  No: "TextEdit",
  Nama_Balai: "TextEdit",
  Nama_Bendu: "TextEdit",
  Nama_DAS: "TextEdit",
  Nama_Sunga: "TextEdit",
  y: "TextEdit",
  x: "TextEdit",
  Provinsi: "TextEdit",
  Kab___Kota: "TextEdit",
  Kec___Desa: "TextEdit",
  Tipe_Bendu: "TextEdit",
  Irigasi__H: "TextEdit",
  Air_Baku__: "TextEdit",
  Listrik__M: "TextEdit",
  Luas_Genan: "TextEdit",
  Efektif__j: "TextEdit",
  Total__jt_: "TextEdit",
  Elevasi_Pu: "TextEdit",
  Elevasi_Sp: "TextEdit",
  Elevasi_In: "TextEdit",
  Kondisi_Fi: "TextEdit",
  Kondisi_Fu: "TextEdit",
  Nilai_AKNO: "TextEdit",
  Nilai_AK_1: "TextEdit",
  Nilai_AK_2: "TextEdit",
});
lyr_WorkshopAlatBerat_8.set("fieldImages", {
  Nama_Lokas: "TextEdit",
  Alat_Berat: "TextEdit",
  y: "TextEdit",
  x: "TextEdit",
});
lyr_RumahPompa_9.set("fieldImages", {
  No: "TextEdit",
  Nama_Pompa: "TextEdit",
  Desa___Kel: "TextEdit",
  Kecamatan: "TextEdit",
  Kota_Kabup: "TextEdit",
  Provinsi: "TextEdit",
  y: "TextEdit",
  x: "TextEdit",
  Jenis_Pomp: "TextEdit",
  Tipe_Pompa: "TextEdit",
  Jumlah_uni: "TextEdit",
  Kapasitas_: "TextEdit",
  Kapasitas1: "TextEdit",
  Kondisi: "TextEdit",
  No_BMN: "TextEdit",
  Pengelolaa: "TextEdit",
  Status_Kep: "TextEdit",
  Dokumentas: "TextEdit",
});
lyr_PoskoBencana_10.set("fieldImages", {
  nama_posko: "TextEdit",
  y: "TextEdit",
  x: "TextEdit",
});
lyr_PintuAir_11.set("fieldImages", {
  No: "TextEdit",
  Nama_Sunga: "TextEdit",
  Nama_Pintu: "TextEdit",
  Desa_Kelur: "TextEdit",
  Kecamatan: "TextEdit",
  Kota__Kabu: "TextEdit",
  Provinsi: "TextEdit",
  LS: "TextEdit",
  BT: "TextEdit",
  y: "TextEdit",
  x: "TextEdit",
  PPA: "TextEdit",
  Pekarya: "TextEdit",
  Kode_Baran: "TextEdit",
  Tahun_Mula: "TextEdit",
  Dimensi_Pi: "TextEdit",
  Jenis_Pint: "TextEdit",
  Kewenangan: "TextEdit",
});
lyr_LokasiRawanBanjir_12.set("fieldImages", { Id: "Range" });
lyr_PosDugaAir_13.set("fieldImages", {
  No: "TextEdit",
  X: "TextEdit",
  Y: "TextEdit",
  Lintang: "TextEdit",
  Bujur: "TextEdit",
  Nama_Pos: "TextEdit",
  Jenis: "TextEdit",
  DAS: "TextEdit",
  Nama_Sunga: "TextEdit",
  Desa: "TextEdit",
  Kecamatan: "TextEdit",
  Kabupaten: "TextEdit",
  Jenis_Alat: "TextEdit",
});
lyr_PosCurahHujan_14.set("fieldImages", {
  No: "TextEdit",
  X: "TextEdit",
  Y: "TextEdit",
  Lintang: "TextEdit",
  Bujur: "TextEdit",
  Nama_Pos: "TextEdit",
  Jenis: "TextEdit",
  Nama_DAS: "TextEdit",
  Desa: "TextEdit",
  Kecamatan: "TextEdit",
  Kabupaten: "TextEdit",
  Jenis_Alat: "TextEdit",
  Kode_Pos: "TextEdit",
});
lyr_PosKlimatologi_15.set("fieldImages", {
  Kode: "Hidden",
  X: "Hidden",
  Y: "Hidden",
  Nama: "TextEdit",
  Jenis: "TextEdit",
  DAS: "Hidden",
  Desa: "TextEdit",
  Kecamatan: "TextEdit",
  Kabupaten: "TextEdit",
  Jenis_Alat: "TextEdit",
  Lattitude: "Hidden",
  Longtitude: "Hidden",
});
lyr_BatasWSBengawanSolo_16.set("fieldImages", {
  LEFT_FID: "TextEdit",
  RIGHT_FID: "TextEdit",
});
lyr_BatasKabupaten_17.set("fieldImages", {
  LEFT_FID: "TextEdit",
  RIGHT_FID: "TextEdit",
});
lyr_BatasProvinsi_18.set("fieldImages", {
  LEFT_FID: "TextEdit",
  RIGHT_FID: "TextEdit",
});
lyr_LabelDAS_2.set("fieldLabels", {
  OBJECTID: "hidden field",
  KODE: "hidden field",
  NAMA_DAS: "no label",
  WS: "no label",
  Luas_km2: "no label",
  Shape_Leng: "no label",
  Shape_Area: "no label",
  Kode_DAS: "no label",
  Luas_Km2_1: "no label",
  Luas: "no label",
});
lyr_LabelKabupaten_3.set("fieldLabels", {
  NAMOBJ: "hidden field",
  FCODE: "hidden field",
  REMARK: "hidden field",
  METADATA: "hidden field",
  SRS_ID: "hidden field",
  KDBBPS: "inline label - visible with data",
  KDCBPS: "inline label - visible with data",
  KDCPUM: "hidden field",
  KDEBPS: "inline label - visible with data",
  KDEPUM: "inline label - visible with data",
  KDPBPS: "hidden field",
  KDPKAB: "hidden field",
  KDPPUM: "hidden field",
  LUASWH: "inline label - visible with data",
  TIPADM: "hidden field",
  WADMKC: "inline label - visible with data",
  WADMKD: "hidden field",
  WADMKK: "hidden field",
  WADMPR: "hidden field",
  WIADKC: "hidden field",
  WIADKK: "hidden field",
  WIADPR: "hidden field",
  WIADKD: "hidden field",
  Shape_Leng: "inline label - visible with data",
  Shape_Area: "hidden field",
});
lyr_OrdeSungai_4.set("fieldLabels", {
  OBJECTID: "hidden field",
  Id: "hidden field",
  NAMA_UNSUR: "hidden field",
  ORDE: "inline label - always visible",
  Nama_RBI: "inline label - always visible",
  Nomor: "hidden field",
  Shape_Leng: "hidden field",
  Panjang: "inline label - always visible",
});
lyr_TanggulSungai_5.set("fieldLabels", {
  Jenis_Pras: "inline label - always visible",
  ID: "hidden field",
  Shape_Leng: "hidden field",
  Shape_Le_1: "hidden field",
});
lyr_BendungGerak_6.set("fieldLabels", {
  Nama: "inline label - always visible",
  y: "hidden field",
  x: "hidden field",
});
lyr_Bendungan_7.set("fieldLabels", {
  No: "hidden field",
  Nama_Balai: "hidden field",
  Nama_Bendu: "inline label - visible with data",
  Nama_DAS: "inline label - always visible",
  Nama_Sunga: "inline label - always visible",
  y: "hidden field",
  x: "hidden field",
  Provinsi: "inline label - always visible",
  Kab___Kota: "inline label - always visible",
  Kec___Desa: "inline label - always visible",
  Tipe_Bendu: "inline label - always visible",
  Irigasi__H: "inline label - always visible",
  Air_Baku__: "inline label - always visible",
  Listrik__M: "inline label - always visible",
  Luas_Genan: "inline label - always visible",
  Efektif__j: "inline label - always visible",
  Total__jt_: "inline label - always visible",
  Elevasi_Pu: "inline label - always visible",
  Elevasi_Sp: "inline label - always visible",
  Elevasi_In: "inline label - always visible",
  Kondisi_Fi: "hidden field",
  Kondisi_Fu: "hidden field",
  Nilai_AKNO: "hidden field",
  Nilai_AK_1: "hidden field",
  Nilai_AK_2: "hidden field",
});
lyr_WorkshopAlatBerat_8.set("fieldLabels", {
  Nama_Lokas: "inline label - always visible",
  Alat_Berat: "inline label - always visible",
  y: "inline label - always visible",
  x: "inline label - always visible",
});
lyr_RumahPompa_9.set("fieldLabels", {
  No: "hidden field",
  Nama_Pompa: "inline label - always visible",
  Desa___Kel: "inline label - always visible",
  Kecamatan: "inline label - always visible",
  Kota_Kabup: "inline label - always visible",
  Provinsi: "inline label - always visible",
  y: "hidden field",
  x: "hidden field",
  Jenis_Pomp: "inline label - always visible",
  Tipe_Pompa: "inline label - always visible",
  Jumlah_uni: "inline label - always visible",
  Kapasitas_: "hidden field",
  Kapasitas1: "inline label - always visible",
  Kondisi: "inline label - always visible",
  No_BMN: "inline label - always visible",
  Pengelolaa: "inline label - always visible",
  Status_Kep: "inline label - always visible",
  Dokumentas: "hidden field",
});
lyr_PoskoBencana_10.set("fieldLabels", {
  nama_posko: "inline label - always visible",
  y: "hidden field",
  x: "hidden field",
});
lyr_PintuAir_11.set("fieldLabels", {
  No: "hidden field",
  Nama_Sunga: "inline label - always visible",
  Nama_Pintu: "inline label - always visible",
  Desa_Kelur: "inline label - always visible",
  Kecamatan: "inline label - always visible",
  Kota__Kabu: "inline label - always visible",
  Provinsi: "inline label - always visible",
  LS: "inline label - always visible",
  BT: "inline label - always visible",
  y: "hidden field",
  x: "hidden field",
  PPA: "inline label - always visible",
  Pekarya: "inline label - always visible",
  Kode_Baran: "inline label - always visible",
  Tahun_Mula: "inline label - always visible",
  Dimensi_Pi: "inline label - always visible",
  Jenis_Pint: "inline label - always visible",
  Kewenangan: "hidden field",
});
lyr_LokasiRawanBanjir_12.set("fieldLabels", { Id: "hidden field" });
lyr_PosDugaAir_13.set("fieldLabels", {
  No: "hidden field",
  X: "hidden field",
  Y: "hidden field",
  Lintang: "hidden field",
  Bujur: "hidden field",
  Nama_Pos: "inline label - always visible",
  Jenis: "inline label - always visible",
  DAS: "inline label - always visible",
  Nama_Sunga: "inline label - always visible",
  Desa: "inline label - always visible",
  Kecamatan: "inline label - always visible",
  Kabupaten: "inline label - always visible",
  Jenis_Alat: "inline label - always visible",
});
lyr_PosCurahHujan_14.set("fieldLabels", {
  No: "hidden field",
  X: "hidden field",
  Y: "inline label - visible with data",
  Lintang: "inline label - visible with data",
  Bujur: "hidden field",
  Nama_Pos: "inline label - always visible",
  Jenis: "inline label - always visible",
  Nama_DAS: "inline label - always visible",
  Desa: "inline label - always visible",
  Kecamatan: "inline label - always visible",
  Kabupaten: "inline label - always visible",
  Jenis_Alat: "inline label - always visible",
  Kode_Pos: "hidden field",
});
lyr_PosKlimatologi_15.set("fieldLabels", {
  Nama: "inline label - always visible",
  Jenis: "inline label - always visible",
  Desa: "inline label - always visible",
  Kecamatan: "inline label - always visible",
  Kabupaten: "inline label - always visible",
  Jenis_Alat: "inline label - always visible",
});
lyr_BatasWSBengawanSolo_16.set("fieldLabels", {
  LEFT_FID: "hidden field",
  RIGHT_FID: "hidden field",
});
lyr_BatasKabupaten_17.set("fieldLabels", {
  LEFT_FID: "hidden field",
  RIGHT_FID: "hidden field",
});
lyr_BatasProvinsi_18.set("fieldLabels", {
  LEFT_FID: "hidden field",
  RIGHT_FID: "hidden field",
});
lyr_BatasProvinsi_18.on("precompose", function (evt) {
  evt.context.globalCompositeOperation = "normal";
});
