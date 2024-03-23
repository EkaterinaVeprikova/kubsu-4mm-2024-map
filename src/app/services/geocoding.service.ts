import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LatLng} from "leaflet";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  public constructor(private readonly httpClient: HttpClient) {
  }

  public search(query: string): Observable<LatLng> {
    return this.httpClient.get<GeocodingResponse>("http://localhost/geocoder/search?query=" + query)
      .pipe(
        map(resp => new LatLng(resp.latitude, resp.longitude))
      );
  }
}

interface GeocodingResponse {
  latitude: number,
  longitude: number
}