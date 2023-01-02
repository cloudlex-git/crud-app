import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{



  formGroup!: FormGroup;
  constructor(private authService:AuthServiceService){ }
  ngOnInit() {
    this.initForm()
   }
  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
  }

  loginProcess(){
    if (this.formGroup.valid){
      alert('Valid');
      this.authService.login(this.formGroup.value).subscribe(result=>{
        alert('result=' + JSON.stringify(result));
      })
    }
  }


  /*
 loginProcess(){
  alert('Exec');
  if (this.formGroup.valid){
    alert('2');
    this.authService.login(this.formGroup.value).subscribe(result=>{
      alert('3');
      if (result.sucess){
        console.log(result);
        alert(result.message);
      }else{
        alert(result.message);
      }
    })

  }
}
*/
}
