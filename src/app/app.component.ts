import {Component, TemplateRef} from '@angular/core';
import {DataService} from "./data.service";
import {IUser} from "./Interface";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MessageBoard';
  currentUser: IUser | null = null;


searchText = "";

  constructor(private dataService: DataService, private modalService: NgbModal) {
    this.dataService.currentUser$.subscribe(nextValue =>  this.currentUser = nextValue)
  }
  onLogout(){
    this.dataService.onLogout()
  }
  addComment() {
    this.dataService.commentList.push()
    console.log("button works")
  }

}
