import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Category1_item } from "./category1-item.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class Category1_itemService {
    private category1_items: Category1_item[] = [];
    itemIsEdit = new EventEmitter<Category1_item>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addItem(category1_item: Category1_item) {
        const body = JSON.stringify(category1_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/category1_item' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const category1_item = new Category1_item(
                    result.obj.content,
                    result.obj.category,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.category1_items.push(category1_item);
                return category1_item;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getItems() {
        return this.http.get('http://localhost:3000/category1_item')
            .map((response: Response) => {
                const category1_items = response.json().obj;
                let transformedItems: Category1_item[] = [];
                for (let category1_item of category1_items) {
                    transformedItems.push(new Category1_item(
                        category1_item.content,
                        category1_item.category,
                        category1_item.user.firstName,
                        category1_item._id,
                        category1_item.user._id)
                    );
                }
                this.category1_items = transformedItems;
                return transformedItems;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editItem(category1_item: Category1_item) {
        this.itemIsEdit.emit(category1_item);
    }

    updateItem(category1_item: Category1_item) {
        const body = JSON.stringify(category1_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/category1_item/' + category1_item.itemId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteItem(category1_item: Category1_item) {
        this.category1_items.splice(this.category1_items.indexOf(category1_item), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/category1_item/' + category1_item.itemId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}