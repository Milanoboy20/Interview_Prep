import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService {
  constructor() { }

  setTask(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to local storage', e);
    }
  }

  getTask(key: string): any {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Error getting from local storage', e);
      return null;
    }
  }

  removeTask(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
