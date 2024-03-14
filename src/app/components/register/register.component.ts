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

  getCepData(ev: any){
    const cep = ev.target.value;

    return this.cepService.getCep(cep).subscribe(result => {
      console.log(result);
    });
  }

}
