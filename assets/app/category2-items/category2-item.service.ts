import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Category2_item } from "./category2-item.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class Category2_itemService {
    private category2_items: Category2_item[] = [];
    itemIsEdit = new EventEmitter<Category2_item>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addItem(category2_item: Category2_item) {
        const body = JSON.stringify(category2_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/category2_item' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const category2_item = new Category2_item(
                    result.obj.content,
                    result.obj.category,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.category2_items.push(category2_item);
                return category2_item;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getItems() {
        return this.http.get('http://localhost:3000/category2_item')
            .map((response: Response) => {
                const category2_items = response.json().obj;
                let transformedItems: Category2_item[] = [];
                for (let category2_item of category2_items) {
                    transformedItems.push(new Category2_item(
                        category2_item.content,
                        category2_item.category,
                        category2_item.user.firstName,
                        category2_item._id,
                        category2_item.user._id)
                    );
                }
                this.category2_items = transformedItems;
                return transformedItems;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editItem(category2_item: Category2_item) {
        this.itemIsEdit.emit(category2_item);
    }

    updateItem(category2_item: Category2_item) {
        const body = JSON.stringify(category2_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/category2_item/' + category2_item.itemId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteItem(category2_item: Category2_item) {
        this.category2_items.splice(this.category2_items.indexOf(category2_item), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/category2_item/' + category2_item.itemId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}