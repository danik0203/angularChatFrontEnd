import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';


import {AppComponent} from './app.component';
import {UserlogComponent} from './Components/userlog/userlog.component';
import {MainChatComponent} from './Components/main-chat/main-chat.component';
import {LoginBoxComponent} from './Components/userlog/login-box/login-box.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ChatPlaceComponent} from './Components/main-chat/chat-place/chat-place.component';
import {PeopleComponentComponent} from './Components/main-chat/people-component/people-component.component';
import {Routes, RouterModule, Router} from '@angular/router';


import {AppRoutingModule} from './app-routing.module';


const appRouters: Routes = [
  {path: '', component: UserlogComponent},
  {path: 'chatComp', component: MainChatComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    UserlogComponent,
    MainChatComponent,
    LoginBoxComponent,
    ChatPlaceComponent,
    PeopleComponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRouters),
    AppRoutingModule

  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

