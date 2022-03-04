import React, { useState } from 'react'

export default function Roster() {

    const students = [
        { id:1, firstName: "Alison Murphy", grade: 9, vehicle: "false"},
        { id:2, firstName: "Carl Jefferies", grade: 5, vehicle: "false" },
        { id:3, firstName: "Adam Marcus", grade: 3, vehicle: "false" },
        { id:4, firstName: "Lenny Tallerman", grade: 9, vehicle: "false" },
        { id:5, firstName: "Beth Roachester", grade: 12, vehicle: "false" },
    ];

    function switchAccess(e, id){
        e.preventDefault();
        let carInfo = document.getElementById(id);
       if(e.target.innerHTML == "true"){
        e.target.innerHTML = "false";
        carInfo.style.color = "red";
    }else{
        e.target.innerHTML = "true"
        carInfo.style.color = "blue";
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
