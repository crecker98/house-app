import { Component, Input } from '@angular/core';
import { HousingLocation } from '../models/housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
