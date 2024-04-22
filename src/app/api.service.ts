// represents the api service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from './model'; 

@Injectable({
    providedIn: 'root'
  })

  export class ApiService {
    //Base Url for api requests from Backend
    private baseUrl = 'http://localhost:8080/model/modelname';

    //initializes the HttpClient=sends HttpRequest
    //to the server and receives data
    constructor(private http: HttpClient) { }

    //Method=sends GET-recuest to the base URL
    //and expect an answer (Model-Array with Objects)
    getName(): Observable<Model[]>{
        return this.http.get<Model[]>(`${this.baseUrl}`);
    }
  }  