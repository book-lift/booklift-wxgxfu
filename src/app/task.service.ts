import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  task: string[] = [];

  add(task: string){
    this.task.push(task);
  }

  clear(){
    this.task = [];
  }

}