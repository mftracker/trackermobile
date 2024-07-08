import { v4 as uuid } from 'uuid';

export class UserModel {
    public id: string;
    public isAdmin: boolean;
    public email: string;
    public createdAt: Date;

    constructor(email: string, isAdmin: boolean) {
        this.id = uuid();
        this.createdAt = new Date();
        this.isAdmin = isAdmin;
        this.email = email;
    }
}