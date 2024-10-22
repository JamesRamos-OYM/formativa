import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  title = 'angular-1-app';
  name = "James Ramos"
  imgRoute = ""
  disabled = false
  handleClick() {
    console.log(`Hola ${this.name}`)
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
  nombreCompleto = ""
  count=0
}
