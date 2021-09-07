import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { HomectComponent } from './homect/homect.component';
import { Unidad1Component } from './unidad1/unidad1.component';
import { Asunto1Component } from './asunto1/asunto1.component';
import { Asunto2Component } from './asunto2/asunto2.component';
import { Asunto3Component } from './asunto3/asunto3.component';
import { Asunto69Component } from './asunto69/asunto69.component';
import { Asunto70Component } from './asunto70/asunto70.component';
import { Asunto80Component } from './asunto80/asunto80.component';
import { NuevoAsunto1Component } from './nuevo-asunto1/nuevo-asunto1.component';
import { Nuevoasunto2Component } from './nuevoasunto2/nuevoasunto2.component';
import { Nuevoasunto3Component } from './nuevoasunto3/nuevoasunto3.component';
import { Nuevoasunto4Component } from './nuevoasunto4/nuevoasunto4.component';
import { Nuevoasunto5Component } from './nuevoasunto5/nuevoasunto5.component';
import { Nuevoasunto6Component } from './nuevoasunto6/nuevoasunto6.component';
import { Nuevoasunto7Component } from './nuevoasunto7/nuevoasunto7.component';
import { PruebacanComponent } from './pruebacan/pruebacan.component';
/* import { FooterComponent } from './footer/footer.component'; */




const routes: Routes = [
  { path: 'home', component: DummyComponent },
  { path: 'unidad2', component: DummyComponent },
  { path: 'aboutme', component: DummyComponent },
  { path: 'singup', component: DummyComponent },
  { path: 'homect', component: HomectComponent },
  { path: 'unidad1', component: Unidad1Component },
  { path: 'asunto1', component: Asunto1Component },
  { path: 'asunto2', component: Asunto2Component },
  { path: 'asunto3', component: Asunto3Component },
  { path: 'asunto69', component: Asunto69Component },
  { path: 'asunto70', component: Asunto70Component },
  { path: 'asunto80', component: Asunto80Component },
  { path: 'nuevo-asunto1', component: NuevoAsunto1Component },
  { path: 'nuevoasunto2', component: Nuevoasunto2Component },
  { path: 'nuevoasunto3', component: Nuevoasunto3Component },
  { path: 'nuevoasunto4', component: Nuevoasunto4Component },
  { path: 'nuevoasunto5', component: Nuevoasunto5Component },
  { path: 'nuevoasunto6', component: Nuevoasunto6Component },
  { path: 'nuevoasunto7', component: Nuevoasunto7Component },
  { path: 'pruebacan', component: PruebacanComponent },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
