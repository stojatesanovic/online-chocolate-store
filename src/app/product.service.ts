import { Injectable } from "@angular/core";

export interface Product {
  id: number;
  category: "Kafa" | "Čokolada";
  productType: "Kafa u zrnu" | "Mlevena kafa" | "Mlečna čokolada" | "Bela čokolada" | "Crna čokolada" | "Specijalna edicija";
  quantity: number;
  weight: number;
  name: string;
  deliveryTime: number;
  price: number;
  rating: number;
  numberOfPersonsRated: number;
  description: string;
  countryOfOrigin: string;
  retailer: string;
  availability: "Dostupno" | "Nije dostupno";
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartTotal: number;

  dummyProductList: Array<Product> = [
    {
      id: 1,
      category: "Kafa",
      productType: "Kafa u zrnu",
      quantity: 1,
      weight: 500,
      name: "Columbia 500g",
      rating: 4.05,
      numberOfPersonsRated: 160,
      deliveryTime: 1,
      price: 200,
      description: "Proizvedeno u Kolumbiji",
      countryOfOrigin: "Kolumbija",
      retailer: "M Trade d.o.o.",
      availability: "Dostupno"
    },
    {
      id: 2,
      category: "Čokolada",
      productType: "Mlečna čokolada",
      quantity: 1,
      weight: 100,
      name: "Milka Bubbly čokolada 100g",
      rating: 4.43,
      numberOfPersonsRated: 93,
      deliveryTime: 2,
      price: 120,
      description: "Mlečna čokolada sa balončićima",
      countryOfOrigin: "Švajcarska",
      retailer: "S Trans d.o.o.",
      availability: "Dostupno"
    },
    {
      id: 3,
      category: "Čokolada",
      productType: "Crna čokolada",
      quantity: 1,
      weight: 100,
      name: "Štark Najlepše želje - malina 100g",
      rating: 4.19,
      numberOfPersonsRated: 197,
      deliveryTime: 2,
      price: 160,
      description: "Crna čokolada sa komadićima maline",
      countryOfOrigin: "Srbija",
      retailer: "L Inc.",
      availability: "Nije dostupno"
    },
    {
      id: 4,
      category: "Čokolada",
      productType: "Bela čokolada",
      quantity: 1,
      weight: 180,
      name: "Delicata - Malina i čizkejk 180g",
      rating: 4.64,
      numberOfPersonsRated: 16,
      deliveryTime: 3,
      price: 300,
      description: "Bela čokolada sa ukusom maline i čizkejka",
      countryOfOrigin: "Holandija",
      retailer: "MMS d.o.o.",
      availability: "Nije dostupno"
    },
    {
      id: 5,
      category: "Čokolada",
      productType: "Specijalna edicija",
      quantity: 1,
      weight: 500,
      name: "Čokoladna tastatura 500g",
      rating: 4.5,
      numberOfPersonsRated: 62,
      deliveryTime: 7,
      price: 700,
      description: "Mlečna čokolada u obliku tastature",
      countryOfOrigin: "Srbija",
      retailer: "SMM a.d.",
      availability: "Dostupno"
    },
    {
      id: 6,
      category: "Kafa",
      productType: "Mlevena kafa",
      quantity: 1,
      weight: 100,
      name: "Grand kafa 100g",
      rating: 3.75,
      numberOfPersonsRated: 44,
      deliveryTime: 2,
      price: 250,
      description: "Grand kafa - najbolja u Srbiji",
      countryOfOrigin: "Srbija",
      retailer: "MSM d.o.o.",
      availability: "Nije dostupno"
    },
    {
      id: 7,
      category: "Čokolada",
      productType: "Crna čokolada",
      quantity: 1,
      weight: 150,
      name: "Štark čokolada - 70% kakaa",
      rating: 4.04,
      numberOfPersonsRated: 12,
      deliveryTime: 3,
      price: 280,
      description: "Najfinija crna čokolada",
      countryOfOrigin: "Srbija",
      retailer: "AdBlue a.d.",
      availability: "Dostupno"
    },
    {
      id: 8,
      category: "Kafa",
      productType: "Kafa u zrnu",
      quantity: 1,
      weight: 300,
      name: "Arabica 300g",
      rating: 4.84,
      numberOfPersonsRated: 193,
      deliveryTime: 2,
      price: 250,
      description: "Proizvedeno u Siriji",
      countryOfOrigin: "Sirija",
      retailer: "MiTrade d.o.o.",
      availability: "Nije dostupno"
    },
    {
      id: 9,
      category: "Čokolada",
      productType: "Mlečna čokolada",
      quantity: 1,
      weight: 300,
      name: "TriSelection Chocolate Dream",
      rating: 3.77,
      numberOfPersonsRated: 116,
      deliveryTime: 4,
      price: 190,
      description: "Čokolada punjena nugat kremom",
      countryOfOrigin: "Belgija",
      retailer: "MSM d.o.o.",
      availability: "Dostupno"
    },
    {
      id: 10,
      category: "Čokolada",
      productType: "Crna čokolada",
      quantity: 1,
      weight: 220,
      name: "BestBuy Crna čokolada - višnja i 60% kakaa",
      rating: 3.26,
      numberOfPersonsRated: 173,
      deliveryTime: 3,
      price: 350,
      description: "Čokolada sa komadićima višnje",
      countryOfOrigin: "Francuska",
      retailer: "TriCommerce a.d.",
      availability: "Dostupno"
    },
    {
      id: 11,
      category: "Kafa",
      productType: "Mlevena kafa",
      quantity: 1,
      weight: 150,
      name: "Doncafe 150g",
      rating: 4.39,
      numberOfPersonsRated: 85,
      deliveryTime: 2,
      price: 170,
      description: "Najfinija zrna pažljivo odabrana",
      countryOfOrigin: "Srbija",
      retailer: "SSM a.d.",
      availability: "Dostupno"
    },
    {
      id: 12,
      category: "Čokolada",
      productType: "Bela čokolada",
      quantity: 2,
      weight: 270,
      name: "Milky bela čokolada sa komadićima lešnika",
      rating: 3.99,
      numberOfPersonsRated: 135,
      deliveryTime: 4,
      price: 370,
      description: "1+1 gratis ponuda",
      countryOfOrigin: "Švajcarska",
      retailer: "AdHoc Inc.",
      availability: "Dostupno"
    }
  ];

  favouriteList: Array<Product> = [];
  cartList: Array<any> = [];

  currentProduct: Product = this.dummyProductList[0];

  //Uzima se ime proizvoda i njegova količina (br. komada) za prikaz sadržaja porudžbine u Orders komponenti
  getProductNameAndQuantity(list: Array<any>): string {
    var productNameArray: Array<string> = [];
    list.forEach(product => {
      productNameArray.push(product.name + " " + `(x${product.quantity})`);
    });
    return productNameArray.join(", ");
  }

  //Uzimanje svih proizvoda iz liste, koristi se kao izvor za prikaz podataka na početnoj stranici logovanog korisnika
  getProducts() {
    return this.dummyProductList;
  }

  //Uzimanje proizvoda iz liste omiljenih, koristi se kao izvor za prikaz podataka na stranici omiljenih proizvoda logovanog korisnika
  getFavourites() {
    return this.favouriteList;
  }

  constructor() { }
}
