import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IStudentAdvanced2Form } from '../../model/person-data.model';
import { PersonDataAdvanced2Component } from '../person-data-advanced-2/person-data-advanced-2.component';

@Component({
	selector: 'app-form-student-advanced-2',
	standalone: true,
	imports: [
		MatCardModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		PersonDataAdvanced2Component
	],
	templateUrl: './form-student-advanced-2.component.html',
	styleUrls: ['./form-student-advanced-2.component.scss']
})
export class FormStudentAdvanced2Component {
	private _formBuilder = inject(NonNullableFormBuilder);

	formGroup = this._formBuilder.group<IStudentAdvanced2Form>({
		doYouPayAttentionToClasses: this._formBuilder.control(false),
		doYouSubmitYourAssignmentsOnTime: this._formBuilder.control(false),
		missingClasses: this._formBuilder.control(false),
		dataFather: this._formBuilder.group({
			names: this._formBuilder.control('', { validators: [Validators.required] }),
			lastName: this._formBuilder.control('', { validators: [Validators.required] })
		}),
		dataMother: this._formBuilder.group({
			names: this._formBuilder.control('', { validators: [Validators.required] }),
			lastName: this._formBuilder.control('', { validators: [Validators.required] })
		})
	});

	saveData(): void {
		console.log(this.formGroup.getRawValue());
	}
}
