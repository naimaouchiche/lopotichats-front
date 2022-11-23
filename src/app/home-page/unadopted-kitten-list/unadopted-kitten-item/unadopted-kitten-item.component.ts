import { Component, OnInit, Input } from '@angular/core';
import { KITTEN } from 'src/app/mock-pokemon-list';
import { Kitten } from 'src/app/models/kitten';

@Component({
  selector: 'app-unadopted-kitten-item',
  templateUrl: './unadopted-kitten-item.component.html',
  styleUrls: ['./unadopted-kitten-item.component.css']
})
export class UnadoptedKittenItemComponent implements OnInit {

  @Input()
  kitten! : Kitten ;

  kittenList: Kitten[] = KITTEN;

  constructor() { }

  ngOnInit(): void {
  }

}
