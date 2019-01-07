import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductTags, TagFilter } from '../../../../../shared/classes/product';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  
  // Using Input nad Output EventEmitter
  @Input() public tagsFilters : ProductTags[] = [];
  @Output() tagFilters  : EventEmitter<ProductTags[]> = new EventEmitter<ProductTags[]>();
  
  // Array
  public checkedTagsArray: any[] = [];
  
  constructor() { }

  ngOnInit() {  
  	  this.tagFilters.emit(this.checkedTagsArray);   // Pass value Using emit 
  }

  // value checked call this function
  checkedFilter(event){
      let index = this.checkedTagsArray.indexOf(event.target.value);  // checked and unchecked value
       if (event.target.checked)   
           this.checkedTagsArray.push(event.target.value); // push in array cheked value
        else 
           this.checkedTagsArray.splice(index,1);  // removed in array unchecked value           
  }

  

}
