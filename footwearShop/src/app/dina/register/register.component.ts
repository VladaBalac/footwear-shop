import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { ServisService } from '../service/servis.service';

import { Log } from '../model/log';
import { logServeBack } from '../model/logServeBack';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registriForm :FormGroup;
	registriUser :Log;


  constructor(private servis: ServisService, private fb: FormBuilder) {
  	this.createForm();
  }

  createForm(){
  	this.registriForm = this.fb.group({
  		'userName': ["", [Validators.required]],
  		'password': ["", [Validators.required]],
  		'rPassword': ["", [Validators.required]]
  	})
  }


  repeatPassword(): boolean {
  	let repPassword : Log = new Log (this.registriForm.value);
  	console.log(repPassword.password, repPassword.rPassword);
  	if(repPassword.password != repPassword.rPassword)
  		return true;
  	
  	
  }

  ngOnInit() {
  }

  comfirm(){
  	let add : Log = new Log(this.registriForm.value);
  	this.servis.addUser(add).subscribe(res =>{
  		this.registriForm.reset();
  		alert("You'r register is success")
  	})
  }


}
