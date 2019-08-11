import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BlogService } from '../../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder, private blogService: BlogService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.blogForm = this.fb.group({
      blogTitle: ['', Validators.required ],
      blogDescription: ['', Validators.required ],
    });
  }

  ngOnInit() {}

  createBlog() {
    this.blogService.createBlog(this.blogForm.value.blogTitle, this.blogForm.value.blogDescription)
    .subscribe((data) => {debugger
      this.router.navigate(['/blogs']);
    });
  };
}
