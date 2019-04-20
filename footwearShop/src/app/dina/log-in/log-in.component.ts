import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ServisService } from '../service/servis.service';

import { Log } from '../model/log';
import { logServeBack } from '../model/logServeBack';

@Component({
	selector: 'app-log-in',
	templateUrl: './log-in.component.html',
	styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

	log :Log;
	arrayLog : Log[];
	formLogin :FormGroup;

	constructor(private fb :FormBuilder, private r : Router, private servis :ServisService) {
		this.createForm();
	}

	createForm(){
		this.formLogin = this.fb.group({
			'userName': '',
			'password': ''
		});
	}

	ngOnInit() {
		this.refresh();
	}

	refresh(){
		this.servis.getLogs().subscribe(res => {
			this.arrayLog = res.log;
			// console.log(this.arrayLog[0])
		})
	}

	logIn(){
		let proveri :Log = new Log (this.formLogin.value);
		console.log(proveri);
		for(let i = 0; i < this.arrayLog.length; i++){
			if(proveri.userName == this.arrayLog[i].userName && proveri.password == this.arrayLog[i].password){
				this.r.navigate(['/buy']);
				return;
			}
		}
		alert("Do you forget your user name of password")
	}

}
