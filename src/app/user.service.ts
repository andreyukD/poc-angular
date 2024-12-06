import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, take} from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private socket: Socket;
  private userUpdates = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000');

    this.socket.on('update', (data) => {
      this.userUpdates.next(data);
    });
  }

  get$(id: string) {
    this.http.get<any>(`http://localhost:3000/user/${id}`)
      .pipe(take(1))
      .subscribe(data => {
        this.userUpdates.next(data);
      });

    return this.userUpdates.asObservable();
  }
}
