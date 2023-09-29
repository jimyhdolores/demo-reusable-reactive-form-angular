import { Component, Input, forwardRef, inject } from '@angular/core';
import {
	AbstractControl,
	ControlValueAccessor,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	NonNullableFormBuilder,
	ReactiveFormsModule,
	ValidationErrors,
	Validator,
	Validators
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IPersonData, IPersonDataForm } from '../../model/person-data.model';

@Component({
	selector: 'app-person-data',
	standalone: true,
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
	templateUrl: './person-data.component.html',
	styleUrls: ['./person-data.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PersonDataComponent),
			multi: true
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => PersonDataComponent),
			multi: true
		}
	]
})
export class PersonDataComponent implements ControlValueAccessor, Validator {
	@Input({ required: true }) title = '';
	// private _formBuilder = inject(FormBuilder);
	private _formBuilder = inject(NonNullableFormBuilder);

	private _onChanged: Function = (_value: { name: string; rating: number }) => {};
	private _onTouch: Function = (_value: { name: string; rating: number }) => {};

	formGroup = this._formBuilder.group<IPersonDataForm>({
		names: this._formBuilder.control('', { validators: [Validators.required] }),
		lastName: this._formBuilder.control('', { validators: [Validators.required] })
	});

	constructor() {
		this.formGroup.valueChanges.subscribe(() => {
			const value = this.formGroup.value;
			this._onChanged(value);
			this._onTouch(value);
		});
	}
	validate(_control: AbstractControl<any, any>): ValidationErrors | null {
		return this.formGroup.valid ? null : { personData: true };
	}
	registerOnValidatorChange(fn: () => void): void {
		this._onChanged = fn;
	}
	writeValue(obj: IPersonData): void {
		if (obj) {
			this.formGroup.setValue(obj);
		}
	}
	registerOnChange(fn: Function): void {
		this._onChanged = fn;
	}
	registerOnTouched(fn: Function): void {
		this._onTouch = fn;
	}
	setDisabledState(isDisabled: boolean): void {
		isDisabled ? this.formGroup.disable() : this.formGroup.enable();
	}
}
