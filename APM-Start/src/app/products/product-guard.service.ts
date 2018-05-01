import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

    constructor(private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        //based on path /products/id, id is slot 1
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1) {
            //normally would kick to error page
            alert("Invalid Product Id");
            this._router.navigate(['/products']);
            return false;
        }
        
        return true;
    }
}