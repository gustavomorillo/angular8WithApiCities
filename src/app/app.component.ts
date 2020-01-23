import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citiesApp';
  cities:any;
  citiesPrevious:any;
  counter:number = 1;
  postData:any
  constructor(public cs:ServiceService) {
    
    this.cs.getCities(this.counter)
              .subscribe(data => {
                this.cities = data;
                this.counter++
              })
  
  }

  next() {

    setTimeout(function(){ 
      Swal.fire(
        'Buen Trabajo!',
        'Estos registros fueron guardados satisfactoriamente',
        'success'
      ) 
    }, 1000);
    

    this.cs.getCities(this.counter)
              .subscribe(data => {
                // console.log(data);
                this.cities = data;
                this.counter++;
              })
    
    this.saveData();
        
  }

  saveData(){
      this.cs.getCities(this.counter )
              .subscribe(data => {
                this.postData = {
                  data: data['data']
              }
              this.cs.postCity(this.postData).subscribe(data => {
                
              })

              })
  }

  

   

}
