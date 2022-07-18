import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  searchText = "";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onPost() {

  }
}
