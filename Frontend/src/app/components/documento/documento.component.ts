import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../services/documento.service';
import { NgForm } from '@angular/forms';
import { Documentos } from 'src/app/models/documento';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  constructor(public documentoService: DocumentoService) { }

  ngOnInit(): void {
    this.getDocumentos();
  }

  getDocumentos(){
    this.documentoService.getDocumentos().subscribe(res => {
      this.documentoService.documentos = res;
    });
  }

  agregarDocumento(form: NgForm){
    if(form.value._id){
      this.documentoService.actualizarDocumento(form.value).subscribe(
        (res)=> alert("actualizado")
      )
    }else{
      this.documentoService.crearDocumento(form.value).subscribe(
        (res)=>{
          this.getDocumentos();
          form.reset();
        }
      )
    }
  }

  eliminarDocumento(_id: string){
    if (confirm('¿Deseas borrar este registro?')){
      this.documentoService.borrarDocumento(_id).subscribe((_res) => {
          this.getDocumentos();
      });
    }
    
  }

  editarDocumento(documento : Documentos){
    this.documentoService.seleccionarDocumento = documento;
  }

  limpiarFormulario(form: NgForm){
    form.reset()
  }
}
