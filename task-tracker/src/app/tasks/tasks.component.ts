import { Component, OnInit } from '@angular/core';
import { task } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public tsSer:TasksService) { }
  settasks:Array<task>=[];

  ngOnInit(): void {
  }
  storeTasks(tsRef:any){
     //console.log(tsRef);
     this.tsSer.stTasks(tsRef)
     this.tsSer.callTasks(tsRef).subscribe(data=>this.settasks=data)
  }
  
}
