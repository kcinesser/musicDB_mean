import { Injectable } from '@angular/core';
import { Artist } from '../classes/artist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artistsUrl = 'http://localhost:5000/api/artists';

  constructor(
    private http: HttpClient
  ) { }

  getArtists (): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl)
      .pipe(
        catchError(this.handleError<Artist[]>('getArtists', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
