import { Employee } from '../../models/index';
import { pubsub } from '../../subscriptions';

const getEmployee = function ({id}){
    if(!fakeDatabase[id]){
        throw new Error('no employee exists with id: ' + id)
    }
    return new Employee(id, fakeDatabase[id])
}

const createEmployee = ({employee}) => {
    return Employee.create({
        BusinessEntityID: employee.BusinessEntityID,
        NationalIDNumber: employee.NationalIDNumber,
        LoginID: employee.LoginID,
        OrganizationNode: employee.OrganizationNode,
        OrganizationLevel: employee.OrganizationLevel,
        JobTitle: employee.JobTitle,
        BirthDate: employee.BirthDate,
        MaritalStatus: employee.MaritalStatus,
        Gender: employee.Gender,
        HireDate: employee.HireDate,
        SalariedFlag: employee.SalariedFlag,
        VacationHours: employee.VacationHours, 
        SickLeaveHours: employee.SickLeaveHours,
        CurrentFlag: employee.CurrentFlag,
        rowguid: employee.rowguid,
        ModifiedDate: employee.ModifiedDate
    })
}

const updateEmployee = function({id, input}){
    if(!fakeDatabase[input.LoginID]){
        throw new Error('no employee exists with LoginID: ' + input.LoginID)
    }
    // This replace all old data, but some apps might want partial update
    fakeDatabase[input.LoginID] = input
    return new Employee(id, input)
}

export { getEmployee, createEmployee, updateEmployee}