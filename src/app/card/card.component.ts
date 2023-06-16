import { Component } from '@angular/core';
const showElement = {
  myelement:false
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  showElement=showElement;
  toggleElement (myelement:any){
    showElement.myelement = !showElement.myelement;
    // console.log(myelement);
    
  }

}
