import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements OnInit {
  constructor (@Inject (MAT_DIALOG_DATA) public selectedImage: any ) {}
  result:any

  ngOnInit(): void {
    console.log(this.selectedImage , 'modal')
    this.result = this.selectedImage
  }
}


