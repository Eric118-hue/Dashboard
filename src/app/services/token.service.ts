import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class TokenService {
  getToken(): string {
    return 'myawesometokenfromjwt';
  }

  decodeToken(): Observable<User> {
    return of({
      firstName: 'Alan',
      lastName: 'Rositoman',
      roles: [
        'Super Admin'
      ],
      avatar: '/assets/img/Groupe568.png',
    })
  }
}