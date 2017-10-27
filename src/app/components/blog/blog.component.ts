import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  title: string;
  body: string;
  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe((data) => this.posts = data);
  }

  addPost() {
    this._postService.addPosts(this.title, this.body);
  }

}
