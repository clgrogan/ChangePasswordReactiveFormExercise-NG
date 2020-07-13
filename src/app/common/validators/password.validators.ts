import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
  static mustBeValid(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      //set Timeout to emulate delay for a server call.
      setTimeout(() => {
        if ((control.value as string) !== "1234") {
          resolve({ mustBeValid: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
  static mustMatchNewPassword(
    control: AbstractControl
  ): ValidationErrors | null {
    console.log("mustMatchNewPassword:");
    console.log(control.parent);
    return null;
  }
}
