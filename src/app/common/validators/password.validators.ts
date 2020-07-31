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
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      if (
        (control.value as string) !=
        (control.parent.value.newPassword as string)
      ) {
        resolve({ mustMatchNewPassword: true });
      } else {
        resolve(null);
        // resolve(null);
      }
    });
  }
}
