import { Component, OnInit } from '@angular/core';
import { JsonService, Student } from '../../json.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cardsalumnos',
  templateUrl: './cardsalumnos.component.html',
  styleUrls: ['./cardsalumnos.component.css']
})
export class CardsalumnosComponent implements OnInit {

  students: Student[] = [];

  constructor( private StudentService: JsonService,
               private router: Router
    ) {
    console.log('Constructor ');
  }

  ngOnInit() {
    this.students = this.StudentService.getStudents();
    console.log(this.students);

  }
  verStudent( idx: number ) {
    this.router.navigate( [ '/student', idx]);
  }

}
