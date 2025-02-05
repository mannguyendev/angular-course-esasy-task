import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent], // declarations are components, directives, and pipes
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // can use for standardlone components
  providers: [], // providers are services
  bootstrap: [AppComponent], // bootstrap is the root component
})
export class AppModule {}
