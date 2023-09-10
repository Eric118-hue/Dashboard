import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { User } from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private tokenService: TokenService) {
  }

  getUserInfo(): Observable<User> {
    return this.tokenService.decodeToken();
  }
}