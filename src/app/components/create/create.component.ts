import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";

import { AddUser } from "../../actions/user.action";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private r: Router,
    private store: Store) {
    this.createForm();
    
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser(name, email) {
    console.log(name, email);
    this.store.dispatch([new AddUser({ name, email })])
    let data = this.store.select(state => state);
    data.subscribe(data => {
      console.log('DATA :: ', data)
    })
    this.r.navigate(['index'])
  }

  ngOnInit() {
  }

}
