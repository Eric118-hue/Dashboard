import { Injectable } from "@angular/core";

export class DownloadService {
  
  downloadText(response: string, filename: string) {
    const downloadLink = <HTMLAnchorElement> document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(new Blob([response]));
    downloadLink.setAttribute('download', filename);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    setTimeout(() => {
      downloadLink.remove();
    }, 500);
  }

  downloadFromJson(data: string, filename: string) {
    this.downloadText(data, filename);    
  }

}
