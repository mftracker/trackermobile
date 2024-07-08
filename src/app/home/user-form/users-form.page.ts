import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.page.html',
})
export class UsersFormPage implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: UntypedFormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      email: [null, [Validators.required]],
      isAdmin: [false, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  createUser() {
    const user = new UserModel(this.userForm.controls['email'].value, this.userForm.controls['isAdmin'].value);
    console.log(user)
    this.userService.createUser(user).then(() => {
      console.log("created");
    },
      er => console.log(er));
  }
}
