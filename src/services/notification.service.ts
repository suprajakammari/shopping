import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
  showSuccess(message){
    this.toastr.success(message, 'success');
}

showError(message){
    this.toastr.error(message, 'erroe');
}

showInfo(message){
    this.toastr.info(message, 'info');
}

showWarning(message){
    this.toastr.warning(message, 'warning');
}
}
