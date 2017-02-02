import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BenefitsService {
  data :any;
  id: number;

  constructor(public http: Http) {
    console.log('Hello BenefitsService Provider');
  }

  load(id) {
    this.id = id;
  if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    console.log(this.id);
    let endPoint = 'http://benefit-lacaja.herokuapp.com/api/benefits/'+this.id+'?api_token=9db19FZ9jac1kVoFnxCiYja7fBiHWT1TCGvDXQZpHLpwkJqFpfz5qlVkNgHM';
    console.log(endPoint);
    this.http.get(endPoint)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
          this.data = data;
          resolve(this.data);
      });
  });
}

}
