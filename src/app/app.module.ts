import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {MatButtonModule,
        MatCardModule,      
        MatFormFieldModule,      
        MatInputModule,
        MatDividerModule,
        MatSelectModule,
        MatTabsModule,
        } from '@angular/material';
import { EmployeeService } from './services/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { PositionService } from './services/position.service';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionFormComponent } from './position-form/position-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/employee-list',
    pathMatch: 'full'
},
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-view/:id', component: EmployeeViewComponent },
  { path: 'position-list', component: PositionListComponent },
  { path: 'position-form', component: PositionFormComponent },
  { path: 'project-list', component: ProjectListComponent },
  { path: 'project-form', component: ProjectFormComponent },
 { path: '**', redirectTo: '/employee-list', pathMatch: 'full' }

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    PositionListComponent,
    PositionFormComponent,
    ProjectListComponent,
    ProjectFormComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,      
    MatFormFieldModule,      
    MatInputModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSelectModule,
    MatTabsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
