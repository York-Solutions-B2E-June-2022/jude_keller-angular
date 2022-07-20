import { Injectable } from '@angular/core';
import {IUser} from "./Interface";
import {Subject} from "rxjs";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser$ = new Subject<IUser | null>();
  userList: Array<IUser> = [{id: uuid(), username: "test", password: "pass"}];
  commentList: Array<any> = [];
  commentList$ = new Subject<Array<any>>()

  constructor() {

  }

  onLogin(username: string, password: string): boolean {
    const foundUser = this.userList.find(u => u.username === username)
    if (foundUser && foundUser.password === password) {
      this.currentUser$.next(foundUser);
      return true
    }
    return false
  }

  onLogout() {
    this.currentUser$.next(null);
  }

  createUser(username: string, password: string): string {
    if (!username || !password) {
      return "username or password cannot be empty"
    }
    if (username.length < 4 || password.length < 4) {
      return "username and password must be greater than 4 characters."
    }

    const foundUser = this.userList.find(u => u.username === username);
    if (foundUser) {
      return "username is taken"
    }
    const newUser: IUser = {
      id: uuid(),
      username: username,
      password: password
    }

    this.userList.push(newUser);
    console.log(this.userList)
    return "account created";
  }

  createComment(comment: any) {
    this.commentList.push(comment)
    console.log(this.commentList)
  }

 deleteComment(){
this.commentList = []
   this.commentList$.next(this.commentList)
   console.log(this.commentList)
 }

  editComment() {
    this.commentList = this.commentList.filter(
      (comment: any) => {
        comment.text.includes(this.commentList)
        console.log(this.commentList)

      }
    )
  }

}
