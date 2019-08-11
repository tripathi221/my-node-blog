import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  private blogList: Array<Blog> = [];
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
