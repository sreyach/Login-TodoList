import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAutheticationService {

  constructor() { }

  authetication(userName: string, password: string) {
    if (userName === 'sreyach' && password === 'happydays') {
      sessionStorage.setItem('autheticationUser', userName);
      return true;
    }
    return false;
  }

  isLoggedIn(){
   let  user = sessionStorage.getItem('autheticationUser');
   return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('autheticationUser')
  }
}