const { connectDb } = require("./connect-db");

const custRef = connectDb().collection("customers");

function getCustomersCol() {
  return custRef
    .get()
    .then((snapshot) => {
      const customers = [];
      snapshot.forEach((doc) => {
        customers.push({ id: doc.id, ...doc.data() });
      });
      return customers;
    })
    .catch(console.error);
}
//update
function getCustomer(customerId) {
   return custRef.doc(customerId).get()
    .then((doc) => {
        return doc.data()
    })
    
    .catch(console.error);
}

function addCustomer(customer) {
  return custRef
    .add(customer)
    .catch(console.error);
}

function updateCustomer(customerId, dataToUpdate) {
    return custRef
    .doc(customerId)
    .update(dataToUpdate)
}

module.exports = { getCustomersCol, addCustomer, updateCustomer, getCustomer };