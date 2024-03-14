import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { CepConsultService } from '../services/cep-consult.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[cepValidate]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: ValidateCepDirective, multi: true}
  ]
})
export class ValidateCepDirective implements AsyncValidator {

  constructor(private cepConsultService: CepConsultService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      const cep = control.value;

      return this.cepConsultService.getCep(cep).pipe(map(
        (result: any) => result.erro ? {cepValidate: true} : null
      ))
  }
}
