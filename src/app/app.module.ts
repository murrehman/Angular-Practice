import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Textsec1Component } from './myContainer/textsec1/textsec1.component';
import { Textsec2Component } from './myContainer/textsec2/textsec2.component';
import { DatabindComponent } from './myContainer/databind/databind.component';
import { ClassStleComponent } from './myContainer/class-stle/class-stle.component';
import { EventbindComponent } from './myContainer/eventbind/eventbind.component';
import { TwoWayComponent } from './myContainer/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CommonModule } from '@angular/common';
import { NgforComponent } from './ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './appServices/designutility.service';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { ViewchildparentComponent } from './viewchildparent/viewchildparent.component';
import { ViewchildchildComponent } from './viewchildchild/viewchildchild.component';
import { TestdirectiveDirective } from './appDirectives/testdirective.directive';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './appPipes/filter.pipe';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import { DropdownDirective } from './appDirectives/dropdown.directive';
import { PostputComponent } from './postput/postput.component';
import { NgProductsService } from './appServices/ng-products.service';
import { UserComponent } from './user/user.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'buy-products', component: ParentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'television', component: TelevisionComponent },
      { path: 'washing-machine', component: WashingMachineComponent }
    ]
  },
  { path: 'viewchild', component: ViewchildparentComponent },
  { path: 'hostlistener', component: HostlistenerComponent },
  { path: 'hostbinding', component: HostbindingComponent },
  { path: 'filterpipe', component: FilterpipeComponent },
  { path: 'templateforms', component: TemplateformsComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'postput', component: PostputComponent },
  { path: 'user', component: UserComponent },
  { path: '**', component: PagenotfoundComponent }


]
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Textsec1Component,
    Textsec2Component,
    DatabindComponent,
    ClassStleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    LoginComponent,
    PagenotfoundComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card1Component,
    Card2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ViewchildparentComponent,
    ViewchildchildComponent,
    TestdirectiveDirective,
    HostlistenerComponent,
    FilterpipeComponent,
    FilterPipe,
    TemplateformsComponent,
    ReactiveformComponent,
    HostbindingComponent,
    DropdownDirective,
    PostputComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DesignutilityService,
    NgProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
