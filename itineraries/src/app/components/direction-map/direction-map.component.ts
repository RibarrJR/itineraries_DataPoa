import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LatLngLiteral } from '@agm/core';
import { Cardinate } from 'src/app/models/googleMaps.model';
import { Observable, BehaviorSubject, observable, Subscription } from 'rxjs';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-direction-map',
  templateUrl: './direction-map.component.html',
  styleUrls: ['./direction-map.component.scss']
})
export class DirectionMapComponent implements OnInit,OnDestroy {

  @Input() $steps: Observable<Array<LatLngLiteral>>;

  public coordenate: Array<Cardinate> = [];
  public _listStops = new BehaviorSubject<Array<Cardinate>>([]);

  public transitOptions: any = {
    modes: ['BUS'],
  }
  stops: Cardinate[];
  stopIndex: any;
  _stepsSubscription: Subscription;
  list: Cardinate[];

  constructor() { }

  ngOnInit() {

    this._listStops.pipe(debounceTime(400),distinctUntilChanged()).subscribe((lines:Array<Cardinate>)=>{
      if(!!lines){
        this.list=lines;
      }
    })

   this._stepsSubscription = this.$steps.subscribe(coordenates => {
      this.stopIndex=''
      if (coordenates !== undefined) {
        this.coordenate = this.transformCoordinate(coordenates)
      }
    })
  }

  ngOnDestroy(): void {
    this._stepsSubscription.unsubscribe();
  }

  transformCoordinate(coordinates: Array<LatLngLiteral>): Array<Cardinate> {
    const LatLng = this.getOnlyCoordinates(coordinates)
    const response = LatLng.map((itineraries: LatLngLiteral, index: number): Cardinate => {
      let obj: Cardinate;
      if (index + 1 >= LatLng.length) {
        return
      }
      return obj = {
        origin: {
          lat: +LatLng[index].lat,
          lng: +LatLng[index].lng
        },
        destination: {
          lat: +LatLng[index + 1].lat,
          lng: +LatLng[index + 1].lng
        }
      }
    });
    response.pop();
    return response;
  }

  getOnlyCoordinates(coord: Array<LatLngLiteral>) {
    return Object.values(coord).filter((data: Object) => data.hasOwnProperty('lat'));
  }

  changeDirection(o: LatLngLiteral, d: LatLngLiteral, i, number) {
    this._listStops.next([{ origin: o, destination: d }])
    this.stopIndex = i;
  }

}
