fetch("https://65357690c620ba9358ec80d8.mockapi.io/employee").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.id}</td>
        <td>${values.EmployeeName}</td>
        <td>${values.EmployeeAddress}</td>
        <td>${values.EmployeeEmailaddress}</td>
        <td>${values.PhoneNumber}</td>
        
    </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})