import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profileOpened: boolean = false;

  constructor(public userService: UserService, public productService: ProductService, public orderService: OrderService, private dialog: MatDialog, private router: Router) { }

  openProfile(userId: number): void {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "35vw",
      data: { user: this.userService.getUserById(userId) }
    });

    profileDialog.afterClosed().subscribe(result => {
      this.profileOpened = false;
    })
  }

  signOut(): void {
    this.userService.isSignedIn = false;
    this.userService.currentUser = null;
    this.productService.cartList.length = 0;
    this.productService.favouriteList.length = 0;
    this.orderService.orderList.length = 0;
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

  emptyCart(): void {
    this.productService.cartList.length = 0;
  }

}
