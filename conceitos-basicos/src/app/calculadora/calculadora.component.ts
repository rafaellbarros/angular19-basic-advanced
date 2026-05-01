import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0
  numero2: number = 0
  resultado: number = 0

  calcularResultado() {
    this.resultado = this.numero1 + this.numero2

    if (this.resultado > 0) {
      this.numero1 = 0
      this.numero2 = 0
    }
  }

}
