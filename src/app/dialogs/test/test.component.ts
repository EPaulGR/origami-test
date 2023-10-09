import { Component, Inject, Injectable, OnInit, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as moment from 'moment';
import { TelefonoPipe } from 'src/app/pipes/telefono.pipe';
import { AppService } from 'src/app/app.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-test',
  standalone: true,
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  imports: [CommonModule, MatDialogModule, MatButtonModule, TelefonoPipe, HttpClientModule],
})
export class TestComponent implements OnInit {

  moment: any = moment
  res: any;

  constructor(
    private _dialogRef: MatDialogRef<TestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private _appService: AppService,
  ){
    console.log(this.data);
  }
  
  ngOnInit(): void {
    this.getData();
  }
  
  getData(): void {
    this._appService.obtenerZip().subscribe({
      next: (res) => {
        console.log(res);
        this.res = res.AddressList
      },
      error: (err) => {console.log(err)},
    });
  }

}
