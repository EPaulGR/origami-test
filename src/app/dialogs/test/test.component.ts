import { Component, Inject, Injectable, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as moment from 'moment';
import { TelefonoPipe } from 'src/app/pipes/telefono.pipe';


@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  imports: [CommonModule, MatDialogModule, MatButtonModule, TelefonoPipe],
})
export class TestComponent {

  moment: any = moment

  constructor(
    private _dialogRef: MatDialogRef<TestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(this.data)
  }

}
