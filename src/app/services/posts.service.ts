import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  private _getPostsUrl = "https://jsonplaceholder.typicode.com/posts";

  // MOCK_POSTS: Post[] = [
  //   { title: "Title 1", body: "Post Body here . . . . . ."},
  //   { title: "Title 2", body: "Post Body here . . . . . ."},
  //   { title: "Title 3", body: "Post Body here . . . . . ."},
  //   { title: "Title 4", body: "Post Body here . . . . . ."},
  //   { title: "Title 5", body: "Post Body here . . . . . ."},
  //   { title: "Title 6", body: "Post Body here . . . . . ."},
  //   { title: "Title 7", body: "Post Body here . . . . . ."},
  // ];

  //constructor() { }
  constructor(private _http: Http) { }

  // getPosts(): Post[] {
  //   return this.MOCK_POSTS;
  // }

  getPosts() {
    return this._http.get(this._getPostsUrl).map(this._extractPostsData);
  }
  addPosts(title: string, body: string) {
    this._http.post(this._getPostsUrl, {
      'title': title,
      'body': body,
      'userId': '25',
    });
  }
  
  private _extractPostsData(res) {
    let body = res.json();
    return body || {};
  }
}
