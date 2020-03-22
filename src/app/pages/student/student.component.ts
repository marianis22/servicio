import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonService } from '../../json.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent  {
  student: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private jsonService: JsonService
    ) {

    this.activatedRoute.params.subscribe( params => {

      this.student = this.jsonService.getStudent(params['id']);
    });
  }

}
