import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {BarcodeScanner} from 'ionic-native';
import { CommunityDataService } from '../../providers/communitydata-service';
import { ScanPage } from '../scan/scan';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers:[CommunityDataService]
})

export class Page1 {
  title: string = "Home";
  CommunityData: any;
  
  constructor(public navCtrl: NavController, public communityDataService: CommunityDataService) {
    
  }

  click() {
    BarcodeScanner.scan()
      .then((result) => {
        if (!result.cancelled) {
          alert(result);
          this.scanDetails(result);
        }
        })
      .catch((err) => {
        alert("error");
        alert(err);
      })
  }

  scanDetails(details) {
    this.navCtrl.push(ScanPage, {details: details});
  }

  ionViewDidLoad(){
    
  }

  loadCommunityData(){
    this.communityDataService.load()
    .then(data => {
      this.CommunityData = data;
    });
  }

}
