import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../roomsinterface';


@Component({
  selector: 'hinv-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsList implements DoCheck, OnDestroy{

  // decorator to input rooms list 
  @Input() rooms: RoomList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnDestroy(): void {
    console.log('on destroy is called')
  }

  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log('on changes is called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log(changes)

    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }


}
