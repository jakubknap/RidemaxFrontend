import { Component } from '@angular/core';

@Component({
  selector: 'app-fullpageadmin',
  templateUrl: './fullpageadmin.component.html',
  styleUrls: ['./fullpageadmin.component.scss']
})
export class FullpageadminComponent {

  logout() {
    localStorage.removeItem("adminAccess");
    localStorage.removeItem("token");
  }
}
