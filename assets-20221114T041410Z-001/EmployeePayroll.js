// UC1
const remove =(node)=>{
    let empPayrollData = empPayrollList.find(empData => empData._id== node.id)
    if(!empPayrollData) return
    const index= empPayrollList.map(empData => empData._id)
        .indexOf(empPayrollData._id)
    empPayrollList.splice(index, 1)
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList))
    document.querySelector(".emp-count").textContent=empPayrollList.length
    createInnerHtml()
}
/// uc2
const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem('editEmp');
    isUpdate = employeePayrollJson ? true : false;
     if (!isUpdate) return;
     employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
}
    const setForm=() => {    
    setValue('#name', employeePayrollobj._name);    
    setSelectedValues('[name=profile]', employeePayrollobj._profilePic); 
    setSelectedValues('[name=gender]', employeePayrollobj._gender);
    setSelectedValues('[name=department]', employeePayrollobj._department); 
    setValue('#salary', employeePayrollobj._salary); 
    setTextValue('.salary-output', employeePayrollobj._salary);
    setValue('#notes', employeePayrollobj._note);
    let date= stringifyDate(employeePayroll0bj._startDate).split(" "); 
    setValue('#day, date[0]');
    setValue('month', date[1]);
    setValue('#year', date[2]);
    }
    const setSelectedValues=(propertyValue,value)=>{    
        let allItems= document.querySelectorAll(propertyValue);
        allItems.forEach(item => {    
            if(Array.isArray(value)) {
                 if (value.includes(item.value)) {
                    item.checked= true;
                 }
                }
        
            else if (item.value === value){
             item.checked= true;
            }
        })
    }