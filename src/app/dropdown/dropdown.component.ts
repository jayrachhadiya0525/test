import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  cities: City | any;

  formGroup: FormGroup | any;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | any>(null)
    });
  }
}
