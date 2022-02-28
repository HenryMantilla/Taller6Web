import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Documentos } from '../models/documento'

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  URL_API= 'http://localhost:3000/crud/documento'

  seleccionarDocumento: Documentos={
    _id: '',
    nombre:'',
    descripcion:''
  };

  documentos : Documentos[] = [];

  constructor(private http: HttpClient){}

  getDocumentos(){
    return this.http.get<Documentos[]>(this.URL_API);
  }

  crearDocumento(documento: Documentos){
    return this.http.post(this.URL_API, documento);
  }

  actualizarDocumento(documento: Documentos){
    return this.http.put(this.URL_API + `/${documento._id}`, documento)
  }

  borrarDocumento(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`)
  }
}
