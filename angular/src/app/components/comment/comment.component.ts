import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import {tap } from 'rxjs/operators'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  onDeleteComment (id:any) {
    this.commentService.deleteComment(id).pipe(tap(()=>this.commentService.updateData())).subscribe();
  }

}
