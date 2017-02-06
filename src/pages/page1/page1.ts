import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CommunityDataService } from '../../providers/communitydata-service'


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers:[CommunityDataService]
})

export class Page1 {
  title: string = "La Caja";
  CommunityData: any;
  
  constructor(public navCtrl: NavController, public communityDataService: CommunityDataService) {

    
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
