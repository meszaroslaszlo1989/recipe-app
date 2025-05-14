import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipedetailComponent } from './recipedetail.component';

describe('RecipedetailComponent', () => {
  let component: RecipedetailComponent;
  let fixture: ComponentFixture<RecipedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
