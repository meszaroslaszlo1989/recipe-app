import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecipelistComponent } from './myrecipelist.component';

describe('MyrecipelistComponent', () => {
  let component: MyrecipelistComponent;
  let fixture: ComponentFixture<MyrecipelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyrecipelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyrecipelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
