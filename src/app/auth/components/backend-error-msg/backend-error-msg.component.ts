import { Component, Input, OnInit } from '@angular/core';
import { BackendErros } from 'src/app/interfaces/backend-erros';

@Component({
  selector: 'app-backend-error-msg',
  templateUrl: './backend-error-msg.component.html',
  styleUrls: ['./backend-error-msg.component.scss'],
})
export class BackendErrorMsgComponent implements OnInit {
  @Input('backedndErrors') backedndErrorsProps: BackendErros | null = {};
  errorMsgs?: string[];

  constructor() {}

  ngOnInit(): void {
    if (!!this.backedndErrorsProps) {
      this.errorMsgs = Object.keys(this.backedndErrorsProps).map(
        (keyName: string) => {
          const msgs = this.backedndErrorsProps
            ? this.backedndErrorsProps[keyName]
            : {};
          return `[${keyName}]:  ${msgs}`;
        }
      );
    }
  }
}
