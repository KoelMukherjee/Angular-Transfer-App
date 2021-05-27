import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from 'src/app/models/transfer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {

  REST_API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) {
  }

  getAllTransfers(): Observable<any> {
    return this.http.get(this.REST_API_SERVER + "/transfers");
  }
  getTransfer(id: string): Observable<any> {
    return this.http.get(this.REST_API_SERVER + "/transfers/" + id);
  }
  deleteTransfer(id: string): Observable<any> {
    return this.http.delete(this.REST_API_SERVER + "/transfers/" + id);
  }
  editTransfer(transferDetails): Observable<any> {
    return this.http.put(this.REST_API_SERVER + "/transfers/" + transferDetails.ID, transferDetails);
  }
}
