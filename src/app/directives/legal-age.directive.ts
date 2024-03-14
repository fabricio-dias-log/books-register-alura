import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[legalAgeValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LegalAgeDirective,
      multi: true
    }

  ]
})

export class LegalAgeDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const birthDate = control.value;
    const birthYear = new Date(birthDate).getFullYear();
    const birthYearMore18 = birthYear + 18;
    const currentYear = new Date().getFullYear();

    const bigger = birthYearMore18 <= currentYear;

    return bigger ? null : { legalAgeValidator: true };
  }

}
