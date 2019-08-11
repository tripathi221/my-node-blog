import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  uri ='/api'

  constructor(private http: HttpClient) { }

  createBlog(blogTitle, blogDescription) {
    const obj = {
      blogTitle: blogTitle,
      blogDescription: blogDescription,
    };
    console.log(obj);
    return this.http.post(`${this.uri}/create_blog`, obj);
  };

  getBlogs() {
    return this
           .http
           .get(`${this.uri}/blogs`);
  };
}
