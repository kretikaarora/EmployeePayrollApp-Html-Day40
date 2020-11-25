//as soon the page loades we want this inner html function to be called
window.addEventListener('DOMContentLoaded',(event)=>
{
    createInnerHtml();
});

//creating inner html to dynamically input data during run time from js file
//we are using template literals which allows embedded expression
//template literals are enclosed by a backticl ``
//we can also inject expressions in template literal using $ sign
const createInnerHtml=()=>{
    //we are defining the header here in a const
    const headerHtml= "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    //now where ever we want to use this headerhtml inside templete literals we can use with a dollar sign
    //if we dont want to use $ sign we can directly input it like we did for table rows
    const innerHTML= `${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="..\assets\Ellipse 1.png"></td>
        <td>Kretika Arora</td>
        <td>Female</td>
        <td>
            <div class='dept-label'>HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>410000</td>
        <td>22 November 2020</td>
        <!--remove(this) and update(this) func will be added later on-->
        <!--when we click on these images this func will perform-->
        <td>
            <img id="1" onclick= "remove(this)" alt="delete" src="..\assets\delete-black-18dp (1).svg">
            <img id="1" onclick= "update(this)" alt="edit" src="..\assets\create-black-18dp (1).svg">
        </td>        
</tr>`;
//passing the table id using query selector and passing it to inbuilt innerHTML
document.querySelector('#table-display').innerHTML=innerHTML;
}
