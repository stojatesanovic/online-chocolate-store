import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrdersComponent } from './orders/orders.component';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorSrService } from './custom-mat-paginator-sr.service';
import { RatingModule } from 'ng-starrating';
import { FavouritesComponent } from './favourites/favourites.component';
import { CountdownModule } from 'ngx-countdown';
import { OrderService } from './order.service';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { UniqueCategoryPipe } from './products/uniquecategory.pipe';
import { UniqueTypePipe } from './products/uniquetype.pipe';
import { UniqueWeightPipe } from './products/uniqueweight.pipe';
import { UniquePricePipe } from './products/uniqueprice.pipe';
import { UniqueDeliveryTimePipe } from './products/uniquedeliverytime.pipe';
import { UniqueRatingPipe } from './products/uniquerating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    OrdersComponent,
    CartComponent,
    ProductsComponent,
    ProfileComponent,
    NavbarComponent,
    FavouritesComponent,
    UniqueCategoryPipe,
    UniqueTypePipe,
    UniqueWeightPipe,
    UniquePricePipe,
    UniqueDeliveryTimePipe,
    UniqueRatingPipe,
    OrderconfirmComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    RatingModule,
    CountdownModule
  ],
  providers: [UserService, ProductService, { provide: MatPaginatorIntl, useClass: CustomMatPaginatorSrService }, OrderService],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent, CartComponent]
})
export class AppModule { }
