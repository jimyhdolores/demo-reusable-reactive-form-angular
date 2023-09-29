import { NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-person-data-advanced-2',
	standalone: true,
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgIf],
	templateUrl: './person-data-advanced-2.component.html',
	styleUrls: ['./person-data-advanced-2.component.scss']
})
export class PersonDataAdvanced2Component implements OnInit {
	@Input({ required: true }) title = '';
	@Input({ required: true }) controlKey = '';

	private parentContainer = inject(ControlContainer);
	formGroup!: FormGroup;
	ngOnInit(): void {
		this.formGroup = this.parentFormGroup;
	}

	get parentFormGroup() {
		return this.parentContainer.control?.get(this.controlKey) as FormGroup;
	}
}
