import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.model';
import { Chat } from '../models/chat.model';
import { ChatRequest } from '../models/chat-request.model';
import { environment } from 'src/environments/environment';
import { ChatResponse } from '../models/chat-response.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LiveChatService {

  conversation = new BehaviorSubject<Message[]>([]);
  conversationName = 'angular-' + Date.now();

  constructor(private http: HttpClient) { }

  update(message: Message) {
    this.conversation.next([message]);
  }

  converse(message: string, userName: string) {
    const userMessage = new Message(message, 'user');
    this.update(userMessage);

    var chat = new Chat('sharkbot', message, userName, Date.now().toString());
    var chatRequest = new ChatRequest(chat, 'test', this.conversationName);

    return this.http.put<ChatResponse>(API_URL + 'api/chat', chatRequest).subscribe((chatResponse) => {
      for(let chat of chatResponse.response) {
        var chatUpdate = new Chat('sharkbot', chat, 'sharkbot', Date.now().toString());
        var chatUpdateRequest = new ChatRequest(chatUpdate, 'test', this.conversationName);
        this.http.put(API_URL + 'api/chatupdate', chatUpdateRequest).subscribe();
        this.update(new Message(chat, 'sharkbot'));
      }
    });
  }
}
