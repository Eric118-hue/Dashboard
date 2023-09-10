import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppService {
  
  setLightMode(mode: 'light' | 'dark'): void {
    const root = window.document.documentElement;
    if (mode === 'light') {
      root.style.setProperty('--color-white', '#FFFFFF');
      root.style.setProperty('--color-black', '#00042C');
      root.style.setProperty('--color-gray', '#707070');
      root.style.setProperty('--color-lightgray', '#F0F0F0');
      root.style.setProperty('--font-color-gray', '#707070');
      root.style.setProperty('--gray-scale', '0%');
      root.style.setProperty('--active-color', '#0A7FEB');
      
    } else {
      root.style.setProperty('--color-white', '#000000');
      root.style.setProperty('--color-black', '#FFFFFF');
      root.style.setProperty('--color-gray', '#1F1F1F');
      root.style.setProperty('--color-lightgray', '#1F1F1F');
      root.style.setProperty('--font-color-gray', '#FFFFFF');
      root.style.setProperty('--gray-scale', '100%');
      root.style.setProperty('--active-color', '#999999');
    }
  }
}