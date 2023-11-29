import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) { }

  getPosts(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

  addPost(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }

  deletePosts(id: any){
    return new Promise(resolve=>{
      this.http.delete(this.url + "/" + id).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

  editPosts(id: any, data: any){
    return new Promise(resolve=>{
      this.http.patch(this.url + "/" + id, JSON.stringify(data)).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
}
