import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeployStateDialogComponent } from './deploy-state-dialog.component';

describe('DeployStateDialogComponent', () => {
  let component: DeployStateDialogComponent;
  let fixture: ComponentFixture<DeployStateDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployStateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployStateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
