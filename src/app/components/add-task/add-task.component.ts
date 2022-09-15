import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task:string;
  day:string;
  reminder:boolean=false
  showAddtask:boolean
  subscription:Subscription
  constructor(private uiService:UiService){
   this.subscription=this.uiService.onCollapse().subscribe(value=>{this.showAddtask=value})
   

  }

  @Output() addTaskEmitter:EventEmitter<Task>=new EventEmitter()

  onSubmit(){
    if(!this.task){
      alert('please add a task')
      return
    }
    const newTask:Task={
      text:this.task,
      day:this.day,
      reminder:this.reminder
    }
    this.addTaskEmitter.emit(newTask)

    this.task=''
    this.day=''
    this.reminder=false


  }





  ngOnInit(): void {



  }

}
