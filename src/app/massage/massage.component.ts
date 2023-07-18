import { Component } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent {
  // messages1: Message[] | any;

  // messages2: Message[] | any;

  // ngOnInit() {
  //   this.messages1 = [
  //     { severity: 'success', summary: 'Success', detail: 'Message Content' },
  //     { severity: 'info', summary: 'Info', detail: 'Message Content' },
  //   ];

  //   this.messages2 = [
  //     { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
  //     { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
  //   ];
  // }

  messages: Message[] | any;

  addMessages() {
    this.messages = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' }
    ];
  }

  clearMessages() {
    this.messages = [];
  }
}
