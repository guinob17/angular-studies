import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerServiceComponent } from './logger.service.component';

describe('LoggerServiceComponent', () => {
  let component: LoggerServiceComponent;
  let fixture: ComponentFixture<LoggerServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggerServiceComponent]
    });
    fixture = TestBed.createComponent(LoggerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
