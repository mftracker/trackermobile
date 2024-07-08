import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { plainToClass } from 'class-transformer';
import { UserModel } from 'src/model/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
})
export class UsersListPage implements OnInit {
  users: UserModel[] = [];
  constructor(private router: Router,
    private userService: UserService
  ) {}

  async ngOnInit() {
    let users = await this.userService.getUsers();

    console.log(users.map(x => plainToClass(UserModel, x.data)))
  }

  createUserForm() {
    this.router.navigate(["home/userform"]);
  }
}
