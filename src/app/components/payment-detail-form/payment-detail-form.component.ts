import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/model/paymentdetail';
import { PaymentDetailService } from 'src/app/service/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.css']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public paymentDetailService: PaymentDetailService, private toastr: ToastrService) { }

  onSubmit(form: NgForm){
    if(this.paymentDetailService.formData.paymentDetailId == 0){
      this.insertPaymentDetail(form);
    }
    else{
      this.updatePaymentDetail(form);
    }
    
  }

  insertPaymentDetail(form: NgForm){
    this.paymentDetailService.postPaymentDetail().subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Added Successfully', 'Payment Detail Register');
        this.paymentDetailService.getPaymentDetails();
        this.resetForm(form);
        
        // alert("Data Added");
      },
      // (err) => {
      //   console.log(err.error.message);
      //   alert(err.error.message);
        
      // }
    );
  }

  updatePaymentDetail(form: NgForm){
    this.paymentDetailService.putPaymentDetail().subscribe(
      (res) => {
        console.log(res);
        this.toastr.info('Updated Successfully', 'Payment Detail Register');
        this.resetForm(form);
        this.paymentDetailService.getPaymentDetails();
        
        // alert("Data Updated");
      },
    );
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.paymentDetailService.formData = new PaymentDetail();
  }

  ngOnInit(): void {
  }

}
