import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ModesService {

  constructor(private http: Http) {}

  getSensorsData():Observable<any> {
    var url = "";
    return this.http.get(url)
      .map((res:Response) => res.json());
  }
}
