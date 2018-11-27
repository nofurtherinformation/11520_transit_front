var data_source;
var demo_val = $('#demo_select').val();

var m = L.map('map').setView([33.7807712, -84.4285066], 15);

var info = L.control();
var legend = L.control({position: 'bottomright'});

var grades_dict = {
    "theil_T": [null, -0.0000015976, -0.0000008184, -0.0000001008, 0.0000010912, 0.0000032648, 0.0000074440, 0.0000603631],
    "median_inc": [null, 34018.86, 43871.86, 54229.29, 65186.43, 78525.86, 102263.43, 250001.00],
    "pc_white": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_black": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_am_in": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_n_HI": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_asian": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_other": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_2_o_more": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_latino": [null, .14, .29, .43, .57, .71, .86, 1],
    "pc_vulnerable": [null, .02, .06, .12, .20, .31, .46, .74]
};

var grades = grades_dict[demo_val];

var labels_dict = {
    "theil_T": ['No Data', '-1.6E-6 to -8.2E-7', '-8.2E-7 to -1.0E-7', '-1.0E-7 to 1.1E-6', '1.1E-6 to 3.2E-6', '3.2E-6 to 7.4E-6', '7.4E-6 to 6.0E-5', '6.0E-5 or greater'],
    "median_inc": ['No Data', 'under 34k', '34k to 44k', '44k to 54k', '54k to 65k', '65k to 78k', '78k to 102k', '102k to 250k'],
    "pc_white": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_black": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_am_in": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_n_HI": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_asian": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_other": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_2_o_more": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_latino": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ],
    "pc_vulnerable": ['No Data', '0-14%', '14-29%','29-43%','43-57%', '57-71%', '71-86%', 'Above 86%' ]
};

var labels = labels_dict[demo_val];
var CartoDB_DarkMatter = L.tileLayer(
'https://api.mapbox.com/styles/v1/dhalpern/cjosz5zwq12c12so7f4j0f6fk/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGhhbHBlcm4iLCJhIjoiY2pvMnliandsMHJsbTNwcGhlNWhqYzF3ZyJ9.g5FiNV9s5DXPt1RaE2wNyg', {
    tileSize: 512,
    zoomOffset: -1,
    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Sources: ACS 2016, 2010, US Decennial Census 2000, 1990 '
});

function get_color(d) {
    return d === null ? 'lightgray':
           d > grades[6] ? '#7a0177' :
           d > grades[5]  ? '#ae017e' :
           d > grades[4]  ? '#dd3497' :
           d > grades[3]  ? '#f768a1' :
           d > grades[2]   ? '#fa9fb5' :
           d > grades[1]   ? '#fcc5c0' :
           d > grades[0]   ? '#fde0dd' :
                            '#fff7f3';
}

function get_date(d) {
    return d === "3" ? atl_data2016:
           d === "2" ? atl_data2010:
           d === "1" ? atl_data2000:
           d === "0" ? atl_data1990:
                             'null';
}

function demo_slice(f, d) {
    return d === "median_inc" ? get_color(f.properties.median_inc):
           d === "pc_white" ? get_color(f.properties.pc_white):
           d === "pc_black" ? get_color(f.properties.pc_black):
           d === "pc_am_in" ? get_color(f.properties.pc_am_in):
           d === "pc_n_HI" ? get_color(f.properties.pc_n_HI):
           d === "pc_asian" ? get_color(f.properties.pc_asian):
           d === "pc_other" ? get_color(f.properties.pc_other):
           d === "pc_2_o_more" ? get_color(f.properties.pc_2_o_more):
           d === "theil_T" ? get_color(f.properties.theil_T):
           d === "pc_latino" ? get_color(f.properties.pc_latino):
           d === "pc_vulnerable" ? get_color(f.properties.pc_vulnerable):
                             'null';
}

function info_selector(props, d) {
    return d === "median_inc" ? '<b>Median Income in 2016 Dollars </b><br>$ ' + (props ? props.median_inc : 'Hover over a block group'):
           d === "pc_white" ? '<b>Percent White Alone</b><br>' + (props ? props.pc_white*100 + '%': 'Hover over a block group'):
           d === "pc_black" ? '<b>Percent Black Alone</b><br>' + (props ? props.pc_black*100 + '%': 'Hover over a block group'):
           d === "pc_am_in" ? '<b>Percent American Indian Alone</b><br>' + (props ? props.pc_am_in*100 + '%': 'Hover over a block group'):
           d === "pc_n_HI" ? '<b>Percent Native Hawaiian Alone</b><br>' + (props ? props.pc_n_HI*100 + '%': 'Hover over a block group'):
           d === "pc_asian" ? '<b>Percent Asian Alone</b><br>' + (props ? props.pc_asian*100 + '%': 'Hover over a block group'):
           d === "pc_other" ? '<b>Percent Other Alone</b><br>' + (props ? props.pc_other*100 + '%': 'Hover over a block group'):
           d === "pc_2_o_more" ? '<b>Percent 2 or More Races</b><br>' + (props ? props.pc_2_o_more*100 + '%': 'Hover over a block group'):
           d === "theil_T" ? '<b>Theil T Index</b><br>' + (props ? props.theil_T: 'Hover over a block group'):
           d === "pc_latino" ? '<b>Percent Latino Alone</b><br>' + (props ? props.pc_latino*100 + '%': 'Hover over a block group'):
           d === "pc_vulnerable" ? '<b>Percent Vulnerable</b><br>(Less than High School and "Poor" or "Struggling")<br>' + (props ? props.pc_latino*100 + '%': 'Hover over a block group'):
                             'null';
};

function style(feature) {
    return {
        weight: 0.5,
        opacity:0.5,
        color:"black",
        fillOpacity: 0.7,
        fillColor:demo_slice(feature, demo_val)
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 3,
        color: 'black',
        dashArray: '',
        fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    demo.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight
    });
     info.update();
}
function update_map(){
    data_source = get_date($('#time-range').val());
    demo_val = $('#demo_select').val();
    grades = grades_dict[demo_val];
    labels = labels_dict[demo_val];

    legend.addTo(m);

    demo = L.geoJson(data_source, {style: style, onEachFeature: onEachFeature})

    demo.addTo(m);
    
};
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info output_info');
    this.update();
    return this._div;
}

info.update = function (props) {
    $('.output_info').html(info_selector(props, demo_val));     
};

legend.onAdd = function (m) {

    var div = L.DomUtil.create('div', 'info legend');
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + get_color(grades[i]) + '"></i> ' + labels[i] + '<br>';
    }

    return div;
};

m.addLayer(CartoDB_DarkMatter);
info.addTo(m);

$(document).ready( function(){
  update_map() 
});

$( "select#demo_select" ).change(function() {
  update_map()
});

$( "#time-range" ).click(function() {
  update_map()
});

$( "#bottom-pane-button" ).click(function() {
    $("#bottom-pane-button").toggleClass('active');
    $('#bottom-pane').toggleClass('shown');
});