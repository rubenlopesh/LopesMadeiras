import { Component, TemplateRef, OnInit } from '@angular/core';
import { madeiras } from '../madeiras';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { madeirasService } from '../madeiras.service';
import { madeirasclass } from '../madeirasclass';

@Component({
  selector: 'app-madeiras',
  templateUrl: './madeiras.component.html',
  styleUrls: ['./madeiras.component.css']
})
export class MadeirasComponent implements OnInit {

    modalRef!: BsModalRef;

    constructor(private ms: madeirasService, private dialog: MatDialog, private router: Router, private modalService: BsModalService) { }

    madeiras: madeirasclass[] = [];

    ngOnInit(): void {
      this.ms.getMadeiras().subscribe
      (
        (response)=>
        {
          this.madeiras = response;
        },

        (error)=>
        { console.log("Error Occured : "+ error);
      }
      )
    }

    //madeiras = madeiras; mock up data
    /*itemsPerSlide = 3; ngx bootstrap, não usado

  slides = [
    {image: 'https://img.clasf.pt/2020/04/23/LenhaFirewood-20200423094551.5269100015.jpg'},
    {image: 'https://www.boletosdeorum.pt/wp-content/uploads/2019/12/madeira-de-carvalho-inoculado.jpg'},
    {image: 'https://www.jlm.com.pt/wp-content/uploads/2016/06/NOGUEIRA.jpg'},
    {image: 'https://photos1.blogger.com/blogger/450/464/1600/Pinus-pinaster-Tibaes-0311-2.1.jpg'},
    {image: 'https://www.anpm.org.br/wp-content/uploads/2018/03/pexels-photo-128639.jpeg'},
    {image: 'https://media.jardinitis.com/product/bordura-rollo-de-madera-tratada-en-autoclave-iv-800x800.jpeg'},
  ]; */

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
