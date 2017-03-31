import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Category4_itemService } from "./category4-item.service";
import { Category4_item } from "./category4-item.model";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-item-input',
    templateUrl: './category4-item-input.component.html'
})
export class Category4_itemInputComponent implements OnInit {
    category4_item: Category4_item;

    constructor(private category4_itemService: Category4_itemService, private authService: AuthService) {}

    onSubmit(form: NgForm) {
        if (this.category4_item) {
            // Edit
            this.category4_item.content = form.value.content;
            this.category4_item.category = "category4";
            this.category4_itemService.updateItem(this.category4_item)
                .subscribe(
                    result => console.log(result)
                );
            this.category4_item = null;
        } else {
            // Create
            const category4_item = new Category4_item(form.value.content, "category4", null);
            this.category4_itemService.addItem(category4_item)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.category4_item = null;
        form.resetForm();
    }

    ngOnInit() {
        this.category4_itemService.itemIsEdit.subscribe(
            (category4_item: Category4_item) => this.category4_item = category4_item
        );
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}