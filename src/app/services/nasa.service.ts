import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class NasaService {
    private readonly http = inject(HttpClient);
    private readonly NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=qamRHCliEDOAhhykKUIT8qlwV5dewQpEmBT7OTAM`;

    // Astronomy Picture of the Day (Home)
    getNasaApod(): Observable<any> {
    return this.http.get(this.NASA_APOD_URL).pipe(
        tap((res) => console.log('API RESPONSE:', res))
    );
}
} 