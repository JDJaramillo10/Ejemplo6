import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumExampleComponent } from './album-example.component';

describe('AlbumExampleComponent', () => {
  let component: AlbumExampleComponent;
  let fixture: ComponentFixture<AlbumExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumExampleComponent]
    });
    fixture = TestBed.createComponent(AlbumExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
