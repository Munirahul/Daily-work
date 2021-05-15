import { Component } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent{
    //employee = {name: 'Bharath', age: 21, address: 'Chennai'}
    employees = EMPLOYEES
        
}