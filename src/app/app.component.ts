import { Component } from '@angular/core';
import { Store } from "@ngxs/store";
import { AddUser } from "./actions/user.action";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8xs';

  constructor(
    private store: Store
  ) {

  }


  ngOnInit() {
    let that = this;
    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
      let data = JSON.parse(localStorage.getItem('store'));
      if(data) {
        that.store.dispatch(data.map((x) => new AddUser(x)))
      }
      
    });
  }
}
