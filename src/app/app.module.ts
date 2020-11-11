import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { SiilafoundationComponent } from './siilafoundation/siilafoundation.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';
import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from './layout/full/full.component';
import { PartialComponent } from './layout/partial/partial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    JobsComponent,
    SiilafoundationComponent,
    TeamComponent,
    TermsComponent,
    BlankComponent,
    FullComponent,
    PartialComponent,
    AdvanceSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
