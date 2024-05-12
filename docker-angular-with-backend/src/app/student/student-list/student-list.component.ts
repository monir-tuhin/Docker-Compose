import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss',
})
export class StudentListComponent implements OnInit{


  constructor(private studentService: StudentService) {

  }
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => console.log(err)
    })
  }

}
