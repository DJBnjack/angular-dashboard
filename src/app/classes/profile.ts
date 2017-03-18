export class Profile {
    gender: string;
    name: string;
    location: {
        street: string,
        city: string;
        state: string;
        postcode: string;
    };
    email: string;
    login: {
        username: string;
        password: string;
    };
    dob: string;
    phone: string;
    picture: string;
}
