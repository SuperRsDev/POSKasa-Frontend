import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Constants} from '../../_helpers/constants';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    public getCurrentUser() {
      return JSON.parse(localStorage.getItem(Constants.LocalStorageKey.CurrentUser));
    }

    get isLoggedIn(): boolean {
      const userJson = localStorage.getItem(Constants.LocalStorageKey.CurrentUser);
      const user = JSON.parse(userJson);
      return user ? user.token != null : false; // {2}
    }

    login(username: string, password: string) {
        return this.http.post<any>(Constants.Api.Login, { username, password })
          .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(Constants.LocalStorageKey.CurrentUser, JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
    }
}
