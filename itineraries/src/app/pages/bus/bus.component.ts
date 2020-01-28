import { Component, OnInit } from '@angular/core';
import { ItinerariesService } from 'src/app/services/itineraries.service';
import { LatLng } from '@agm/core';
import { google, LatLngLiteral } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  public allLines;

  public lat = 24.799448;
  public lng = 120.979021;

  public coordenate: Array<Cardinate> = [];

  public transitOptions: any = {
    departureTime: new Date('2018/05/20 13:14'),
    arrivalTime: new Date('2018/05/20 13:30'),
    modes: ['BUS'],
}



  constructor(private _request: ItinerariesService) {

  }

  ngOnInit() {
    this.allLines = this._request.searchAllBusLines();
    this.getDirection();
  }

  getDirection() { }

  searchItinierarie(id: number) {

    this._request.searchitineraries(id).subscribe((itinerarie: Array<LatLngLiteral>) => {

      const coord = Object.values(itinerarie).filter((x: Object) => x.hasOwnProperty('lat'))

      this.coordenate = this.transformCardenate(coord)

    }
    );



  }

  transformCardenate(coord: Array<LatLngLiteral>): Array<Cardinate> {

    const test = coord.map((itineraries, index): Cardinate => {
      if(index+1 >= coord.length){
        return
      }
      return {
        origin : { lat: +coord[index].lat, lng: +coord[index].lng },
        destination: { lat: +coord[index+1].lat, lng: +coord[index+1].lng },
      }
    });
    test.pop();

    return test;
  }
}

export interface Cardinate {
  origin: LatLngLiteral,
  destination: LatLngLiteral
};
