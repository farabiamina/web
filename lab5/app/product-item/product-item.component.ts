import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() myProduct: Product;
  @Output() remove = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }
  share(pr: Product): void {
    window.open(`https://t.me/share/url?url=${pr.link}`);
  }
  removeProduct(index: number): void{
    this.remove.emit(index);
  }
  like(pr: Product): void {
    pr.likes = pr.likes + 1;
  }
}
