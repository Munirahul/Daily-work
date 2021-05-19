import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
    //Dependency Injection inside the Constructor
    constructor(private employeeService: EmployeeService){}
    ngOnInit(): void{
         this.employeeService.getAllEmployees().subscribe(data =>{
             this.employees = data;
         })
    }
    //employee = {name: 'Bharath', age: 21, address: 'Chennai'}
    employees: Employee[];
        
}