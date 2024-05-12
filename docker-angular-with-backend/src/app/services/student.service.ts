import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly END_POINT: string = `${environment.apiUrl}/message`;
  // private readonly END_POINT: string = `http://localhost:9090/message`;
  // private readonly END_POINT: string = 'http://ip172-18-0-38-cnm6lqol2o9000et4bfg-8080.direct.labs.play-with-docker.com/api/student';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get<any>(this.END_POINT);
  }

}
