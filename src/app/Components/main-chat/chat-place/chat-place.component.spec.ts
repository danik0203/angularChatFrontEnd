import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPlaceComponent } from './chat-place.component';

describe('ChatPlaceComponent', () => {
  let component: ChatPlaceComponent;
  let fixture: ComponentFixture<ChatPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
