import { Component, OnInit, OnDestroy} from "@angular/core";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";
import { ProductService } from "./products.service";

@Component({
    selector:'app-products',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy{
    products: string[] = [];
    private productSubscription!: Subscription;
    
    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
        this.productSubscription=this.productService.productsUpdated.subscribe(() => {
            this.products = this.productService.getProducts();
        });
    }

    ngOnDestroy() {
        this.productSubscription.unsubscribe();
    }

    onAddProduct(form: NgForm) {
        //this.products.push(this.productName);
        if(form.valid) {
            this.productService.addProduct(form.value.productName);
        }else {
            alert("Please enter a product name!")
        }
    }

    onRemoveProduct(productName: string) {
        //this.productService.onRemoveProduct(productName);
    }
    
}