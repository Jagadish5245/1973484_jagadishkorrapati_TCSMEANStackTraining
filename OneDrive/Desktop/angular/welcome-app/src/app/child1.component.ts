import { compileComponentFromMetadata } from '@angular/compiler';
import {Component} from '@angular/core'

@Component({
    selector:"child1",
    template:`
         <div> 
          This is second child Component
          {{msg}}
          </div>
    `,
    styles:["div{color:red}"]
})
export class child1{
    msg:string="This is Second Child Component";

}