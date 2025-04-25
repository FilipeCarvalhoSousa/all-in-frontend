import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-membros-form',
  templateUrl: './membros-form.component.html',
  styleUrls: ['./membros-form.component.scss']
})
export class MembrosFormComponent {

  constructor(private _formBuilder: FormBuilder) { }

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  cleanForm() {}

  save() {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  // Add any methods or properties needed for the component here
}
