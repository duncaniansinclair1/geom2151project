import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS.js';
/*import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer.js'; */
import ImageWMS from 'ol/source/ImageWMS.js';
import XYZ from 'ol/source/XYZ.js';



const map = new Map({
  target: 'map',
  
  layers: [
    new TileLayer({
      source: new XYZ({
        attributions: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
    }),
  }),
  new TileLayer({
    extent: [144.6892,-38.4798,145.7792,-37.8177],
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/blockapp/wms',
      params: {'LAYERS': 'blockapp:priority_areas', 'TILED': true},
      serverType: 'geoserver'
    }),
    opacity: 0.5
  }),
    new TileLayer({
      extent: [144.6892,-38.4798,145.7792,-37.8177],
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/blockapp/wms',
        params: {'LAYERS': 'blockapp:v_sw_pipe_ln_apr_2016', 'TILED': true},
        serverType: 'geoserver'
      }),
      opacity: 0.8
    }),
    new TileLayer({
      extent: [144.6892,-38.4798,145.7792,-37.8177],
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/blockapp/wms',
        params: {'LAYERS': 'blockapp:blocks', 'TILED': true},
        serverType: 'geoserver',
    }),
    minResolution: 0,
    maxResolution: 0.00002
  }),
  new TileLayer({
    extent: [144.6892,-38.4798,145.7792,-37.8177],
    source: new TileWMS({
      url: 'http://localhost:8080/geoserver/blockapp/wms',
      params: {'LAYERS': 'blockapp:Manholes', 'TILED': true},
      serverType: 'geoserver',
  }),
  minResolution: 0,
  maxResolution: 0.00002
})
  ],
  view: new View({
    projection: 'EPSG:4326',
    center: [145.0667, -37.9],
    zoom: 12
  })

});