import { Injectable } from '@angular/core';
import { PaymentDetail } from '../model/paymentdetail';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail = new PaymentDetail();
  endpoint: string = 'http://localhost:4000/api/PaymentDetail';
  paymentDetailList?: PaymentDetail[];

  constructor(private http: HttpClient) { }

  getPaymentDetails(){
    this.http.get(this.endpoint).toPromise().then(res => this.paymentDetailList = res as PaymentDetail[]);
  }

  postPaymentDetail(){
    return this.http.post(this.endpoint, this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.endpoint}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id: number){
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
