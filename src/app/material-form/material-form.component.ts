import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CityDialogComponent } from '../city-dialog/city-dialog.component';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      animal: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CityDialogComponent, {
      width: '250px',
      disableClose: true,
      data: { name: this.secondFormGroup.get('city').value }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.secondFormGroup.get('address').setValue(result);
    });
  }

  submitData() {
    console.log(this.firstFormGroup.value);
  }

}

export interface Animal {
  name: string;
  sound: string;
}