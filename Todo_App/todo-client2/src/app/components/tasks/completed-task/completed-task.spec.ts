import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTask } from './completed-task';

describe('CompletedTask', () => {
  let component: CompletedTask;
  let fixture: ComponentFixture<CompletedTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
