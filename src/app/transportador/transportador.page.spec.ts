import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportadorPage } from './transportador.page';

describe('TransportadorPage', () => {
  let component: TransportadorPage;
  let fixture: ComponentFixture<TransportadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
