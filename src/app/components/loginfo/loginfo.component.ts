import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//login service
import { LoginServiceService } from '../../services/login/login-service.service'
import { AlertService } from '../../services/alert/alert.service'

@Component({
  selector: 'app-loginfo',
  templateUrl: './loginfo.component.html',
  styleUrls: ['./loginfo.component.css']
})
export class LoginfoComponent implements OnInit {
	username:string ="";
	password:string = "";
	 loading = false;
	 returnUrl: string;


	constructor(private route: ActivatedRoute,
        		private router: Router,
				private loginService : LoginServiceService,
				private alertService: AlertService
				) { 
				this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

	}

	ngOnInit() {
	}

	login({user, valid}){

		if(valid){
			 //this.loginService.login(user.username, user.password)
			 this.loginService.login().subscribe( user => {
                	console.log("Response value=",user);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
		}else{
			console.log("Form is Invalid");
		}
	}
}
