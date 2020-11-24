// employee payroll is an array which will contain objects read from local storage
// using this we will populate th table
let empPayrollList;
//as soon the page loades we want this inner html function to be called
window.addEventListener('DOMContentLoaded',(event)=>
{
    //caling to read from local storage
    empPayrollList= getEmployeePayrollDataFromStorage();
    createInnerHtml();
    //updating the count of elements by setting textcontent to lenth of
    document.querySelector(".emp-count").textContent= empPayrollList.length;
});

//calling from eventlistener as soon as the web page is loaded
const getEmployeePayrollDataFromStorage= ()=>{
    //it will go the local storage fetch the info if it is there convert to json otherwise return empty list
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

//creating inner html to dynamically input data during run time from js file
//we are using template literals which allows embedded expression
//template literals are enclosed by a backticl ``
//we can also inject expressions in template literal using $ sign
const createInnerHtml=()=>{
    if(empPayrollList.length==0) return;
    const headerHtml= "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    //using template literal
    let innerHtml= `${headerHtml}`;
    for(const empPayrollData of empPayrollList){
    innerHtml= `${innerHtml}
    <tr>
          <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
          <td>${empPayrollData._name}</td>
          <td>${empPayrollData._gender}</td>
          <td>${getDeptHtml(empPayrollData._department)}
          </td>
          <td>${empPayrollData._salary}</td>
          <td>${empPayrollData._startDate}</td>
          <td><img id="${empPayrollData._id}" onclick= "remove(this)" alt="delete" src="../assets/delete-black-18dp (1).svg">
            <img id="${empPayrollData.id}" onclick= "update(this)" alt="edit" src="../assets/create-black-18dp (1).svg "></td>
    </tr>`;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}

//since we can have multiple departments so using for loop fetching each department
const getDeptHtml= (deptList)=>
{
    let deptHtml='';
    for(const dept of deptList)
    {
        //the format is similar like we were doing for inner html
        //we are printing value for each dept in json file
        deptHtml= `${deptHtml}
        <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}  

//creating a employeepayroll data in json format called from createinnerhtml function
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {       
        _name: 'Daisy',
        _gender: 'female',
        _department: [
            'Engineering',
            'Finance'
        ],
        _salary: '500000',
        _startDate: '29 Oct 2019',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: '..\assets\Ellipse 1.png'
      },
      {
        _name: 'James',
        _gender: 'male',
        _department: [
            'Sales'
        ],
        _salary: '400000',
        _startDate: '15 Nov 2016',
        _note: '',
        _id: new Date().getTime() + 1,
        _profilePic: '..\assets\Ellipse -5.png'
      }
    ];
    return empPayrollListLocal;
  }
  
 