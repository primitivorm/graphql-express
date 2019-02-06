import { PurchaseOrderHeaderResolve } from './associations'
import { employee } from './query'

import { createEmployee } from './mutation'

const resolvers = {
    Query: {
        employee
    },
    PurchaseOrderHeader: PurchaseOrderHeaderResolve,
    Mutation: {
        createEmployee
    }
}

export default resolvers