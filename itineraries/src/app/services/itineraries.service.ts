import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItinerariesService {
  private headers

  constructor(private _http: HttpClient) {

    this.headers = new HttpHeaders();
  }

  searchAllBusLines(): Observable<object> {
    return this._http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o', { headers: this.headers, observe: 'response' })
      .pipe(
        map(lines => lines.body),
        catchError(err => throwError(this.handleError(err)))
      )
  }

  searchAllLotacaoLines(): Observable<object> {
    return this._http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l', { headers: this.headers, observe: 'response' })
      .pipe(
        map(lines => lines.body),
        catchError(err => throwError(this.handleError(err)))
      )
  }

  searchitineraries(id:number) {
    return this._http.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${+id}`, { headers: this.headers, observe: 'response' }).pipe(
      map((itinerarie:HttpResponse<object>) => itinerarie.body),
      catchError(err => throwError(this.handleError(err)))
    )

  }


  handleError(err) {
    if (err instanceof HttpErrorResponse)
      switch (err.status) {
        case 400:
          break;
        case 500:
        default:
          break;
      }

  }


}
