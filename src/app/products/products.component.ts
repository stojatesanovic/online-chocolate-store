import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StarRatingComponent } from 'ng-starrating';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name: string;
  searchText: string = "";
  selected_count: number = 0;

  productSource = new MatTableDataSource<Product>(this.productService.dummyProductList);
  static cartTotal: number;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  obs: Observable<any>;

  constructor(public productService: ProductService, public userService: UserService) { }

  ngOnInit(): void {
    this.productSource.data = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    this.productSource.paginator = this.paginator;
    this.productSource.sort = this.sort;
    this.obs = this.productSource.connect();
  }

  doFilter(filterValue: string): void {
    this.productSource.filter = filterValue.trim().toLowerCase();

  }

  ngOnDestroy(): void {
    if (this.productSource) {
      this.productSource.disconnect();
    }
  }

  //Dodavanje proizvoda u omiljene
  addToFavourites(product: any): void {
    product.isAdded = !product.isAdded;
    if (product.isAdded) {
      this.productService.favouriteList.push(product);
    }
    else {
      var prodIndex = this.productService.favouriteList.indexOf(product);
      if (prodIndex > -1) {
        this.productService.favouriteList.splice(prodIndex, 1);
      }
    }
  }

  //Dodavanje proizvoda u korpu
  addToCart(product: Product): void {
    let productExists = false;

    //Ako proizvod već postoji u korpi, povećava se broj komada istog, i stavlja se da postoji u korpi
    for (let i in this.productService.cartList) {
      if (this.productService.cartList[i].id === product.id) {
        this.productService.cartList[i].quantity++;
        productExists = true;
        break;
      }
    }

    //Ako proizvod ne postoji u korpi, dodaje se u listu sa najosnovnijim atributima
    if (!productExists) {
      this.productService.cartList.push({
        id: product.id,
        productType: product.productType,
        name: product.name,
        quantity: 1,
        price: product.price,
        deliveryTime: product.deliveryTime
      });
    }

    //Statička varijabla koja predstavlja ukupnu sumu svih proizvoda u korpi i inkrementira
    //sumu za svaki naredni komad proizvoda
    ProductsComponent.cartTotal = 0;
    //Suma ukupne cene svih proizvoda u korpi, sa njihovim količinama (br. komada)
    this.productService.cartList.forEach(item => {
      ProductsComponent.cartTotal += (item.quantity * item.price);
    });
    alert("Proizvod je uspešno dodat u korpu!");
  }

  //Ocena pojedinačnog proizvoda
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }, product: Product): void {

    //Računanje ukupne sume kao proizvod postojeće ocene pojedinačnog proizvoda i postojećeg broja korisnika
    //koji su ocenili proizvod
    var ratingSum = product.rating * product.numberOfPersonsRated;

    //Suma se uvećava za novu ocenu klikom na odgovarajuću zvezdicu (uzimanje newValue varijable za događaj)
    ratingSum += $event.newValue;
    product.numberOfPersonsRated++;

    //Aritmetička vrednost sume ocena i broja korisnika koji su dali ocenu se prosleđuje polju ocene za proizvod,
    //a samim tim i novoj vrednosti simboličkog predstavljanja ocene (pomoću zvezda)
    product.rating = parseFloat((ratingSum / product.numberOfPersonsRated).toFixed(2));
    $event.starRating.value = product.rating;
  }

}
