import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../dialogs/test/test.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [provideNgxMask()],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule,
            MatDatepickerModule, MatNativeDateModule, FormsModule, MatInputModule, NgxMaskDirective,
            MatButtonToggleModule, MatRippleModule],
})

export class HomeComponent implements OnInit {
  
  form: FormGroup;
  valor = 'activo';
  constructor(
    private _matDialog: MatDialog,
    private _formBuilder: FormBuilder,
  ) {
    this.form = this._formBuilder.group({});
  }
  
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fecha: ['', [Validators.required,]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      correo: ['', [Validators.required, Validators.email]],
    });

    // this.openTest()
    
  }

  openTest(): void {
    const _dialogRef = this._matDialog.open(TestComponent, {
      width: '550px',
      disableClose: true,
      data: this.form.value,
    });
  }

  enviar(): void {
    this.openTest();
  }
}
