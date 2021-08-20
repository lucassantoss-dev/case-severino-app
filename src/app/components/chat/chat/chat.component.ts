import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { WebsocketService } from 'src/app/resources/services/websocket.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../../cliente/Cliente';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  apiURL: string = environment.apiURLBase;
  cliente: Cliente[];
  mensagem = '';
  mensagens = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('12630790fe0cbc8880f5', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('mensagem', data => {
      this.mensagens.push(data);
    });
  }

  onSubmit() {
    this.http.post(`${this.apiURL}`, {
      cliente: this.cliente,
      mensagem: this.mensagem
    }).subscribe(() => this.mensagem = '');
    // this.webSocket.send(this.mensagem);
  }

}
