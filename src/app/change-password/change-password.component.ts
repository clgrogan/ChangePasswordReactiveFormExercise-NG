import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
})
export class ChangePasswordComponent {
  theForm = new FormGroup({
    password: new FormControl("", Validators.required),
    newPassword: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
  });

  //FormControl object properties
  get password() {
    return this.theForm.get("password");
  }
  get newPassword() {
    return this.theForm.get("newPassword");
  }
  get confirmPassword() {
    return this.theForm.get("confirmPassword");
  }
}
