import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HomeComponent } from './homehelpabout/home/home.component';
import { AboutComponent } from './homehelpabout/about/about.component';
import { E404Component } from './homehelpabout/e404/e404.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { SearchPipe } from './apputilities/search.pipe';
import { VendorSearchPipe } from './vendor/vendor-search.pipe';
import { UserSearchPipe } from './user/user-search.pipe';
import { ProductSearchPipe } from './product/product-search.pipe';
import { RequestSearchPipe } from './request/request-search.pipe';
import { BooleanPipe } from './apputilities/boolean.pipe';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuitemComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestListComponent,
    SearchPipe,
    VendorSearchPipe,
    UserSearchPipe,
    ProductSearchPipe,
    RequestSearchPipe,
    BooleanPipe,
    RequestlineCreateComponent,
    RequestlineEditComponent,
    RequestLinesComponent,
    RequestReviewItemComponent,
    RequestReviewListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
