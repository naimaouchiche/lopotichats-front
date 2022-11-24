import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from 'src/app/models/kitten';

@Component({
  selector: 'app-adopted-kitten-item',
  templateUrl: './adopted-kitten-item.component.html',
  styleUrls: ['./adopted-kitten-item.component.css']
})
export class AdoptedKittenItemComponent implements OnInit {

  @Input()
  kitten!: Kitten

  constructor() { }

  ngOnInit(): void {
  }

}
