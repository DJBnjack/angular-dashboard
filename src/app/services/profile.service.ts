import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Profile } from '../classes/profile';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProfileService {
    profile: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(new Profile());

    constructor(private http: Http) {
        this.http.get('https://randomuser.me/api/?nat=nl')
            .subscribe(res => this.profile.next(Profile.fromJson(res.json())));
    };
}