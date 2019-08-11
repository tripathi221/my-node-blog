import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  private blogList: Array<Blog> = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogList = data;
    });
  };
}
