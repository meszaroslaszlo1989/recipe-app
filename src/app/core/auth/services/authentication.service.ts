import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserCredentialSubject: BehaviorSubject<UserCredential | null> = new BehaviorSubject<UserCredential | null>(null);
  public currentUserCredential = this.currentUserCredentialSubject.asObservable();

  constructor(private auth: Auth) {
    const storedUserCredentia = localStorage.getItem('currentUserCredential');
    if (storedUserCredentia) {
      this.currentUserCredentialSubject.next(JSON.parse(storedUserCredentia));
    }
  }

  signup(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  setUser(userCredential: UserCredential): void {
    this.currentUserCredentialSubject.next(userCredential);
    localStorage.setItem('currentUserCredential', JSON.stringify(userCredential));
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  removeUser(): void {
    localStorage.removeItem('currentUserCredential');
    this.currentUserCredentialSubject.next(null);
  }

  isAuthenticated():boolean {
    return !!this.currentUserCredentialSubject.value;
  }

}
