import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title:string = 'Task Tracker';
  showAddTask:boolean=false
  subscription:Subscription
  constructor(private UiService:UiService) {
    this.subscription=this.UiService.onCollapse().subscribe((value)=>(this.showAddTask=value))

   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("clicked at toggle")
   this.UiService.collapseAddTask()
  }

}
