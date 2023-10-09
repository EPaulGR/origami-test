import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.createHttpOptions();
  }

  token: any;
  httpOptions: any;
  private url = environment.apiURL;


  createHttpOptions(): void {

    this.httpOptions = {
      headers: new HttpHeaders({
        'content-Type':  'application/json',
        // 'authorization': 'Bearer'+' '+this.token,
      })
    };

  }


  obtenerZip(): Observable<any> {
    console.log(this.url)
    return this._http.get(this.url+'/api/LoadAddress/ZipCode/03020', this.httpOptions);
  }
}
