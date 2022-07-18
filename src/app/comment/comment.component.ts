import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  createComment() {
    this.commentList.push({
      id: uuid(),
      date: new Date().getTime(),
      text: "",
      isEditing: true,
      isFinished: false

    })
this.filterList()
  }

  commentList: Array<any> = []
  displayCommentList: Array<any> = []
  searchText = "";

  searchComments(searchTest: string) {
this.searchText = searchTest;
this.filterList()
  }


  filterList() {
    this.displayCommentList = this.commentList.filter(
      (comment: any) => {
        return comment.text.includes(this.searchText)

      }
    )
  }

  deleteComments(reminderToDelete: any){
    this.displayCommentList = this.commentList.filter(
      (reminder) => {return reminder.id !== reminderToDelete.id}
    )

  }


  constructor(private dataService: DataService) { }


  ngOnInit(): void {
  }


}
