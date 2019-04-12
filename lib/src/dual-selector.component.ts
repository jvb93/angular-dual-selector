import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dual-selector',
  templateUrl: './dual-selector.component.html',
  styleUrls: ['./dual-selector.component.css']
})
export class DualSelectorComponent {

  @Input() availableHeading = 'Available Items'
  @Input() selectedHeading = 'Selected Items'

  @Input() availableItems: Array<any> = []
  @Input() selectedItems: Array<any> = []

  @Input() height = '300px'

  @Output() selectedItemsChange = new EventEmitter();

  private highlightSelectedItem = -1;
  private highlightAvailableItem = -1;

  private highlightItem(index: number, isSelectedItem: boolean) {

    if (isSelectedItem) {
      this.highlightSelectedItem = index;
    } else {
      this.highlightAvailableItem = index;
    }

  }

  addSelectedItem() {
    this.selectedItems.push(this.availableItems[this.highlightAvailableItem]);
    this.availableItems.splice(this.highlightAvailableItem, 1);

    if (this.highlightAvailableItem === this.availableItems.length) {
      this.highlightAvailableItem = (this.availableItems.length - 1);
    }

    this.selectedItemsChange.emit(this.selectedItems)
  }

  removeSelectedItem() {
    this.availableItems.push(this.selectedItems[this.highlightSelectedItem]);
    this.selectedItems.splice(this.highlightSelectedItem, 1);

    if (this.highlightSelectedItem === this.selectedItems.length) {
      this.highlightSelectedItem = (this.selectedItems.length - 1);
    }

    this.selectedItemsChange.emit(this.selectedItems)
  }


  private panelStyle() {
    return {
      height: this.height,
      'overflow': 'auto'
    }
  }
}
