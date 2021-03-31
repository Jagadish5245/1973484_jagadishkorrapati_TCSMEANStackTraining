import { Component, OnInit } from '@angular/core';
import { Fake } from '../fake.model';
import { FakeService } from '../fake.service';
import { Myservice } from '../mycustom.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  //providers:[FakeService]
})
export class FirstComponent implements OnInit {
  msg1:string="";
  msg2:string=""

  constructor(public service:FakeService) { }
  fakeData:Array<Fake>=[]
  ngOnInit(): void {
    this.service.loadFakeData().subscribe(data=>this.fakeData=data)
  }
fun(){
  let obj = new Myservice();
  this.msg1=obj.sayHello();
}
display(){
  this.msg2 = this.service.sayHello();
}
callFakeService(){
 // this.service.loadFakeData().subscribe(data=>this.fakeData=data)
}
}

