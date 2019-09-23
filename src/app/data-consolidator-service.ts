import { Injectable } from '@angular/core';
declare const PhoneCaseRepository:any;
declare const TShirtRepository:any;
declare const LawnmowerRepository:any;

@Injectable({
  providedIn: 'root'
})
export class DataConsolidatorService {
  products = [];
  constructor(

  ) { }


  getAllData(){
    this.getLawnmowerData();
    this.getPhoneCaseData();
    this.getTShirtData();
    return this.products;
  }

  getLawnmowerData(){
    let datas = new LawnmowerRepository().getAll();
    datas.forEach(data => {
      data['type'] = "Lawnmower"
      this.products.push(data);
    });
  }

  getPhoneCaseData(){
    let datas = new PhoneCaseRepository().getAll();
    datas.forEach(data => {
      data['type'] = "Phone Case"
      this.products.push(data);
    });
  }

  getTShirtData(){
    let datas = new TShirtRepository().getAll();
    datas.forEach(data => {
      data['type'] = "T-Shirt"
      this.products.push(data);
    })
  }
}