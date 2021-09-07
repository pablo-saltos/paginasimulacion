import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';




import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { PruebacanComponent } from './pruebacan/pruebacan.component';
import { FooterComponent } from './footer/footer.component';
import { Nuevoasunto6Component } from './nuevoasunto6/nuevoasunto6.component';
import { Nuevoasunto7Component } from './nuevoasunto7/nuevoasunto7.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    HomectComponent,
    Unidad1Component,
    Asunto1Component,
    Asunto2Component,
    Asunto3Component,
    Asunto69Component,
    Asunto70Component,
    Asunto80Component,
    NuevoAsunto1Component,
    Nuevoasunto2Component,
    Nuevoasunto3Component,
    Nuevoasunto4Component,
    Nuevoasunto5Component,
    Nuevoasunto6Component,
    PruebacanComponent,
    FooterComponent,
    Nuevoasunto6Component,
    Nuevoasunto7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule ,
    FlexLayoutModule,
    MatInputModule,
    MatTreeModule,
    MatPaginatorModule,
    MatMenuModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
