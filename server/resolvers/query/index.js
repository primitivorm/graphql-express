import { Employee } from '../../models/index'

/*
const employee = async (obj, args, context) => {
    const employee = await Employee.findOne({
        where: {
            BusinessEntityID: {
                [Op.eq]: args.BusinessEntityID
            }
        }
    });
    return employee.dataValues;
}


const employee = (obj, args, context) => {
	return Employee.findOne({
		where: {
			id: args.id
		}
	}).then(employee => employee.dataValues);
};

*/

const employee = (obj, args, context) => {
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
};

export { employee }