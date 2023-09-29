import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IStudentForm } from '../../model/person-data.model';
import { PersonDataComponent } from '../person-data/person-data.component';

@Component({
	selector: 'app-form-student-middle',
	standalone: true,
	imports: [
		MatCardModule,
		MatFormFieldModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		PersonDataComponent
	],
	templateUrl: './form-student-middle.component.html',
	styleUrls: ['./form-student-middle.component.scss']
})
export class FormStudentMiddleComponent {
	private _formBuilder = inject(NonNullableFormBuilder);

	formGroup = this._formBuilder.group<IStudentForm>({
		doYouPayAttentionToClasses: this._formBuilder.control(false),
		doYouSubmitYourAssignmentsOnTime: this._formBuilder.control(false),
		missingClasses: this._formBuilder.control(false),
		dataFather: this._formBuilder.control(null, { validators: [Validators.required] }),
		dataMother: this._formBuilder.control({ value: null, disabled: true }, { validators: [Validators.required] })
	});

	saveData(): void {
		console.log(this.formGroup.getRawValue());
	}
}
