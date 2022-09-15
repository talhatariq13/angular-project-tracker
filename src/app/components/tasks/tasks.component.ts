import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[]

  constructor(private taskServie:TaskService) {

   }

  ngOnInit(): void {
    this.taskServie.getTask().subscribe((tasks)=>this.tasks=tasks)
  }
  deleteTask(task:Task){
    console.log(task)
    this.taskServie.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t=>t.id!==task.id))
  }
  toggleReminder(task:Task){
    task.reminder=!task.reminder
    this.taskServie.updateTaskStatus(task).subscribe(task=>console.log(task))
    this.ngOnInit()
  }
  postTask(task:Task){

    console.log(task)
    this.taskServie.addNewTask(task).subscribe()
    this.ngOnInit()
  }

}
