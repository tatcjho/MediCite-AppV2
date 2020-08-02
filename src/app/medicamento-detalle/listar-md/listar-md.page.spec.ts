import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarMdPage } from './listar-md.page';

describe('ListarMdPage', () => {
  let component: ListarMdPage;
  let fixture: ComponentFixture<ListarMdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarMdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
