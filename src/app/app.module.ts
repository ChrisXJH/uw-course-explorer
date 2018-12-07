import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseComponent } from './components/course/course.component';
import { CourseScheduleComponent } from './components/course-schedule/course-schedule.component';

import * as fromCourseExplorerReducers from './store/reducers';
import * as fromCourseExplorerEffects from './store/effects';

const routes: Routes = [
  { path: '', redirectTo: '/subjects', pathMatch: 'full' },
  { path: 'subjects', component: SubjectListComponent },
  {
    path: 'subjects/:subject',
    redirectTo: 'subjects/:subject/courses',
    pathMatch: 'full'
  },
  { path: 'subjects/:subject/courses', component: CourseListComponent },
  { path: 'subjects/:subject/courses/:courseId', component: CourseComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubjectListComponent,
    CourseListComponent,
    PageNotFoundComponent,
    CourseComponent,
    CourseScheduleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(fromCourseExplorerReducers.reducers),
    EffectsModule.forRoot(fromCourseExplorerEffects.effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
