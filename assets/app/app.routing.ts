import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./auth/authentication.component";
import { Category1_itemsComponent } from "./category1-items/category1-items.component";
import { Category2_itemsComponent } from "./category2-items/category2-items.component";
import { Category3_itemsComponent } from "./category3-items/category3-items.component";
import { Category4_itemsComponent } from "./category4-items/category4-items.component";
import { Category5_itemsComponent } from "./category5-items/category5-items.component";
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/category1_items', pathMatch: 'full' },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'category1_items', component: Category1_itemsComponent},
    { path: 'category2_items', component: Category2_itemsComponent},
    { path: 'category3_items', component: Category3_itemsComponent},
    { path: 'category4_items', component: Category4_itemsComponent},
    { path: 'category5_items', component: Category5_itemsComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);