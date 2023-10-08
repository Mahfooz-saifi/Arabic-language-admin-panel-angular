import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-approve-agency',
  templateUrl: './approve-agency.component.html',
  styleUrls: ['./approve-agency.component.css']
})
export class ApproveAgencyComponent {
  constructor( private translateService:TranslateService) {
  }
  // translate(event:any){
  //   this.translateService.use(event.target.value)
  //  this.translateService.setDefaultLang('en');
  // }
}
