import { Injectable } from  "@angular/core"
import { CanActivate } from "@angular/router"

@Injectable()
export class myAuthGaurd implements CanActivate{
     canActivate(){
         console.log("I came here")
         let obj=sessionStorage.getItem("token");
         if (obj !=null){
             return true;
         }
         else{
             return false;
         }
     }
}