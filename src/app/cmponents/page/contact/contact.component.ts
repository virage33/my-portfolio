import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data:any ={};
  constructor(private contactInfo:UserService) { }

  ngOnInit(): void {
    this.contactInfo.getData().subscribe(
      (response:any)=>{
        this.data=response;
      },
    )
  }

}
