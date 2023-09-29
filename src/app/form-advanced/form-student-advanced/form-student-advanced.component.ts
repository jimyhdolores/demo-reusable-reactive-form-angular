import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IPersonData, IStudentAdvancedForm } from '../../model/person-data.model';
import { PersonDataAdvancedComponent } from '../person-data-advanced/person-data-advanced.component';
import { getFormControlValueAsType } from '../util/functions-form';

@Component({
	selector: 'app-form-student-advanced',
	standalone: true,
	imports: [
		MatCardModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		PersonDataAdvancedComponent
	],
	templateUrl: './form-student-advanced.component.html',
	styleUrls: ['./form-student-advanced.component.scss']
})
export class FormStudentAdvancedComponent {
	private _formBuilder = inject(NonNullableFormBuilder);

	formGroup = this._formBuilder.group<IStudentAdvancedForm>({
		doYouPayAttentionToClasses: this._formBuilder.control(false),
		doYouSubmitYourAssignmentsOnTime: this._formBuilder.control(false),
		missingClasses: this._formBuilder.control(false)
	});

	saveData() {
		// console.log(this.formGroup.getRawValue());

		// const data= this.formGroup.get('dataFather')?.value as unknown as IPersonData;
		const data = getFormControlValueAsType<IPersonData>(this.formGroup, 'dataFather');
		console.log(data?.names);
	}
}
