import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KittenService } from '../kitten.service';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-kitten-details-page',
  templateUrl: './kitten-details-page.component.html',
  styleUrls: ['./kitten-details-page.component.css']
})
export class KittenDetailsPageComponent implements OnInit {
  kitten!: Kitten;
  

  constructor(private route: ActivatedRoute, private service: KittenService, private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = + (params.get('id') || '');
      this.service.findCatById(id).subscribe( kitten => this.kitten = kitten) 

    })
  }
  onDelete(id: number): void {
    this.service.delete(id).subscribe(()=> this.router.navigate([""])); 
  }
  onAdopted(id:number,): void {
    this.service.adopted(id).subscribe( () => this.router.navigate([""]));
  }
}
