import { Injectable, NgZone } from "@angular/core";
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { UserModel } from "src/model/user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {

    }

    async createUser(user: UserModel) {
        await FirebaseFirestore.addDocument({
            reference: 'users',
            data: Object.assign({}, user),
        });
    };

    async getUsers() {
        const { snapshots } = await FirebaseFirestore.getCollection({
            reference: 'users',
            queryConstraints: [
                {
                    type: 'orderBy',
                    fieldPath: 'createdAt',
                    directionStr: 'desc',
                },
            ],
        });
        return snapshots;
    }
}