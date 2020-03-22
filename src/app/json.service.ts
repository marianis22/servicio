import { Injectable } from '@angular/core';


@Injectable()

export class JsonService {
    private students: Student[] = [
        {
            nua: 147132,
            first_name: "Braulio Isaac",
            last_name: "Rosas Mac",
            email: "elmacchido@gmail.com",
            phone: "4451129673",
            age: "19",
            gender_id: 1,
            career_id: 6
        },
        {
            nua: 364782,
            first_name: "Daniela",
            last_name: "Maki Lala",
            email: "coolspax@gmail.com",
            phone: "4731259096",
            age: "21",
            gender_id: 3,
            career_id: 1
        },
        {
            nua: 377082,
            first_name: "Ramiro",
            last_name: "Marquez",
            email: "example@gmail.com",
            phone: "443-198-092",
            age: "19",
            gender_id: 2,
            career_id: 3
        },
        {
            nua: 780840,
            first_name: "Jonathan Joel",
            last_name: "Corona Ortega",
            email: "jonny.ort31@gmail.com",
            phone: "4646519093",
            age: "22",
            gender_id: 1,
            career_id: 3
        }
    ];

    constructor() {
        console.log('Servicio listo');
    }

    getStudents(): Student[] {
        return this.students;
    }

    getStudent(idx: string ) {
        return this.students[idx];
    }

}

export interface Student {
    nua: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    age: string;
    gender_id: number;
    career_id: number;
}