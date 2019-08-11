import { CreateBlogComponent } from './blogs/create-blog/create-blog.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'blogs', component: BlogListComponent},
  {path: 'home', component: CreateBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
