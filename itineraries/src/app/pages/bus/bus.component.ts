import { Component, OnInit } from '@angular/core';
import { ItinerariesService } from 'src/app/services/itineraries.service';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  public allLines;

  public steps = new BehaviorSubject<LatLngLiteral[]>([]);

  constructor(private _request: ItinerariesService) {

  }

  ngOnInit() {
    this.allLines = this._request.searchAllBusLines();
  }

  searchItinierarie(id: number) {
    this._request.searchitineraries(id).subscribe(coordinate => {
      if (coordinate !== undefined) {
        this.steps.next(coordinate)
      }
    })

  }
}

