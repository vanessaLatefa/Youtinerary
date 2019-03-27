import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import {MatStepperModule} from '@angular/material/stepper';






 @NgModule({
     imports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatTabsModule,
        MatFormFieldModule,
        MatStepperModule,
        MatAutocompleteModule
     ],

     exports: [
        MatCardModule,
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatMenuModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatTabsModule,
        MatFormFieldModule,
        MatStepperModule,
        MatAutocompleteModule
     ]
 })

 export class MaterialModule{}