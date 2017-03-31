import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Category1_itemService } from "./category1-item.service";
import { Category1_item } from "./category1-item.model";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-item-input',
    templateUrl: './category1-item-input.component.html'
})
export class Category1_itemInputComponent implements OnInit {
    category1_item: Category1_item;

    constructor(private category1_itemService: Category1_itemService, private authService: AuthService) {}

    onSubmit(form: NgForm) {
        if (this.category1_item) {
            // Edit
            this.category1_item.content = form.value.content;
            this.category1_item.category = "category1";
            this.category1_itemService.updateItem(this.category1_item)
                .subscribe(
                    result => console.log(result)
                );
            this.category1_item = null;
        } else {
            // Create
            const category1_item = new Category1_item(form.value.content, "category1", null);
            this.category1_itemService.addItem(category1_item)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.category1_item = null;
        form.resetForm();
    }

    ngOnInit() {
        this.category1_itemService.itemIsEdit.subscribe(
            (category1_item: Category1_item) => this.category1_item = category1_item
        );
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}