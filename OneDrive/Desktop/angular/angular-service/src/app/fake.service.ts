import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { Fake } from "./fake.model";

@Injectable()
export class FakeService{
    constructor(public http:HttpClient){}    
    sayHello():string{
        return "Welcome to userDefined service with DI"
    }
    //loadFakeData(){
      //  this.http.get("http://jsonplaceholder.typicode.com/todos/").subscribe(data=>console.log(data));
    //}
    loadFakeData():Observable<Fake[]>{
        return this.http.get<Fake[]>("http://jsonplaceholder.typicode.com/todos/")
    }

}