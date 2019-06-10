import { AuthService } from "./../auth/auth.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authLiistenerSubs: Subscription;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.authLiistenerSubs = this.AuthService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      }
    );
  }

  onLogout() {
    this.AuthService.logout();
  }

  ngOnDestroy() {
    this.authLiistenerSubs.unsubscribe();
  }
}
