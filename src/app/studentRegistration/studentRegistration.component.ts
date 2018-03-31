import { Component, OnInit } from '@angular/core';
import{Student} from '../Models/Student';

@Component({
  selector: 'app-StudentRegistrationComponent',
  templateUrl: './studentRegistration.component.html',
  styleUrls: ['./studentRegistration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  selectedSubject:string
  selectedStudent:Student
  student:Student = {
    id: 1,
    name: 'Sukirtharan',
    grade:5,
    subjects:[]=["Tamil","English","Singala"],
    subject:""
  };

  grades:Array<number>=[1,2,3,4,5]

  students:Student[]=[
    
  ]


  onSelect(student)
  {   
    this.selectedStudent=student
  }

  addSubject(subject)
  {
    this.student.subjects.push(subject);
    this.student.subject=""
  }

  addStudent(stu)
  {
    this.student.grade=
    this.students.push(stu);
    this.student=  {
      id: 0,
      name: '',
      grade:0,
      subjects:[]=[],
      subject:""
    };
  }
  constructor() { }

  ngOnInit() {
   
  }

}
