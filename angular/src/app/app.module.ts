import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { CommentFeedComponent } from "./components/comment-feed/comment-feed.component";
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentFeedComponent,
    CommentComponent,
    CommentFormComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
