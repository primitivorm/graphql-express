import { PurchaseOrderHeaderResolve } from './associations'
import { employee } from './query'

import { createEmployee, createMessage } from './mutation'

//console.log(createEmployee)

const resolvers = {
    Query: {
        employee
    },
    PurchaseOrderHeader: PurchaseOrderHeaderResolve,
    Mutation: {
        createEmployee,
        createMessage
    }
}

export default resolvers