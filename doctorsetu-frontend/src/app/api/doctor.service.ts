import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient
  ) { }


  doctorAppointmentListCount(doctor_id, appointment_status, from, to, state, pin) {
    console.log(state);
    console.log(pin);
    if (state == 'All States') {
      state = "All"
    }
    if (pin == "All Pin Code") {
      pin = "All"
    }
    var data = {
      "doctor_id": doctor_id,
      "appointment_status": appointment_status,
      "to": from,
      "from": to,
      "state": state,
      "pin": pin

    }
    return this.http.post<any>(`${environment.apiUrl}/doctor/appointment/count`, data);
  }



  changeOnlineStatus(doctor_id, is_online) {
    var data = {
      "online": is_online,
      "doctor_id": doctor_id

    }
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/changestatus`, data);


  }

  doctorDetailsbysessionID() {
    var data = { "sessionID": localStorage.getItem("sessionID") };
    console.log(data)
    return this.http.post<any>(`${environment.apiUrl}/users/me`, data);

  }

  doctorDetails(doctor_id: any) {
    var data = {
      "doctor_id": doctor_id

    }
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/doctorbyID`, data);

  }

  doctorUpdate(id, updateData) {

    console.log(updateData)
    
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/update`, { 'id': id, 'updateData': updateData });
  }

  doctorUpdateSlot(id, updateData) {
   // let x = '${environment.apiUrl}/doctor/profile/updatepersonalslot';
    alert(`${environment.apiUrl}/doctor/profile/updatepersonalslot`)
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/updatepersonalslot`, { 'id': id, 'updateData': updateData });
  }

  hospitalAdd(id, adddata) {
    return this.http.post<any>(`${environment.apiUrl}/hospital/details`, adddata);

  }

  updateDoctorslots(id, slots, hospital_enrolled) {
    console.log(id + "----")
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/updatehospitalslotDetails`, { 'doctor_id': id, 'hospitalslotDetails': slots, 'hospital_enrolled': hospital_enrolled });

  }


  sendotp(email, loginType, logintype) {
    //console.log("OTP will be send to " + email);
    return this.http.post<any>(`${environment.apiUrl}/users/generateloginOtp`, { 'loginID': email, 'loginType': loginType, 'logintype': logintype });
  }


  /*
   sendotp(email, loginType, logintype) {
    console.log("Sending Post Request to WebOTP ")
    return this.http.post<any>(`${environment.apiUrl}/users/webotp/websendotp`, {'email':email,'loginType':loginType, 'logintype':logintype});
   }
  */

  hospitalUpdate(id, updateData) {

    console.log(updateData)

    return this.http.post<any>(`${environment.apiUrl}/hospital/updatehospital`, { 'id': id, 'updateData': updateData });
  }
  getspecialitityList() {
    return this.http.get<any>(`${environment.apiUrl}/specialization/getAllListOfSpecialization`);


  }
  updateuserdetails(data) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/updateuserdetails`, data);

  }
  deleteuser(userID, loginType) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/deleteuser`, { 'userID': userID, 'loginType': loginType });


  }


  getuserdetails(id, loginType) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/getuserdetails`, { 'userID': id, 'loginType': loginType });

  }
  adduser(data) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/adduser`, data);

  }

  getaccesslist() {
    return this.http.get<any>(`${environment.apiUrl}/specialization/getaccesslist`);
  }
  getuserlist() {
    return this.http.get<any>(`${environment.apiUrl}/specialization/getuserlist`);
  }
  saveaccesslist(data) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/saveaccesslist`, { data: data });

  }
  removeSpeclization(name: any) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/delete`, { specialization: name });
  }
  removeSymptom(name: any) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/symptom/delete`, { symptom: name });
  }


  removeLanguage(name: any) {
    return this.http.post<any>(`${environment.apiUrl}/language/delete`, { language: name });
  }

  getSymptomsList() {
    return this.http.get<any>(`${environment.apiUrl}/symptoms/getAllList`);

  }
  getLanguagesList() {
    return this.http.get<any>(`${environment.apiUrl}/language/`);


  }
  updatelanguage(sl, name, code, status) {
    return this.http.post<any>(`${environment.apiUrl}/language/updatelanguage`, { "sl": sl, "name": name, "code": code, "status": status });

  }

  updateverify(id, name, status) {
    return this.http.post<any>(`${environment.apiUrl}/language/updateverify`, { "id": id, "name": name, "status": status });

  }

  addlanguage(name, code, status) {
    return this.http.post<any>(`${environment.apiUrl}/language/addlanguage`, { "name": name, "code": code, "status": status });

  }
  addverify(name, status) {
    return this.http.post<any>(`${environment.apiUrl}/language/addverify`, { "name": name, "status": status });

  }
  updatespecialization(file) {
    console.log(file)
    return this.http.post<any>(`${environment.apiUrl}/specialization/updatespecialization`, file);

  }
  addspecialization(file) {

    return this.http.post<any>(`${environment.apiUrl}/specialization/addspecialization`, file);
  }

  addhospitalicon(file) {

    return this.http.post<any>(`${environment.apiUrl}/specialization/addhospitalIcon`, file);
  }

  profileimage(file) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/profilepic/upload`, file);

  }

  doctordocumentsupload(file) {

    console.log(file)
    return this.http.post<any>(`${environment.apiUrl}/specialization/uploadspecialization`, file);

  }

  updatesymptom(file) {

    return this.http.post<any>(`${environment.apiUrl}/specialization/editsymptom`, file);

  }

  canceleappointment(data) {
    console.log(data);
    console.log("=========================================")

    return this.http.post<any>(`${environment.apiUrl}/patient/appointment/canceleappointment`, data);

  }
  addsymptom(file) {

    return this.http.post<any>(`${environment.apiUrl}/specialization/addsymptom`, file);

  }


  login(email: any, pwd: any, loginType: any, logintype: any) {

    //  var headers = new HttpHeaders({'accept':'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE','Access-Control-Allow-Headers': 'X-Requested-With,content-type'});

    return this.http.post<any>(`${environment.apiUrl}/users/otplogin`, { "loginID": email, "otp": pwd, "loginType": loginType, "logintype": logintype });

  }
  getconsultaionList() {
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/doctorlist`, {});
  }
  getdoctorlist() {
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/doctorlist`, {});

  }
  getdoctorlistall() {
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/doctorlistAll`, {});

  }
  getverifiedlist() {
    return this.http.get<any>(`${environment.apiUrl}/admin/verifylist`);

  }
  updateverifiedlist(doctor_id, verified, verify) {

    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/updateVerified`, { 'doctor_id': doctor_id, 'verified': verified, 'verify': verify });

  }

  refundpayment(date) {
    return this.http.post<any>(`${environment.apiUrl}/doctor/profile/refundpayment`, date);

  }

  removeVerify(name: any) {
    return this.http.post<any>(`${environment.apiUrl}/specialization/deleteverify`, { verify: name });
  }



}







