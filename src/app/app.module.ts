import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // declarations are components, directives, and pipes
  imports: [BrowserModule, SharedModule, TasksModule], // can use for standardlone components
  bootstrap: [AppComponent], // bootstrap is the root component
})
export class AppModule {}
