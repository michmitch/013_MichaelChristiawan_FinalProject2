import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/service/payment-detail.service';
import { PaymentDetail } from 'src/app/model/paymentdetail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-table',
  templateUrl: './payment-detail-table.component.html',
  styleUrls: ['./payment-detail-table.component.css']
})
export class PaymentDetailTableComponent implements OnInit {

  constructor(public paymentDetailService: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.paymentDetailService.getPaymentDetails();
  }

  fillFormForEdit(selectedPaymentDetail: PaymentDetail){
    
    this.paymentDetailService.formData = Object.assign({}, selectedPaymentDetail);
    this.paymentDetailService.formData.securityCode = '';
  }

  deletePaymentDetail(id: number, name:string){
    if(confirm(`Are you sure want to delete ${name}`)){
      this.paymentDetailService.deletePaymentDetail(id).subscribe(
        (res) => {
          console.log(res);
          // alert("Data Deleted");
          this.toastr.error('Deleted Successfully', 'Payment Detail Register');
          this.paymentDetailService.getPaymentDetails();
        },
        // (err) => {
        //   console.log(err);
          
        // }
      );
    }
    // this.paymentDetailService.getPaymentDetails();
  }

}
