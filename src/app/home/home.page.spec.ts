import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { MiServicioService } from '../service/mi-servicio.service';
import { MicomponenteComponent } from '../component/micomponente/micomponente.component';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let servicio: MiServicioService;
  let miComponente: MicomponenteComponent;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [MiServicioService, MicomponenteComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    miComponente = TestBed.inject(MicomponenteComponent);
    servicio = TestBed.inject(MiServicioService);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  
    fixture.detectChanges();
  });

  /***Recordar que en este caso component hace referencia a HomePage ***/
  //Test añadido por defecto que comprueba que el componente existe.
  it('should create HomePage component', () => {
    expect(component).toBeTruthy();
  });

  //En home.page.ts definiremos una variable titulo que se inicialice con este texto
  it('Debería tener el titulo "Mi primer testing"', () => {
    expect(component.titulo).toEqual('Mi primer testing');
  });

  /***Recordar que tenemos que añadir la variable, añadir el componente en providers y hacer el inject del TestBed ***/
  //Hacemos uso de MiComponente para comprobar que tiene que existir una variable "miVariable" de tipo array y que esté iniciado a vacío
  it('Debería existir en MiComponente una variable llamado "miVariable" y se inicialice como un array vacío',() => {
    //Comprobamos que exista la variable
    expect(miComponente.miVariable).toBeTruthy();
    //Comprobamos que sea []
    expect(miComponente.miVariable).toEqual([]);
  });

  //Mediante querySelector, podemos testear nuestro HTML.
  //En este caso tenemos que tener un div, dentro un p y dentro un texto "Hola Mundo"
  it('En el Html debería imprimir "Hola Mundo" con un div y una p', () => {
    expect(compiled.querySelector('div > p').textContent).toContain('Hola Mundo');
  });

  //Si queremos testear la lógica del método sumar, podemos crear un objeto mock con ambos valores.
  //Esto es lo mismo que hacer directamente: miComponente.suma(2, 3);
  it('Debería de sumar dos número', () => {
    const mockedData = {num1: 2, num2: 3};
    const resultadoEsperado = 5;
    const resultado = miComponente.suma(mockedData.num1, mockedData.num2);
    expect(resultado).toEqual(resultadoEsperado);
  });

});
