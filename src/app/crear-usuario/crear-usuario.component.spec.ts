import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con los campos y sus validaciones
    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', [
        Validators.required, 
        Validators.maxLength(10), 
        Validators.pattern("^[0-9]*$") // Solo números
      ]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  // Método que se ejecuta cuando el formulario es enviado
  onSubmit() {
    if (this.usuarioForm.valid) {
      alert('Formulario enviado exitosamente');
    } else {
      this.usuarioForm.markAllAsTouched(); // Marca todos los campos como "tocados" para mostrar errores
    }
  }
}

