import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {Task} from "../../Task"
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter()
  @Output() onDBCLickTask:EventEmitter<Task>=new EventEmitter()
  faTimes=faTimes


  constructor() { 

    
  }

  ngOnInit(): void {

  }

  doDelete(task:Task){
      this.onDeleteTask.emit(task)
  }
  onDBCLick(task:Task){
    
    this.onDBCLickTask.emit(task)
  }

}
