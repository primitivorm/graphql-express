import { Employee } from '../models';

/*
const ChatroomResolve = {
	users(obj) {
		return User.findAll({
			where: {
				chatroomId: obj.id
			}
		});
	},
	messages(obj) {
		return Message.findAll({
			where: {
				chatroomId: obj.id
			},
			order: [
				['createdAt', 'DESC']
			]
		});
	}
}


const EmployeeResolve = {
	createdBy(obj) {
		return Employee.findOne({
			where: {
				BusinessEntityID: obj.BusinessEntityID
			}
		});
	}
}


*/

const PurchaseOrderHeaderResolve = {
    Employee (obj) {
        return Employee.findOne({
			where: {
				BusinessEntityID: obj.BusinessEntityID
			}
		})
    }    
}

export { PurchaseOrderHeaderResolve };