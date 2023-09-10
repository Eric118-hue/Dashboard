import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  constructor() {
  }

  isSuperAdmin(): Promise<boolean> {
    return Promise.resolve(true);
  }
}