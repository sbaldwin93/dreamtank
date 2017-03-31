import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent {
    constructor(private authService: AuthService, private router: Router) {}
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    displayName = localStorage.getItem('firstName');
}