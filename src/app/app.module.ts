import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ], // declarations are components, directives, and pipes
  imports: [BrowserModule, FormsModule], // can use for standardlone components
  providers: [], // providers are services
  bootstrap: [AppComponent], // bootstrap is the root component
})
export class AppModule {}
