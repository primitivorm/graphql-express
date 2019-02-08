import { Employee } from '../../models/index';
import { pubsub } from '../../subscriptions';

import { EmployeeInput } from '../../schema'

const getEmployee = function ({id}){
    if(!fakeDatabase[id]){
        throw new Error('no employee exists with id: ' + id)
    }
    return new Employee(id, fakeDatabase[id])
}

/*
    return Employee.create({
        BusinessEntityID: input.BusinessEntityID,
        NationalIDNumber: input.NationalIDNumber,
        LoginID: input.LoginID,
        OrganizationNode: input.OrganizationNode,
        OrganizationLevel: input.OrganizationLevel,
        JobTitle: input.JobTitle,
        BirthDate: input.BirthDate,
        MaritalStatus: input.MaritalStatus,
        Gender: input.Gender,
        HireDate: input.HireDate,
        SalariedFlag: input.SalariedFlag,
        VacationHours: input.VacationHours, 
        SickLeaveHours: input.SickLeaveHours,
        CurrentFlag: input.CurrentFlag,
        rowguid: input.rowguid,
        ModifiedDate: input.ModifiedDate
    })*/

const createEmployee = ({input}) => {
    //console.log(input)
    return {
        BusinessEntityID:"1",
        NationalIDNumber: "1234",
        LoginID: "primitivorm",
        OrganizationNode: 1,
        OrganizationLevel: 3,
        JobTitle: "Team Lead",
        BirthDate: "1985-07-18",
        MaritalStatus: "C",
        Gender: "M",
        HireDate: "2019-02-05",
        SalariedFlag: true,
        VacationHours: 10,
        SickLeaveHours: 0,
        CurrentFlag: true,
        rowguid: "abcd1234",
        ModifiedDate: "2019-02-05",
    }
}

const updateEmployee = function({id, employee}){
    if(!fakeDatabase[employee.LoginID]){
        throw new Error('no employee exists with LoginID: ' + employee.LoginID)
    }
    // This replace all old data, but some apps might want partial update
    fakeDatabase[employee.LoginID] = employee
    return new Employee(id, employee)
}

// If Message had any complex fields, we'd put them on this object.
class Message {
    constructor(id, {content, author}) {
      this.id = id;
      this.content = content;
      this.author = author;
    }
}

var fakeDatabase = {};

const createMessage = function({input}) {
    // Create a random id for our "database".
    //var id = require('crypto').randomBytes(10).toString('hex');
    console.log(input)
    var id = 1
    fakeDatabase[id] = input;
    return new Message(id, input);
  }

export { getEmployee, createEmployee, updateEmployee, createMessage}