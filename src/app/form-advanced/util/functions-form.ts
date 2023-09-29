import { FormGroup } from '@angular/forms';

export const getFormControlValueAsType = <T>(formGroup: FormGroup, controlName: string): T | null => {
	const control = formGroup.get(controlName);
	if (control) {
		return control.value as T;
	}
	return null;
};
