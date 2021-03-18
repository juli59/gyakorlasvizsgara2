import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['smart', 'reliable', 'good'];
  model= new Hero (18, 'Zeno', 'climbing', 'Kojak');
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
onSubmit() {
  this.submitted = true;
}
}

