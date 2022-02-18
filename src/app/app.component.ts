import { Component, VERSION } from '@angular/core';
import jsPDF from 'jspdf';
import { iterator } from 'rxjs/internal/symbol/iterator';
//import * as htmlToImage from "html-to-image";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  totalIterator:number[] = [];

  ngOnInit()
  {
    let iterator:number = 1;
    while(iterator <= 100)
    {
      this.totalIterator.push(iterator);
      iterator++;
    }
  }

  downloadPdf(){
    const element = document.getElementById("download-pdf");
    element.setAttribute("style", "overflow: initial !important;");
    console.log(element.childNodes);
    
    // htmlToImage.toCanvas(element).then((canvas) => {
    //   var imgWidth = 210;
    //   var pageHeight = 295;
    //   var imgHeight = (canvas.height * imgWidth) / canvas.width;
    //   var heightLeft = imgHeight;

    //   var pdf = new jsPDF("p", "mm");
    //   var position = 0;

    //   pdf.addImage(canvas.toDataURL(), "PNG", 0, position, imgWidth, imgHeight);
    //   heightLeft -= pageHeight;
    //   while (heightLeft >= 0) {
    //     position = heightLeft - imgHeight;
    //     pdf.addPage();
    //     pdf.addImage(canvas.toDataURL(), "PNG", 0, position, imgWidth, imgHeight);
    //     heightLeft -= pageHeight;
    //   }
    //   pdf.save("DemoPDF.pdf");
      
    //   element.removeAttribute("style");
    // });
  }
}
