import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.html',
  styleUrl: './rooms-booking.css'
})


export class RoomsBooking implements OnInit{

  id: number = 0;

  router!: ActivatedRoute;

  id$ = this.router.params.pipe(
      map(params => params['id'])
    )


  // constructor(private router: ActivatedRoute){}

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    // this.router.paramMap.subscribe((params) => params.get('id'));
    // this.router.params.subscribe((params) => { this.id = params['id']});
  }
}
