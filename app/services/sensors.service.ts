import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {apiURL} from '../settings';


@Injectable()
export class SensorsService {

  constructor(private http: Http) {}

  getSensorsData():Observable<any> {
    var url = apiURL;
    return this.http.get(url)
      .map((res:Response) => res.json());
  }
}
