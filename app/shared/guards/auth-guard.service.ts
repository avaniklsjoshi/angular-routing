import { Injectable } from '@angular/core';
import {CanActivate,CanActivateChild} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
  canActivate(){
    console.log('checking');
    return true;
  }

  canActivateChild(){
    console.log('checking child');
    return true;
  }
}