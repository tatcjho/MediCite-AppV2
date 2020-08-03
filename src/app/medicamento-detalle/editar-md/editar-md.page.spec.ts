import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarMdPage } from './editar-md.page';

describe('EditarMdPage', () => {
  let component: EditarMdPage;
  let fixture: ComponentFixture<EditarMdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
