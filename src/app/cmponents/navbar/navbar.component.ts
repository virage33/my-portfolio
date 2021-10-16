import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private router:Router){}

  gotoPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
  ngOnInit(): void {
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
