import { Component, OnInit } from '@angular/core';
import { Employees } from '../models/employees';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
Employees = Employees;

}
