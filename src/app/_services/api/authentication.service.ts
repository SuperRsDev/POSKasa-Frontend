import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Constants} from '../../_helpers/constants';
import {Subject} from 'rxjs';
import {UserTokenModel} from '../../_models/user-token.model';

@Injectable()
export class AuthenticationService {
    private isLoggedIn$: Subject<boolean> = new Subject<boolean>();
    constructor(private http: HttpClient) { }

    public getCurrentUser(): UserTokenModel {
      return JSON.parse(localStorage.getItem(Constants.LocalStorageKey.CurrentUser));
    }

    get isLoggedIn(): boolean {
      const userJson = localStorage.getItem(Constants.LocalStorageKey.CurrentUser);
      const user: UserTokenModel = JSON.parse(userJson);
      return user ? user.token != null : false; // {2}
    }

    public getIsUserLoggedIn() {
      return this.isLoggedIn$.asObservable();
    }

    public notifyUserLoggedIn(value: boolean) {
      this.isLoggedIn$.next(value);
    }

    login(username: string, password: string) {
        return this.http.post<any>(Constants.Api.Login, { username, password })
          .pipe(map((user: UserTokenModel) => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(Constants.LocalStorageKey.CurrentUser, JSON.stringify(user));
                    this.notifyUserLoggedIn(true);
                }

                return user;
            }));
    }

    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem(Constants.LocalStorageKey.CurrentUser);
      this.notifyUserLoggedIn(false);
    }
}
