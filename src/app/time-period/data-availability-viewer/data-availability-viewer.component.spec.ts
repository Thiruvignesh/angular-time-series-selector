import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAvailabilityViewerComponent } from './data-availability-viewer.component';

describe('DataAvailabilityViewerComponent', () => {
  let component: DataAvailabilityViewerComponent;
  let fixture: ComponentFixture<DataAvailabilityViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAvailabilityViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAvailabilityViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
