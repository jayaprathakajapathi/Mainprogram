import { Component, OnInit } from '@angular/core';
import { ItemhttpserviceService } from '../itemhttpservice.service';

@Component({
  selector: 'app-itemhttp',
  templateUrl: './itemhttp.component.html',
  styleUrls: ['./itemhttp.component.css']
})
export class ItemhttpComponent implements OnInit {
public itemFromService :any[] =[]
  constructor(private itemHttpService:ItemhttpserviceService) { }

  ngOnInit(): void {
this.itemHttpService.getItems().subscribe(data =>
  this.itemFromService=data)

  }

}
