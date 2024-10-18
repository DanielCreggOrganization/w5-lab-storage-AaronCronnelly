import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  key: string = '';
  value: string = '';
  output: string = '';

  constructor(private storageService: StorageService) {}

  async setItem(){
    try{
      await this.storageService.set(this.key, this.value);
      this.output = 'Set ${this.key}: ${this.value}';
    } catch(e){
      console.error('Error setting item', e);
      this.output = `Error setting item: ${e}`;
    }
  }

  async getItem() {
    try{
      const value = await this.storageService.get(this.key);
      this.output = `Got ${this.key}: ${value}`;
    }catch(e){
      console.error('Error getting item', e);
      this.output = `Error getting item: ${e}`;
    }
  }


}
