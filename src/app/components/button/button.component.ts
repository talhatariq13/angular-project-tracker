import { Component, OnInit,Input,Output,
        EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string;
  @Input() color:string;
  @Output() btnClick=new EventEmitter()
  showAddTask:boolean
  subscription:Subscription

  constructor(private UiService:UiService) { 
    this.text=''
    this.color=''
    this.subscription=this.UiService.onCollapse().subscribe((value)=>{this.showAddTask=value,console.log(value)})

  }

  ngOnInit(): void {
  }

  onClick(){
    console.log("clikced")
    this.btnClick.emit();
  }

}
