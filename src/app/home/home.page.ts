import { Component } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  resultado: string = "";

  async scanBarcode(val?: number) {
    try{
       const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: val || 17,
        cameraDirection: 2
        });
        console.log(result);
        return result.ScanResult;
    } catch(e) {
      throw(e);
    } 
  }
}
