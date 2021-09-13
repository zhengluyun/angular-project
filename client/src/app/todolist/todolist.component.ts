import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist = [
    {
      id:"1",
      title:"task1",
      isTask: true,
      isOverdue: false,
    },
    {
      id:"2",
      title:"task2",
      isTask: true,
      isOverdue: true,
    },
    {
      id:"3",
      title:"the 3rd item",
      isTask: false,
      isOverdue: false,
    }
  ]

  constructor() { }
  ngOnInit(): void {
    this.todolist = this.todolist;
  }
  getColor1(isOverdue:any){
    if (isOverdue) return "red";
    else return "white";
  }
  getColor2(isOverdue:any){
    if (!isOverdue) return "orange";
    else return "white";
  }
  countOverdue(){
    var count = 0;
    for (let todo of this.todolist){
      if(todo.isOverdue === true)  count += 1;
    }
    return count;
  }
  countDuesoon(){
    var count = 0;
    for (let todo of this.todolist){
      if(todo.isOverdue === false)  count += 1;
    }
    return count;
  }
  countAlltasks(){
    return this.todolist.length;
  }
}
