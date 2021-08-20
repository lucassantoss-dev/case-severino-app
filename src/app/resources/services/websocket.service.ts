import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;
  readonly apiUrl:string = environment.apiURLBase;

  constructor() {
    this.socket = io('http://localhost:3000');
   }

   send(data: any) {
    this.socket.emit('msgToServer', data)
   }
}
