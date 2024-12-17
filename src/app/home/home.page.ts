import { Component } from '@angular/core';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerScanResult } from '@capacitor/barcode-scanner'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  resultado: string = "";

  async scanBarcode(val?: number) {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: val || 17,
        cameraDirection: 1
      });
      
      console.log(result);
      this.resultado = result.ScanResult;
    } catch(e: any) {
      console.error('Erro ao escanear:', e);
      if (e instanceof Error) {
        if (e.message.includes('permission')) {
          alert('É necessário permitir o acesso à câmera');
        } else if (e.message.includes('OverconstrainedError')) {
          alert('Erro ao acessar a câmera. Verifique se outro app não está usando a câmera.');
        }
      }
    } 
  }
}
