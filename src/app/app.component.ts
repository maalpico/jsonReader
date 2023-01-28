import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mySpace XApp';


  data: any[] = [];
  constructor(
    private http: HttpClient
  ) {}

    ngOnInit() {
      this.http.get('https://api.spacexdata.com/v4/ships')
      .subscribe((datos: any) => {
          this.data =datos;
      })
    }

}
