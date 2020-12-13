/**
 * @description       : 
 * @author            : i.lakshmideepak@gmail.com
 * @group             : 
 * @last modified on  : 12-11-2020
 * @last modified by  : i.lakshmideepak@gmail.com
 * Modifications Log 
 * Ver   Date         Author                      Modification
 * 1.0   12-11-2020   i.lakshmideepak@gmail.com   Initial Version
**/
import { LightningElement, api } from "lwc";
const TILE_WRAPPER_SELECTED_CLASS = "tile-wrapper selected";
const TILE_WRAPPER_UNSELECTED_CLASS = "tile-wrapper";
export default class BoatTile extends LightningElement {
  @api boat;
  @api selectedBoatId;
  get backgroundStyle() {
    return "background-image:url(${this.boat.Picture__c})";
  }
  get tileClass() {
    return this.selectedBoatId
      ? TILE_WRAPPER_SELECTED_CLASS
      : TILE_WRAPPER_UNSELECTED_CLASS;
  }
  selectBoat() {
    this.selectedBoatId = !this.selectedBoatId;
    const boatselect = new CustomEvent("boatselect", {
      detail: {
        boatId: this.boat.Id,
      },
    });
    this.dispatchEvent(boatselect);
  }
}