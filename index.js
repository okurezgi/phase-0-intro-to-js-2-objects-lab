// Write your solution in this file!
const employee = {
    name: 'Ezgi',
    streetAddress: 'Cherry Street, No:1'
}

function updateEmployeeWithKeyAndValue(obj,key,value){
 const newEmployee = {...obj}
 newEmployee[key]=value
 return newEmployee;
}
updateEmployeeWithKeyAndValue(employee,'name','Ece');

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value)
{
    obj[key]=value;
    return obj
};

destructivelyUpdateEmployeeWithKeyAndValue(employee,'name','Esra');


function deleteFromEmployeeByKey(obj,key){
    const newEmployee2 = {...obj};
    delete newEmployee2[key]
    return newEmployee2
   }
  
deleteFromEmployeeByKey(employee,'name');

function destructivelyDeleteFromEmployeeByKey(obj,key){
    
    delete obj[key]
    return obj
   }
  
destructivelyDeleteFromEmployeeByKey(employee,'name');


