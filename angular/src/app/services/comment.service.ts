import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

const API_PREFIX = "/api";

@Injectable({
  providedIn: "root"
})
export class CommentService {
  getSerchResult(searchTerm) : Observable<any>{
    return this.http.get(`${API_PREFIX}/comments?q=${searchTerm}`);
  }
  addReply(comment: any) :Observable<any>{
    return this.http.post(`${API_PREFIX}/comments`,comment);
  }

  public commentSubject: Subject<any>= new Subject();
  public updateData(){
    this.commentSubject.next();
  }

  deleteComment(id: any): Observable<any> {
     return this.http.delete(`${API_PREFIX}/comments/${id}`);
  }

  constructor(private http: HttpClient) { }

  /**
   * Reset comments back to original state.
   */
  resetComments(): Observable<any> {
    return this.http.post(`${API_PREFIX}/reset-comments`, {});
  }
  
  getAllComments():Observable<any> {
    return this.http.get(`${API_PREFIX}/comments`);
  }
}
