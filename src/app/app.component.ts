//import of important modules
//Component: define components
//OnInit: use this Method
import { Component, OnInit } from '@angular/core';

//import Information from the created ApiService-data
import { ApiService } from './api.service';

//import Information from the model.ts-data
import {Model} from './model';

//Displaying the content
//define Component
//@=provide metadata
//Selector: looks for the component in HTML
//template-/styleUrl: indicate data for the components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//define AppComponent class and implements the OnInit method
//use two variables: String, empty Array
export class AppComponent implements OnInit {
  
  models: Model[] = []; 

  //parameter, property of the class
  constructor(private apiService: ApiService) { }

  //Initialize and call the data
  //get.Name from api.service = call data from api (Observable)
  //subscribe()=react to the received data from api
  //received date beeing saved in Model-Array
  //Data form the component available und ready to display
  ngOnInit(): void {
    this.apiService.getName().subscribe(
      (data: Model[]) => {
        this.models = data; // Set Data in Model
      },
    );
  }
}  