<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';
=======
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {LeafletDirective, LeafletModule} from "@asymmetrik/ngx-leaflet";
import {latLng, tileLayer} from "leaflet";
import {GeocodingService} from "./services/geocoding.service";
>>>>>>> fead0b7 (final fix)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LeafletModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
<<<<<<< HEAD
export class AppComponent {
  title = 'kubsu-4mm-2024-map';

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
=======
export class AppComponent implements OnInit {

  @ViewChild(LeafletDirective)
  protected leaflet!: LeafletDirective;

  public constructor(private readonly route: ActivatedRoute,
                     private readonly geocodingService: GeocodingService) {
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'];
      if (search !== undefined) {
        this.geocodingService.search(search)
          .subscribe(coordinates => {
            this.leaflet.getMap().flyTo(coordinates, 17);
          });
      }
    });
  }

  protected options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
>>>>>>> fead0b7 (final fix)
    ],
    zoom: 15,
    center: latLng(45.019487, 39.031094)
  };
<<<<<<< HEAD

  onMapReady(map: L.Map): void {
    console.log(map);
  }

}

=======
} 
>>>>>>> fead0b7 (final fix)
