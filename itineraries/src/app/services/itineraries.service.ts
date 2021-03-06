import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, switchMap, timeInterval, delay } from 'rxjs/operators';
import { throwError, Observable, of, timer, interval } from 'rxjs';
import { LatLngLiteral } from '@agm/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ItinerariesService {
  private headers

  constructor(private _http: HttpClient, private _toast: ToastrService) {

    this.headers = new HttpHeaders();
  }

  searchAllBusLines(): Observable<object> {
    // url usando api http://localhost:3000/onibus
    return this._http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o', { headers: this.headers, observe: 'response' })
      .pipe(
        // delay acrescentado apenas para simular a demora da requisição
        delay(1200),
        switchMap((lines: HttpResponse<object>) => of(lines.body)),
        catchError(err => {
          this.handleError(err)
          return throwError(err);
        }
        ))
  }

  searchAllLotacaoLines(): Observable<object> {
    // url usando api http://localhost:3000/lotacao
    return this._http.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l', { headers: this.headers, observe: 'response' })
      .pipe(
        // delay acrescentado apenas para simular a demora da requisição
        delay(800),
        switchMap((lines: HttpResponse<object>) => of(lines.body)),
        catchError(err => {
          this.handleError(err)
          return throwError(err);
        }
        ))
  }

  searchitineraries(id: number) {
    // url usando api http://http://localhost:3000/itineraries/${+id}
    return this._http.get(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${+id}`, { headers: this.headers, observe: 'response' }).pipe(
      switchMap((lines: HttpResponse<Array<LatLngLiteral>>) => of(lines.body)),
      catchError(err => {
        this.handleError(err)
        return throwError(err);
      }
      ))

  }


  handleError(err) {
    if (err instanceof HttpErrorResponse)
      switch (err.status) {
        case 404:
          this._toast.error("Erro url Não encontrada", "Erro!");
          break;
        case 500:
          this._toast.error("Erro interno do servidor", "Erro!");
        default:
          this._toast.error("Erro ao fazer a requisição", "Erro!");
          break;
      }

  }


}
