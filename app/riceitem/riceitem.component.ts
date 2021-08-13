import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riceitem',
  templateUrl: './riceitem.component.html',
  styleUrls: ['./riceitem.component.css']
})
export class RiceitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
display(){
  document.write("order confirmed deliver soon")
}
}
