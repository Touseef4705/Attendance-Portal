var userData = [
    { name: 'John Doe', fatherName: 'Richard Doe', age: 16, rollNo: '101', class: '10th Grade' },
    { name: 'Jane Smith', fatherName: 'Robert Smith', age: 15, rollNo: '102', class: '9th Grade' },
    { name: 'Michael Johnson', fatherName: 'James Johnson', age: 17, rollNo: '103', class: '11th Grade' },
    { name: 'Emily Davis', fatherName: 'William Davis', age: 14, rollNo: '104', class: '8th Grade' },
    { name: 'Jessica Brown', fatherName: 'Charles Brown', age: 16, rollNo: '105', class: '10th Grade' },
    { name: 'Daniel Wilson', fatherName: 'Thomas Wilson', age: 15, rollNo: '106', class: '9th Grade' },
    { name: 'Sarah Taylor', fatherName: 'Andrew Taylor', age: 17, rollNo: '107', class: '11th Grade' },
    { name: 'David Lee', fatherName: 'George Lee', age: 14, rollNo: '108', class: '8th Grade' },
    { name: 'Laura Martin', fatherName: 'Paul Martin', age: 16, rollNo: '109', class: '10th Grade' },
    { name: 'Kevin White', fatherName: 'Mark White', age: 15, rollNo: '110', class: '9th Grade' },
    { name: 'Anna Harris', fatherName: 'Steven Harris', age: 17, rollNo: '111', class: '11th Grade' },
    { name: 'Brian Clark', fatherName: 'Edward Clark', age: 14, rollNo: '112', class: '8th Grade' },
    { name: 'Sophia Lewis', fatherName: 'Henry Lewis', age: 16, rollNo: '113', class: '10th Grade' },
    { name: 'Christopher Walker', fatherName: 'Frank Walker', age: 15, rollNo: '114', class: '9th Grade' },
    { name: 'Grace Hall', fatherName: 'Peter Hall', age: 17, rollNo: '115', class: '11th Grade' },
    { name: 'Justin Allen', fatherName: 'Patrick Allen', age: 14, rollNo: '116', class: '8th Grade' },
    { name: 'Olivia Young', fatherName: 'Bruce Young', age: 16, rollNo: '117', class: '10th Grade' },
    { name: 'Nathan Hernandez', fatherName: 'Larry Hernandez', age: 15, rollNo: '118', class: '9th Grade' },
    { name: 'Mia King', fatherName: 'Joe King', age: 17, rollNo: '119', class: '11th Grade' },
    { name: 'Ethan Wright', fatherName: 'Stanley Wright', age: 14, rollNo: '120', class: '8th Grade' },
    { name: 'Ava Lopez', fatherName: 'Timothy Lopez', age: 16, rollNo: '121', class: '10th Grade' },
    { name: 'Jacob Scott', fatherName: 'Chris Scott', age: 15, rollNo: '122', class: '9th Grade' },
    { name: 'Samantha Green', fatherName: 'Shawn Green', age: 17, rollNo: '123', class: '11th Grade' },
    { name: 'Andrew Adams', fatherName: 'Jason Adams', age: 14, rollNo: '124', class: '8th Grade' },
    { name: 'Ella Baker', fatherName: 'Ryan Baker', age: 16, rollNo: '125', class: '10th Grade' }
];

let studentList = document.getElementById("student-List");

function addData() {
    for (let i = 0; i < userData.length; i++) {
        studentList.innerHTML += `
        <tr>
           <td>${i + 1}.</td>
           <td>${userData[i].name}</td>
           <td>${userData[i].fatherName}</td>
           <td>${userData[i].age}</td>
           <td>${userData[i].rollNo}</td>
           <td style="padding-top:10px;">
             <img src="Assests/like.png" alt="Present" style="height: 20px; width:20px; cursor: pointer;" onclick="like(this)">
             <img src="Assests/absent.png" alt="Absent" style="height: 20px; width:20px; margin: 0 5px; cursor: pointer;" onclick="absent(this)">
             <img src="Assests/letter.png" alt="On Leave" style="height: 20px; width:20px; cursor: pointer;" onclick="letter(this)">
           </td>
       </tr>
        `;
    }
}
addData();

let studentPres = document.getElementById("studentPres");
let studentAbs = document.getElementById("studentAbs");
let studentLeave = document.getElementById("studentLeave");

let presCount = 0
let absCount = 0
let leaveCount = 0

function like(event){

    if (event.src.endsWith('like.png')) {
        event.src = 'Assests/like-up.png'; 
        event.parentElement.querySelector('img[alt="On Leave"]').src = 'Assests/letter.png';
        event.parentElement.querySelector('img[alt="Absent"]').src = 'Assests/absent.png';
        presCount++
    } else {
        event.src = 'Assests/like.png'; 
        presCount--
    }    
    studentPres.innerText = presCount
    console.log(presCount)
    // console.log(event.parentElement.lastElementChild)
}

function absent(event){
    if (event.src.endsWith('absent.png')) {
        event.src = 'Assests/absent-up.png'; 
        event.parentElement.querySelector('img[alt="On Leave"]').src = 'Assests/letter.png';
        event.parentElement.querySelector('img[alt="Present"]').src = 'Assests/like.png';
        absCount++
    } else {
        event.src = 'Assests/absent.png'; 
        absCount--
    }    
    studentAbs.innerText = absCount
    console.log(absCount)
}
function letter(event){
    if (event.src.endsWith('letter.png')) {
        event.src = 'Assests/letter-up.png'; 
        // event.parentElement.firstElementChild.src = `Assests/like.png`
        event.parentElement.querySelector('img[alt="Present"]').src = 'Assests/like.png';
        event.parentElement.querySelector('img[alt="Absent"]').src = 'Assests/absent.png';
        leaveCount++
    } else {
        event.src = 'Assests/letter.png'; 
        leaveCount--
    }    
    studentLeave.innerText = leaveCount
    console.log(leaveCount)
}