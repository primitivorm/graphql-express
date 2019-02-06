import Sequelize from 'sequelize';
import { sqlite as db } from './connectors';
import casual from 'casual';
import { times } from 'lodash';

const Employee = db.define('Employee', {
    BusinessEntityID: {type: Sequelize.STRING},
    NationalIDNumber: {type: Sequelize.STRING},
    LoginID: {type: Sequelize.STRING},
    OrganizationNode: {type: Sequelize.INTEGER},
    OrganizationLevel: {type: Sequelize.INTEGER},
    JobTitle: {type: Sequelize.STRING},
    BirthDate: {type: Sequelize.STRING},
    MaritalStatus: {type: Sequelize.STRING},
    Gender: {type: Sequelize.STRING},
    HireDate: {type: Sequelize.STRING},
    SalariedFlag: {type: Sequelize.BOOLEAN},
    VacationHours: {type: Sequelize.INTEGER}, 
    SickLeaveHours: {type: Sequelize.INTEGER},
    CurrentFlag: {type: Sequelize.BOOLEAN},
    rowguid: {type: Sequelize.STRING},
    ModifiedDate: {type: Sequelize.STRING},
})

export { Employee }