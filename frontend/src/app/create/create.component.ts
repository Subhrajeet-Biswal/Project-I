import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private api: ApiserviceService) {}
  createuser(data: any) {
    this.api.postdata(data).subscribe((res) => {
      console.log(res);
    });
  }
}
