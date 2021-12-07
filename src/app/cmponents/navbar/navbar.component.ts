import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  bio:any ={};
  
  constructor(private router:Router, private bioData:UserService){}

  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  ngOnInit(): void {
   
    this.bioData.getData().subscribe(
      (response:any)=>{
        this.bio=response;
      },
      ()=>{}
    )
    
    const showMenu = (toggleId:any,navId:any)=>{
      const toggle = document.getElementById(toggleId)
      let nav=document.getElementById(navId);

      if(toggle && nav){
        toggle.addEventListener('click',()=>{
          nav?.classList.toggle('show')
        })
      }
    }
    
    const navLink = document.querySelectorAll('nav_link')
    function remove() {
      const navMenu = document.getElementById('nav-menu')
      navMenu?.classList.remove('show')
    }
    
    navLink.forEach(n => n.addEventListener('click', remove));
    showMenu('toggle-menu','nav-menu');

    
    
  }

  

}
