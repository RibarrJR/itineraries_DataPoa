import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError,  switchMap, timeInterval, delay } from 'rxjs/operators';
import { throwError, Observable, of, timer, interval } from 'rxjs';
import { LatLngLiteral } from '@agm/core';


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
        // delay acrescentado apenas para simular a demora da requisição
        delay(1200),
        switchMap((lines:HttpResponse<object>) => of(lines.body)),
        catchError(err => throwError(this.handleError(err)))
      )
  }

  searchAllLotacaoLines(): Observable<object> {
    return this._http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l', { headers: this.headers, observe: 'response' })
      .pipe(
        // delay acrescentado apenas para simular a demora da requisição
        delay(800),
        switchMap((lines:HttpResponse<object>) => of(lines.body)),
        catchError(err => throwError(this.handleError(err)))
      )
  }

  searchitineraries(id:number) {
    return this._http.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${+id}`, { headers: this.headers, observe: 'response' }).pipe(
      switchMap((lines:HttpResponse<Array<LatLngLiteral>>) => of(lines.body)),
      catchError(err => throwError(this.handleError(err)))
    )

  }


  handleError(err) {
    if (err instanceof HttpErrorResponse)
      switch (err.status) {
        case 404:
          console.debug
          break;
        case 500:
        default:
          break;
      }

  }


}
