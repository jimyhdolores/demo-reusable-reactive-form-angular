import { Component } from '@angular/core';
import { FormStudentAdvanced2Component } from './form-advanced-2/form-student-advanced-2/form-student-advanced-2.component';
import { FormStudentAdvancedComponent } from './form-advanced/form-student-advanced/form-student-advanced.component';
import { FormStudentMiddleComponent } from './form-middle/form-student-middle/form-student-middle.component';
import { FormStudentBasicComponent } from './form-student-basic/form-student-basic.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		FormStudentBasicComponent,
		FormStudentMiddleComponent,
		FormStudentAdvancedComponent,
		FormStudentAdvanced2Component
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
