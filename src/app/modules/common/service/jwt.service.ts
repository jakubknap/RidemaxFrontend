import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  adminAccess = false;

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem("token");
    return token != null && this.notExpired(token);
  }

  private notExpired(token: string): boolean {
    let tokenDecoded = jwt_decode<any>(token);
    return (tokenDecoded.exp * 1000) > new Date().getTime();
  }

  public setAdminAccess(adminAccess: boolean) {
    localStorage.setItem("adminAccess", JSON.stringify(adminAccess));
  }

  public getAdminAccess(): boolean {
    const adminAccess = localStorage.getItem("adminAccess");
    return adminAccess ? JSON.parse(adminAccess) : false;
  }
}
