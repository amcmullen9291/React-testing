import React, { useState } from 'react'

export default function Roster() {

    const students = [
        { id:1, firstName: "Alison Murphy", grade: 9, vehicle: "No Response"},
        { id:2, firstName: "Carl Jefferies", grade: 5, vehicle: "No Response" },
        { id:3, firstName: "Adam Marcus", grade: 3, vehicle: "No Response" },
        { id:4, firstName: "Lenny Tallerman", grade: 9, vehicle: "No Response" },
        { id:5, firstName: "Beth Rochester", grade: 12, vehicle: "No Response" },
    ];

    function switchAccess(e, id){
        e.preventDefault();
        let carInfo = document.getElementById(id);
       if((e.target.innerHTML == "Yes") || (e.target.innerHTML == "No Response") ){
        e.target.innerHTML = "No";
        carInfo.style.color = "red";
        carInfo.style.textDecoration = "line-through";
        let student = students.filter(x => x.id == id);
        student[0].vehicle = "No";
        return student;
    }else{
        e.target.innerHTML = "Yes"
        carInfo.style.color = "blue";
        carInfo.style.textDecoration = "none";
        let student = students.filter(x => x.id == id);
        student[0].vehicle = "Yes";
        return student;
    }
}

  return (
      <>
    <div data-testid="rosterList-1">
        <div>Roster</div>
        {students && (
              <div><table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>grade</th>
                        <th>vehicle?</th>
                    </tr>
                </thead>
                <tbody>
                {students.map((student, id ) => (
                    <tr key={student.id}>
                    <td>{student.firstName}</td>
                    <td>{student.grade}</td>
                    <td><a onClick={(e) => {switchAccess(e, student.id)}} id={student.id}>{student.vehicle}</a></td>
                    </tr>
                ))}
                </tbody>
        </table>
              </div>
            )}
    </div>
    </> 
  )
}
