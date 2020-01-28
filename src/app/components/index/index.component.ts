import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store, Select } from "@ngxs/store";
import { User } from "../../models/User";
import { Observable } from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  users: Observable<User>;

  constructor(
    private store: Store,
    private chr: ChangeDetectorRef
  ) { 
    this.store.select(state => console.log(state.users.users))
    this.users = this.store.select(state => state.users.users)
  }

  ngOnInit() {
    // this.chr.detectChanges();
    // setInterval(() => {
    //   console.log(this.store.snapshot())
    //   this.store.select(state => console.log(state.users.users))
    //   this.users = this.store.select(state => state.users.users)
    // }, 2000)
  }

  checkState() {
    let data = this.store.select(state => state);
    data.subscribe(data => {
      console.log('DATA :: ', data)
    })
  }

}
