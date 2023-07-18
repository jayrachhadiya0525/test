import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  formGroup: FormGroup | any;

  ngOnInit() {
    this.formGroup = new FormGroup({
      values: new FormControl<string[] | null>(null)
    });
  }
}
