import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl:'./course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    
    course: Course;
    
    constructor(private activatedroute: ActivatedRoute, private courseService: CourseService){ }
    
    ngOnInit(): void{
        this.courseService.retrieveById(+this.activatedroute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: e => console.log('Error', e)
        });
    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Saved with success", course),
            error: e => console.log('Error', e)
        });
    }
}