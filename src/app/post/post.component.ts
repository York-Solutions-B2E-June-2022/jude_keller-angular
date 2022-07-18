import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IUser} from "../Interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  currentUser: IUser | null = null

  constructor(private dataService: DataService) {
    this.dataService.currentUser$.subscribe(nextValue => this.currentUser = nextValue)
  }


  ngOnInit(): void {
  }



}
