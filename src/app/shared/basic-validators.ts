import { FormControl } from '@angular/forms';

export class BasicValidators {

  static email (control: FormControl){

    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }

  static phone (control: FormControl){
    let PHONE_REGEXP = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    
    return PHONE_REGEXP.test(control.value) ? null : {
      validatePhone: {
        valid: false
      }
    };
  }

  static zipcode (control: FormControl){
    let ZIPCODE_REGEXP = /^([0-9]){5}([-])([0-9]){3}$/;
    
    return ZIPCODE_REGEXP.test(control.value) ? null : {
      validateZipCode: {
        valid: false
      }
    };
  }
}
