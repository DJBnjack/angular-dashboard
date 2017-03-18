import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Profile } from '../classes/profile';
import { ProfileMockData } from './mockdata/profiles.mock';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ProfileService {
    profiles: Profile[] = ProfileMockData;

    constructor() { };
}