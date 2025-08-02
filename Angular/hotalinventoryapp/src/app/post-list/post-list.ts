import { Component, inject } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})


export class PostList {

  private configService = inject(RoomsService); //inject config

  posts$ = this.configService.getTestApi();
}
