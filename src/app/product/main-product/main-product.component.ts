import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  products: product[];
  inputProduct: product;

  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [3, 6, 9, 12];

  nombreProd : number ;
 


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.inputProduct = new product();

    this.productService.nombreProducts().subscribe((data:any) => this.nombreProd=data);



  }

  getProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
        console.log(this.products)
      }
    );

  }



  save(product: product): void {

    let i = this.products.indexOf(product);

    if (i != -1) {
      this.productService.updateProduct(product).subscribe((data) => this.products[i] = data);
      swal("Success!", "Product updated!", "success");
      
    }
    else {

      this.productService.addProduct(product).subscribe((data) => {
        console.log(data);
        this.products.push(data)
        this.productService.nombreProducts().subscribe((data:any) => this.nombreProd=data);
        swal("Success!", "Product added!", "success");
      });
      
      
     
    }
  
  }

  showForm() {
      this.inputProduct = new product();
  }

  update(product: product): void {
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputProduct = product;


  }

  delete(product: product): void {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
    .then((willDelete) => {
      
      if (willDelete) {
        let i = this.products.indexOf(product);
      this.productService.deleteProduct(product.idProduit).subscribe(data => {
      this.products.splice(i, 1)
      this.productService.nombreProducts().subscribe((data:any) => this.nombreProd=data);
      swal("Product has been deleted!", {
        icon: "success",
      });
      });
        
      } else {
        swal("Product  is safe!");
      }
    });
  }

  onTableDataChange(event:any){
    this.page = event;
    this.getProducts();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getProducts();
  }

}
