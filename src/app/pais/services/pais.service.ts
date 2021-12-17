import { HttpClient, HttpParams, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  get httpParams (){
    return new HttpParams()
    .set('fields', 'name,flags,capital,population,translations,ccn3');
  }

  constructor(private http: HttpClient) { }

  buscarPais (termino: string): Observable<Country[]> {
    const url: string = `${this,this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital (termino: string): Observable<Country[]> {
    const url: string = `${this, this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorId (id: string): Observable<Country> {
    const url: string = `${this, this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url: string = `${this, this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      );
  }
  

}
