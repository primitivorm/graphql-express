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
*/

const employee = (obj, args, context) => {
	return Employee.findOne({
		where: {
			id: args.id
		}
	}).then(employee => employee.dataValues);
};

export { employee }