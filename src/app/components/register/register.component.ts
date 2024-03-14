import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { CepConsultService } from 'src/app/services/cep-consult.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private cepService: CepConsultService) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if (form.valid) {
      this.router.navigate(['/success']);
    } else {
      alert('Invalid Form');
    }
  }

  getCepData(ev: any, f: NgForm){
    const cep = ev.target.value;
    if (cep.length !== '') {
      return this.cepService.getCep(cep).subscribe(result => {
        this.setAddress(result, f);
      });
    }else{
      return;
    }
  }

  setAddress(data: any, f: NgForm){
    f.form.patchValue({
      endereco: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf
    });
  }

}
