import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import { v4 as uuid } from 'uuid';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {

  // createComment() {
  //   this.commentList.push({
  //     id: uuid(),
  //     date: new Date().getTime(),
  //     text: "",
  //     isEditing: false,
  //   })
  //
  //   this.filterList()
  // }

  commentList: any[] = []
  commentListSUB!: Subscription
  // displayCommentList: Array<any> = []
  commentText = "";
  Comment = document.querySelector('.post-area')

  searchComments(searchTest: string) {
this.commentText = searchTest;

  }


//to display list from commentList
  addComment(){
    let newComment = {
      id: uuid(),
      date: new Date().getTime(),
      text: this.commentText,
      isEditing: false,
    }
    // this.commentList = document.getElementsByClassName('post-area')
    console.log(this.commentText)
    this.dataService.createComment(newComment)
  }




  //filter through the list of comments

  filterList() {
    this.commentList = this.commentList.filter(
      (comment: any) => {
        return comment.text.includes(this.commentText)

      }
    )
  }


  deleteComments(){
this.dataService.deleteComment()
  }


  constructor(private dataService: DataService) {
this.commentList = dataService.commentList
    this.commentListSUB = dataService.commentList$.subscribe(
      newCommentList => this.commentList = newCommentList)
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.commentListSUB.unsubscribe()
  }


  editComments() {
    this.dataService.editComment()
  }
}
