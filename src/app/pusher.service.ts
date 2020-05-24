import { Injectable } from '@angular/core';

declare const Pusher: any;

@Injectable()
export class PusherService {
  constructor() {
    var pusher = new Pusher('6b7c029e024d168da10c', {
      cluster: 'eu',
      encrypted: true,
    });
    this.channel = pusher.subscribe('vote-channel');
  }
  channel;

  public init() {
    return this.channel;
  }
}
