var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VV_DIAG_LINEAIRE_1 = new ol.format.GeoJSON();
var features_VV_DIAG_LINEAIRE_1 = format_VV_DIAG_LINEAIRE_1.readFeatures(json_VV_DIAG_LINEAIRE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VV_DIAG_LINEAIRE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VV_DIAG_LINEAIRE_1.addFeatures(features_VV_DIAG_LINEAIRE_1);
var lyr_VV_DIAG_LINEAIRE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VV_DIAG_LINEAIRE_1, 
                style: style_VV_DIAG_LINEAIRE_1,
                interactive: true,
    title: 'VV_DIAG_LINEAIRE<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_0.png" /> ANTENNE BIZIAT<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_1.png" /> ANTENNE BL CORMORANCHE<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_2.png" /> ANTENNE COMPLEXE SPORTIF LAIZ<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_3.png" /> ANTENNE ESCALE<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_4.png" /> ANTENNE GARE PONT-DE-VEYLE<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_5.png" /> ANTENNE GARE VONNAS<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_6.png" /> ANTENNE GYMNASE<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_7.png" /> ANTENNE LAIZ<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_8.png" /> ANTENNE ZA<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_9.png" /> V50<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_10.png" /> VARIANTE NON RETENUE<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_11.png" /> variante ST-JEAN - CORSANT<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_12.png" /> variante VONNAS - BEZEMEME<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_13.png" /> variante VONNAS - MEZERIAT<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_14.png" /> VOIE VEYLE<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_15.png" /> VOIE VEYLE variante<br />\
    <img src="styles/legend/VV_DIAG_LINEAIRE_1_16.png" /> <br />'
        });
var format_POINTKILOMETRIQUE_2 = new ol.format.GeoJSON();
var features_POINTKILOMETRIQUE_2 = format_POINTKILOMETRIQUE_2.readFeatures(json_POINTKILOMETRIQUE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTKILOMETRIQUE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTKILOMETRIQUE_2.addFeatures(features_POINTKILOMETRIQUE_2);
var lyr_POINTKILOMETRIQUE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POINTKILOMETRIQUE_2, 
                style: style_POINTKILOMETRIQUE_2,
                interactive: true,
                title: '<img src="styles/legend/POINTKILOMETRIQUE_2.png" /> POINTKILOMETRIQUE'
            });
var format_VV_DIAG_PTS_DURS_3 = new ol.format.GeoJSON();
var features_VV_DIAG_PTS_DURS_3 = format_VV_DIAG_PTS_DURS_3.readFeatures(json_VV_DIAG_PTS_DURS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VV_DIAG_PTS_DURS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VV_DIAG_PTS_DURS_3.addFeatures(features_VV_DIAG_PTS_DURS_3);
var lyr_VV_DIAG_PTS_DURS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VV_DIAG_PTS_DURS_3, 
                style: style_VV_DIAG_PTS_DURS_3,
                interactive: true,
                title: '<img src="styles/legend/VV_DIAG_PTS_DURS_3.png" /> VV_DIAG_PTS_DURS'
            });
var format_POLES_COMMUNES_4 = new ol.format.GeoJSON();
var features_POLES_COMMUNES_4 = format_POLES_COMMUNES_4.readFeatures(json_POLES_COMMUNES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLES_COMMUNES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLES_COMMUNES_4.addFeatures(features_POLES_COMMUNES_4);
var lyr_POLES_COMMUNES_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLES_COMMUNES_4, 
                style: style_POLES_COMMUNES_4,
                interactive: true,
                title: '<img src="styles/legend/POLES_COMMUNES_4.png" /> POLES_COMMUNES'
            });
var format_POLES_EQUIPTS_STRUCT_5 = new ol.format.GeoJSON();
var features_POLES_EQUIPTS_STRUCT_5 = format_POLES_EQUIPTS_STRUCT_5.readFeatures(json_POLES_EQUIPTS_STRUCT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLES_EQUIPTS_STRUCT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLES_EQUIPTS_STRUCT_5.addFeatures(features_POLES_EQUIPTS_STRUCT_5);
var lyr_POLES_EQUIPTS_STRUCT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLES_EQUIPTS_STRUCT_5, 
                style: style_POLES_EQUIPTS_STRUCT_5,
                interactive: true,
    title: 'POLES_EQUIPTS_STRUCT<br />\
    <img src="styles/legend/POLES_EQUIPTS_STRUCT_5_0.png" /> ACTIVITE ECONOMIQUE<br />\
    <img src="styles/legend/POLES_EQUIPTS_STRUCT_5_1.png" /> EQUIPEMENT SPORT ET LOISIRS<br />\
    <img src="styles/legend/POLES_EQUIPTS_STRUCT_5_2.png" /> ETABLISSEMENT SCOLAIRE<br />\
    <img src="styles/legend/POLES_EQUIPTS_STRUCT_5_3.png" /> GARE SNCF<br />\
    <img src="styles/legend/POLES_EQUIPTS_STRUCT_5_4.png" /> HEBERGEMENT<br />\
    <img src="styles/legend/POLES_EQUIPTS_STRUCT_5_5.png" /> SITE & PATRIMOINE<br />\
    <img src="styles/legend/POLES_EQUIPTS_STRUCT_5_6.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_VV_DIAG_LINEAIRE_1.setVisible(true);lyr_POINTKILOMETRIQUE_2.setVisible(true);lyr_VV_DIAG_PTS_DURS_3.setVisible(false);lyr_POLES_COMMUNES_4.setVisible(false);lyr_POLES_EQUIPTS_STRUCT_5.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_VV_DIAG_LINEAIRE_1,lyr_POINTKILOMETRIQUE_2,lyr_VV_DIAG_PTS_DURS_3,lyr_POLES_COMMUNES_4,lyr_POLES_EQUIPTS_STRUCT_5];
lyr_VV_DIAG_LINEAIRE_1.set('fieldAliases', {'ID': 'ID', 'COMMUNE': 'COMMUNE', 'AXE': 'AXE', 'SECTION': 'SECTION', 'NAT_EXIST': 'NAT_EXIST', 'PRATICABIL': 'PRATICABIL', 'REVETEMENT': 'REVETEMENT', 'Largeur': 'Largeur', 'LINEAIREml': 'LINEAIREml', 'PHOTO': 'PHOTO', 'COMMENTAIR': 'COMMENTAIR', 'FONCIER': 'FONCIER', 'NAT_ACCOT1': 'NAT_ACCOT1', 'LARGEUR1': 'LARGEUR1', 'NAT_ACCOT2': 'NAT_ACCOT2', 'LARGEUR2': 'LARGEUR2', });
lyr_POINTKILOMETRIQUE_2.set('fieldAliases', {'fid': 'fid', 'LONGUEUR': 'LONGUEUR', });
lyr_VV_DIAG_PTS_DURS_3.set('fieldAliases', {'ID': 'ID', 'COMMUNE': 'COMMUNE', 'AXE': 'AXE', 'SECTION': 'SECTION', 'NAT_EXIST': 'NAT_EXIST', 'PRATICABIL': 'PRATICABIL', 'REVETEMENT': 'REVETEMENT', 'LARGEUR': 'LARGEUR', 'LINEAIREml': 'LINEAIREml', 'PHOTO': 'PHOTO', 'COMMENTAIR': 'COMMENTAIR', });
lyr_POLES_COMMUNES_4.set('fieldAliases', {'COMMUNE': 'COMMUNE', });
lyr_POLES_EQUIPTS_STRUCT_5.set('fieldAliases', {'POLE': 'POLE', 'TYPE': 'TYPE', });
lyr_VV_DIAG_LINEAIRE_1.set('fieldImages', {'ID': 'TextEdit', 'COMMUNE': 'TextEdit', 'AXE': 'TextEdit', 'SECTION': 'TextEdit', 'NAT_EXIST': 'TextEdit', 'PRATICABIL': 'TextEdit', 'REVETEMENT': 'TextEdit', 'Largeur': 'TextEdit', 'LINEAIREml': 'Range', 'PHOTO': 'TextEdit', 'COMMENTAIR': 'TextEdit', 'FONCIER': 'TextEdit', 'NAT_ACCOT1': '', 'LARGEUR1': '', 'NAT_ACCOT2': '', 'LARGEUR2': '', });
lyr_POINTKILOMETRIQUE_2.set('fieldImages', {'fid': 'TextEdit', 'LONGUEUR': 'TextEdit', });
lyr_VV_DIAG_PTS_DURS_3.set('fieldImages', {'ID': 'TextEdit', 'COMMUNE': 'TextEdit', 'AXE': 'TextEdit', 'SECTION': 'TextEdit', 'NAT_EXIST': 'TextEdit', 'PRATICABIL': 'TextEdit', 'REVETEMENT': 'TextEdit', 'LARGEUR': 'TextEdit', 'LINEAIREml': 'Range', 'PHOTO': 'TextEdit', 'COMMENTAIR': 'TextEdit', });
lyr_POLES_COMMUNES_4.set('fieldImages', {'COMMUNE': 'TextEdit', });
lyr_POLES_EQUIPTS_STRUCT_5.set('fieldImages', {'POLE': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_VV_DIAG_LINEAIRE_1.set('fieldLabels', {'ID': 'inline label', 'COMMUNE': 'inline label', 'AXE': 'inline label', 'SECTION': 'inline label', 'NAT_EXIST': 'inline label', 'PRATICABIL': 'inline label', 'REVETEMENT': 'inline label', 'Largeur': 'inline label', 'LINEAIREml': 'inline label', 'PHOTO': 'inline label', 'COMMENTAIR': 'inline label', 'FONCIER': 'inline label', 'NAT_ACCOT1': 'inline label', 'LARGEUR1': 'inline label', 'NAT_ACCOT2': 'inline label', 'LARGEUR2': 'inline label', });
lyr_POINTKILOMETRIQUE_2.set('fieldLabels', {'fid': 'no label', 'LONGUEUR': 'inline label', });
lyr_VV_DIAG_PTS_DURS_3.set('fieldLabels', {'ID': 'inline label', 'COMMUNE': 'inline label', 'AXE': 'inline label', 'SECTION': 'inline label', 'NAT_EXIST': 'inline label', 'PRATICABIL': 'inline label', 'REVETEMENT': 'inline label', 'LARGEUR': 'inline label', 'LINEAIREml': 'inline label', 'PHOTO': 'inline label', 'COMMENTAIR': 'inline label', });
lyr_POLES_COMMUNES_4.set('fieldLabels', {'COMMUNE': 'inline label', });
lyr_POLES_EQUIPTS_STRUCT_5.set('fieldLabels', {'POLE': 'inline label', 'TYPE': 'inline label', });
lyr_POLES_EQUIPTS_STRUCT_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});