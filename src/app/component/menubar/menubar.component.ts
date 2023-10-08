import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

   isExpanded = true;
  showSubmenu: boolean = true;
  isShowing = false;
  showSubSubMenu: boolean = false;
  constructor( private translateService:TranslateService) {
  }
  translate(event:any){
    this.translateService.setDefaultLang('en');
    this.translateService.use(event.target.value)
  }
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }
}
