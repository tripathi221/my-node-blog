import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  private blogList: Array<Blog> = [];
  private ifCreateBlog: boolean = false;
  blogForm: FormGroup;
  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.createForm();
  }

  createForm() {
    this.blogForm = this.fb.group({
      blogTitle: ['', Validators.required ],
      blogDescription: ['', Validators.required ],
    });
  }

  ngOnInit() {
    this.getBlogs();
  }

  createBlog() {
    this.ifCreateBlog = false;
    this.blogService.createBlog(this.blogForm.value.blogTitle, this.blogForm.value.blogDescription)
    .subscribe((data) => {
      this.getBlogs();
    });
  };

  getBlogs() {
    this.blogService.getBlogs().subscribe((data: Blog[]) => {
      this.blogList = data;
    });
  };
}
