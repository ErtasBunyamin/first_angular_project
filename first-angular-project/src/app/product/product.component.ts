import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ProductService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() productName!: string;
  @Output() productClicked = new EventEmitter();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onClicked() {
    //this.productClicked.emit();
    this.productService.deleteProduct(this.productName);
  }
}
