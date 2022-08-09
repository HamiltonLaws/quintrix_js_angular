import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of Courses"
  courses;

  constructor(service : CourseService) {
    this.courses = service.getCourses();
   }

  ngOnInit(): void {
  }

}
