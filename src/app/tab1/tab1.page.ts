import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms' // Handle custom forms validators
import { NombreValidator } from '../validators/nombre.validator';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  validations_formHorse: FormGroup;
  
  validation_messages = {
    'nameFormControl': [
      { type: 'required', message: 'Falta introducir el nombre.' }      
    ],

    'razaFormControl': [
      { type: 'required', message: 'Falta introducir la raza' }
    ],

    'edadFormControl': [
      { type: 'required', message: 'Falta introducir la edad.' }
    ],

    'puntuacionExposicionFormControl': [
      { type: 'required', message: 'Falta introducir la puntuación.' }
    ]
  };

  nameFormControl: any;
  razaFormControl: any;
  edadFormControl: number;
  puntuacionExposicionFormControl: any;
  fotografia: any;

  formHorses: FormGroup;
  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { } // Fin constructor
    ngOnInit()
    {

      this.validations_formHorse = new FormGroup({

        nameFormControl: new FormControl('', Validators.compose([
          Validators.required,
        ])), // End FormContrl: nameFormControl

        razaFormControl: new FormControl('', Validators.compose([
          Validators.required,
        ])), // End FormContrl: razaFormControl 

        edadFormControl: new FormControl('', Validators.compose([
          Validators.required,
        ])), // End FormContrl: edadFormControl

        puntuacionExposicionFormControl: new FormControl('', Validators.compose([
          Validators.required,
        ])), // End FormContrl: puntuacionExposicionFormControl

      }); // End validations_formHorse
      
    } // End ngOnInit
  
    // Guardar datos en mysql desde ionic
    registrarCaballo()
    {
    
    } // Fin registrarCaballo

    visualizarCaballo()
    {
    
    } // Fin visualizarCaballo

    consultarLista()
    {
    
    } // Fin consultarLista

    buscarCaballo()
    {
    
    } // Fin buscarCaballo

    mostrarCampeon()
    {
    
    } // Fin mostrarCampeon

    mostrarPeor()
    {
    
    } // Fin mostrarPeor

    mostrarMasViejo()
    {
    
    } // Fin mostrarMasViejo

  
} // Fin clase Tab1Page
