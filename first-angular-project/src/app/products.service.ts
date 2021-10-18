import { Subject } from "rxjs";

export class ProductService {
    private products = ['A Book'];
    public productsUpdated = new Subject();

    addProduct(productName: string) {
        this.products.push(productName);
        this.productsUpdated.next();
    }

    deleteProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
        this.productsUpdated.next();
    }
    
    getProducts() {
        return [...this.products];//this return give you a new array of products 
    }
}