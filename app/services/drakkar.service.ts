import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {apiURL} from '../settings';

@Injectable()
export class DrakkarService {

  constructor(private http: Http) {}

  getInfo():Observable<any> {
    var url = apiURL + 'info';
    return this.http.get(url)
      .map((res:Response) => res.json());
  }
}
