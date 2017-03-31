import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Category2_itemService } from "./category2-item.service";
import { Category2_item } from "./category2-item.model";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-item-input',
    templateUrl: './category2-item-input.component.html'
})
export class Category2_itemInputComponent implements OnInit {
    category2_item: Category2_item;

    constructor(private category2_itemService: Category2_itemService, private authService: AuthService) {}

    onSubmit(form: NgForm) {
        if (this.category2_item) {
            // Edit
            this.category2_item.content = form.value.content;
            this.category2_item.category = "category2";
            this.category2_itemService.updateItem(this.category2_item)
                .subscribe(
                    result => console.log(result)
                );
            this.category2_item = null;
        } else {
            // Create
            const category2_item = new Category2_item(form.value.content, "category2", null);
            this.category2_itemService.addItem(category2_item)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.category2_item = null;
        form.resetForm();
    }

    ngOnInit() {
        this.category2_itemService.itemIsEdit.subscribe(
            (category2_item: Category2_item) => this.category2_item = category2_item
        );
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}