import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, Marker, tileLayer } from 'leaflet';
import { SobreDTO } from '../sobreDTO';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  model: SobreDTO = {nome: 'LopesLDA', latitude: 41.5599125487342, longitude: -8.31795930862427, }

  ngOnInit(): void {
  }

  @Output()
  onSelectionLocation = new EventEmitter<SobreDTO>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'LopesLDA' })
    ],
    zoom: 13,
    center: latLng(41.5599125487342,-8.31795930862427) //braga
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude, longitude}); //para obter as coordenadas aquando do clik
    this.layers = [];
    this.layers.push(new Marker([latitude, longitude]));


}
}
function input() {
  throw new Error('Function not implemented.');
}

