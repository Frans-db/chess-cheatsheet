import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { SectionComponent } from './components/pages/section/section.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: ':category/:section', component: SectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
