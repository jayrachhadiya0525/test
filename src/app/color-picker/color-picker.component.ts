import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  formGroup: FormGroup | any;

  ngOnInit() {
    this.formGroup = new FormGroup({
      color: new FormControl()
    });
  }
}
