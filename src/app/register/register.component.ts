import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {


  username!: string;
  password!: string;
  result!: string;

  constructor(private dataService: DataService, private modalService: NgbModal) {

  }


  ngOnInit(): void {
  }

  onRegister(){
    this.result = this.dataService.createUser(this.username, this.password);
    return "account registered"

console.log("register button works")
  }
}
