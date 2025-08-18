import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/auth.service';
import { ToastService } from './toast-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;
  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    public toastService: ToastService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['alexandre@acal.com', [Validators.required]],
      password: ['#$!4eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', [Validators.required]],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit() {
    this.submitted = true;

    this.authenticationService.login(this.f['email'].value, this.f['password'].value)
      .subscribe(
        (data: any) => {
        if (data.status == 'success') {
          sessionStorage.setItem('currentUser', JSON.stringify(data.data));
          sessionStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        } else {
          this.toastService.show(data.data, { classname: 'bg-danger text-white', delay: 15000 });
        }
      }, 
      (error) =>{
        this.toastService.show(error.error.data, { classname: 'bg-danger text-white', delay: 15000 });
      }
    );
  }
  
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

    get f() {
    return this.loginForm.controls;
  }
}
