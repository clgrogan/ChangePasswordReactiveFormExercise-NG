import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PasswordValidators } from "../common/validators/password.validators";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
})
export class ChangePasswordComponent {
  theForm = new FormGroup({
    password: new FormControl(
      "",
      Validators.required,
      PasswordValidators.mustBeValid
    ),
    newPassword: new FormControl("", Validators.required),
    confirmPassword: new FormControl(
      "",
      Validators.required,
      PasswordValidators.mustMatchNewPassword
    ),
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
