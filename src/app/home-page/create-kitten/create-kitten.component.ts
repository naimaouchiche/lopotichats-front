import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KittenService } from 'src/app/kitten.service';
import { Kitten } from 'src/app/models/kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {
  

  kittenCreate: Kitten = {
    id:0,
    name:"",
    age: 0,
    color:"",
    sex:"",
    race:"",
    urlImage:"",
    isAdopted:false,
  }

  constructor( private kittenService: KittenService, private routeur: Router) { }

  ngOnInit(): void {
  }

  createKitten() {
    this.kittenService.createCat(this.kittenCreate).subscribe(() => this.routeur.navigate([""]));
  }

  
}
