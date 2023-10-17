import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailRecipePage } from './detail-recipe.page';

describe('DetailRecipePage', () => {
  let component: DetailRecipePage;
  let fixture: ComponentFixture<DetailRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
