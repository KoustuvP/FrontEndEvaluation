import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  commentForm:FormGroup;
  text:FormControl;

  ngOnInit() {
    this.commentForm=new FormGroup(
      {
        "text":new FormControl()
      }
    )
  }



  onAddReply(comment){

    this.commentService.addReply(comment).subscribe(data=>this.commentService.updateData());
    

  }
}
