import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.css']
})
export class InputSwitchComponent {
  formGroup: FormGroup | undefined;

  ngOnInit() {
    this.formGroup = new FormGroup({
      checked: new FormControl<boolean>(false)
    });
  }
}
