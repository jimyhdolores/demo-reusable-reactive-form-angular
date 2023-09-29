import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IPersonDataForm } from '../../model/person-data.model';

@Component({
	selector: 'app-person-data-advanced',
	standalone: true,
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
	templateUrl: './person-data-advanced.component.html',
	styleUrls: ['./person-data-advanced.component.scss'],
	viewProviders: [
		{
			provide: ControlContainer,
			useFactory: () => inject(ControlContainer, { skipSelf: true })
		}
	]
})
export class PersonDataAdvancedComponent implements OnInit {
	@Input({ required: true }) title = '';
	@Input({ required: true }) controlKey = '';

	private parentContainer = inject(ControlContainer);
	private _formBuilder = inject(NonNullableFormBuilder);

	ngOnInit(): void {
		this.parentFormGroup.addControl(
			this.controlKey,
			this._formBuilder.group<IPersonDataForm>({
				names: this._formBuilder.control('', { validators: [Validators.required] }),
				lastName: this._formBuilder.control('', { validators: [Validators.required] })
			})
		);
	}

	get parentFormGroup() {
		return this.parentContainer.control as FormGroup;
	}
}
