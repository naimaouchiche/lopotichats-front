import { Component, OnInit } from '@angular/core';
import { KittenService } from 'src/app/kitten.service';
import { Kitten } from 'src/app/models/kitten';

@Component({
  selector: 'app-adopted-kitten-list',
  templateUrl: './adopted-kitten-list.component.html',
  styleUrls: ['./adopted-kitten-list.component.css']
})
export class AdoptedKittenListComponent implements OnInit {

  adoptedKittens: Kitten[] = [];

  constructor(private kittenServive: KittenService) { }

  ngOnInit(): void {
    this.kittenServive.findAllAdopdtedCats().subscribe(kittens => this.adoptedKittens = kittens);
  }

}
