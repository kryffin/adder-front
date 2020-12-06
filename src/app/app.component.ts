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
  private _temp: number;
  private _rep: number;

  constructor(private _http: HttpClient) {
    this._cur = 0;
    this._temp = 0;
    this._rep = 0;
  }

  get rep(): number {
    return this._rep;
  }

  get cur(): number {
    return this._cur;
  }

  // for some reason {{cur.toFixed(2)}} worked but gave a console error
  // for some reason {{cur | number: 2}} did not work, says cur is a string but no idea why
  // so made this method to manually limit to 2 the number of decimals
  fix(num: number): string {
    return num.toFixed(2);
  }

  // dynamically changes the temp variable in order to prevent divison by zero with checkTempNonZero
  changeTemp(num: string): void {
    this._temp = Number.parseFloat(num);
  }

  // used to dynamically disable the divide button if temp = 0
  checkTempNonZero(): boolean {
    return this._temp != 0.;
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
