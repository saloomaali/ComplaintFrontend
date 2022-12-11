import { Component } from '@angular/core';

@Component({
  selector: 'app-uesr-register',
  templateUrl: './uesr-register.component.html',
  styleUrls: ['./uesr-register.component.css']
})
export class UesrRegisterComponent {

  name = ""
  
  phnNo = ""
  emailId = ""
  password = ""
  username = ""
  confirmPassword = ""

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any = {

      "name" : this.name,
      
      "phnNo" : this.phnNo,
      "emailId" : this.emailId,
      "password" : this.password,
      "username" : this.username,
      "confirmPassword" : this.confirmPassword
      
    }

    this.api.addUser(data).subscribe(

      (response:any)=>{

        if (response.status == "success") {
          alert("User Registered Successfully")
          
        } 
      }
    )

  }

}
