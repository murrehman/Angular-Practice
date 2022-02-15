import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostputComponent } from './postput.component';

describe('PostputComponent', () => {
  let component: PostputComponent;
  let fixture: ComponentFixture<PostputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
