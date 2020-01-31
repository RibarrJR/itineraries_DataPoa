import { Component, OnInit } from '@angular/core';
import { ItinerariesService } from 'src/app/services/itineraries.service';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.scss']
})
export class LotacaoComponent implements OnInit {

  public allLines;

  public steps = new BehaviorSubject<LatLngLiteral[]>([]);

  constructor(private _request: ItinerariesService) {

  }

  ngOnInit() {
    this.allLines = this._request.searchAllLotacaoLines();
  }

  searchItinierarie(id: number) {
    this._request.searchitineraries(id).subscribe(coordinate => {
      if (coordinate !== undefined) {
        this.steps.next(coordinate)
      }
    },error=>{

    })

  }
}

