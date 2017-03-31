import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Category3_item } from "./category3-item.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class Category3_itemService {
    private category3_items: Category3_item[] = [];
    itemIsEdit = new EventEmitter<Category3_item>();

    constructor(private http: Http, private errorService: ErrorService) {
    }

    addItem(category3_item: Category3_item) {
        const body = JSON.stringify(category3_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/category3_item' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const category3_item = new Category3_item(
                    result.obj.content,
                    result.obj.category,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.category3_items.push(category3_item);
                return category3_item;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getItems() {
        return this.http.get('http://localhost:3000/category3_item')
            .map((response: Response) => {
                const category3_items = response.json().obj;
                let transformedItems: Category3_item[] = [];
                for (let category3_item of category3_items) {
                    transformedItems.push(new Category3_item(
                        category3_item.content,
                        category3_item.category,
                        category3_item.user.firstName,
                        category3_item._id,
                        category3_item.user._id)
                    );
                }
                this.category3_items = transformedItems;
                return transformedItems;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editItem(category3_item: Category3_item) {
        this.itemIsEdit.emit(category3_item);
    }

    updateItem(category3_item: Category3_item) {
        const body = JSON.stringify(category3_item);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('http://localhost:3000/category3_item/' + category3_item.itemId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteItem(category3_item: Category3_item) {
        this.category3_items.splice(this.category3_items.indexOf(category3_item), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/category3_item/' + category3_item.itemId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}