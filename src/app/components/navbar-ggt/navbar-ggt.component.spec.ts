import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGgtComponent } from './navbar-ggt.component';

describe('NavbarGgtComponent', () => {
  let component: NavbarGgtComponent;
  let fixture: ComponentFixture<NavbarGgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarGgtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarGgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
