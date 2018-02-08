import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { FeedBack } from '../../models/feedback'; //import model FeedBack เขามาใชงาน

76

@Injectable()
export class AuthServiceProvider {

constructor(public http: Http) {}

//method signup รับพารามิเตอร 3 ตัว และคืนคา FeedBack กลับออกไป
public signup(name_user:string,lname_user:string, tel_user:number, prov_user:string, amp_user:string, tam_user:string,
	email_user:string,pass_user:string): Observable<FeedBack> {

let myHeader = new Headers();
myHeader.append('Content-Type', 'application/json'); //กําหนด header

//ประกาศตัวแปร data เพื่อเก็บขอมูลที่รับมา
let data = {
'name_user': name_user,
'lname_user': lname_user,
'tel_user': tel_user,
'prov_user': prov_user,
'amp_user': amp_user,
'tam_user': tam_user,
'email_user': email_user,
'pass_user': pass_user
}
//ใช method post() สําหรับสง data เพื่อไปบันทึกขอมูล
return this.http.post('http://localhost/isnre/php_app/insert.php', data, { headers: myHeader
})
.map((res: Response) => {
let data = res.json(); //รับ json จาก Backend แลว return ออกไปใหเพจ
return data;
}).catch(this.handleError);
}

private handleError(error: any) {
return Observable.throw(error.json().errorMessage || 'Server เกิดขอผิดพลาด');
}
}