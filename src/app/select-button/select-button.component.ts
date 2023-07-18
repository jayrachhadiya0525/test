import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent {
  value: any;

  justifyOptions: any[] = [
    { icon: 'pi pi-align-left', justify: 'Left' },
    { icon: 'pi pi-align-right', justify: 'Right' },
    { icon: 'pi pi-align-center', justify: 'Center' },
    { icon: 'pi pi-align-justify', justify: 'Justify' }
  ];


  formGroup!: FormGroup;

  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl('on')
    });
  }


  // checked: boolean = false;
  checked: boolean = false;
}
