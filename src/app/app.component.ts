import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adder-front';

  private _cur: number;
  private _rep: number;

  constructor(private _http: HttpClient) {
    this._cur = 0;
    this._rep = 0;
  }

  get rep(): number {
    return this._rep;
  }

  get cur(): number {
    return this._cur;
  }

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  setCurrent(num: string): void {
    this._http.post<number>("http://localhost:8080/adder/current", num, this.httpOptions).subscribe(_ => this._cur = _);
  }

  add(num: string): void {
    this._http.get<number>("http://localhost:8080/adder/add?num=" + num).subscribe(_ => this._rep = _);
  }

  sub(num: string): void {
    this._http.get<number>("http://localhost:8080/adder/sub?num=" + num).subscribe(_ => this._rep = _);
  }

  time(num: string): void {
    this._http.get<number>("http://localhost:8080/adder/time?num=" + num).subscribe(_ => this._rep = _);
  }

  div(num: string): void {
    this._http.get<number>("http://localhost:8080/adder/div?num=" + num).subscribe(_ => this._rep = _);
  }

}
