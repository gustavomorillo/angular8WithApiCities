import { Injectable , OnInit} from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService{


  url:string = 'http://127.0.0.1:8000/api/cities';


  constructor(public httpClient:HttpClientModule,
    public http: HttpClient) { }


    getCities(counter:number) {
      return this.http.get(`${this.url}?page=${counter}` )
  }

  postCity(data){

    return this.http.post('http://127.0.0.1:8000/api/citiesSave', data )
                    
  }

   

}
