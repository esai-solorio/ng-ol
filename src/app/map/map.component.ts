import { Component, Input, AfterViewInit } from '@angular/core';
import { Map, View, Overlay} from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { Point } from './map.models';



@Component({
  selector: 'ng-ol',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {


  @Input('center') center: Point;
  @Input('markers') Markers: Point[];
  @Input('ngStyle') mapStyle: any;

  constructor() { }

  ngAfterViewInit() {

    console.log("center:", this.center);
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
                'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
                'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
          })
        })
      ],
      view: new View({
        // center: [this.center.lng, this.center.lat],
        center: fromLonLat([this.center.lng, this.center.lat]),
        zoom: this.center.zoom
      })
    });
    console.log("map:", map);
    console.log("markers:", this.Markers)

    
    

    this.Markers.forEach(marker => {

      var newMarker = new Overlay({
        position: fromLonLat([marker.lng, marker.lat]),
        positioning: 'center-center',
        element: document.getElementById('marker'),
        stopEvent: false
      });
      map.addOverlay(newMarker);
      // markers.addMarker(new Marker(new LonLat(0, 0), icon.clone()));
    });



  }
}
