import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildchildComponent } from './viewchildchild.component';

describe('ViewchildchildComponent', () => {
  let component: ViewchildchildComponent;
  let fixture: ComponentFixture<ViewchildchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
