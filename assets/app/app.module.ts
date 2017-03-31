import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { routing } from "./app.routing";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";
import { Category1_itemModule } from "./category1-items/category1-item.module";
import { Category2_itemModule } from "./category2-items/category2-item.module";
import { Category3_itemModule } from "./category3-items/category3-item.module";
import { Category4_itemModule } from "./category4-items/category4-item.module";
import { Category5_itemModule } from "./category5-items/category5-item.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        NavComponent,
        ErrorComponent, 
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        Category1_itemModule,
        Category2_itemModule,
        Category3_itemModule,
        Category4_itemModule,
        Category5_itemModule,
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}