import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KittenService } from '../kitten.service';
import { Kitten } from '../models/kitten';


@Component({
  selector: 'app-update-kitten',
  templateUrl: './update-kitten.component.html',
  styleUrls: ['./update-kitten.component.css']
})
export class UpdateKittenComponent implements OnInit {
    id!: number;

  kittenUpdate: Kitten = {
    id:0,
    name:"",
    age: 0,
    color:"",
    sex:"",
    race:"",
    urlImage:"",
    isAdopted:false,
  }

  constructor(private route: ActivatedRoute, private routeur: Router, private kittenService: KittenService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = + (params.get('id') || '');
      this.kittenService.findCatById(this.id).subscribe( kitten => this.kittenUpdate = kitten) 

    })
  }
  update(){
    console.log(this.kittenUpdate);
    
    this.kittenService.update(this.id, this.kittenUpdate
      
      ).subscribe(()=>this.routeur.navigate([""]))
  }
  
}
