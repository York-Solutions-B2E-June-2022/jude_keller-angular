import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;


  constructor(private dataService:DataService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.dataService.onLogin(this.username, this.password)) {
      this.modalService.dismissAll()
    }

console.log("login button works")
  }
}
