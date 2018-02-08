import { Injectable } from '@angular/core';
 
@Injectable()
export class ShareService {

    public usrData: any;
    public dat: any;
 
    constructor() {
        this.usrData="";
    }

    setUserData(usrData){
        this.usrData=usrData;
    }

    setLatLon(dat){
        this.dat=dat;
    }
  
    getUserData() {
        return this.usrData;
    }  

    getLatLon(){
        return this.dat;
    }
  
}