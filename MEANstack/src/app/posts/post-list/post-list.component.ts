import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  /* posts = [
    {title: "First Post", content: "This is the first post content"},
    {title: "Second Post", content: "This is the second post content"},
    {title: "Third Post", content: "This is the third post content"}
  ] */

  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener() // subscribe to observable created in the post.service.ts 
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  onDeletePost(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
