import { Component, OnInit } from "@angular/core";

import { CommentService } from "./../../services/comment.service";

@Component({
  selector: "app-comment-feed",
  templateUrl: "./comment-feed.component.html",
  styleUrls: ["./comment-feed.component.css"]
})
export class CommentFeedComponent implements OnInit {
  comments: Comment[];
  errorMessage = "";

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.getAllComments();
    this.commentService.commentSubject.subscribe(()=>{
      this.getAllComments();
    })
  }

  resetCommentFeed() {
    this.commentService.resetComments().subscribe(()=>this.commentService.updateData());
  }

  getAllComments() {
    this.commentService.getAllComments().subscribe(data=>this.comments=data);
    
  }
  onSearch(term) {
    this.commentService.getSerchResult(term).subscribe(data=>this.comments=data);
  }

}
