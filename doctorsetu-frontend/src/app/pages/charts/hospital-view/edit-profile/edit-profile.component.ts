import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Params, Router,ActivatedRoute } from '@angular/router';
import { DoctorService } from './../../../../api/doctor.service';
import { environment } from './../../../../../environments/environment';
import { PatientService } from './../../../../api/patient.service';

@Component({
  selector: 'ngx-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  options = [
    { value: 'This is value 1', label: 'Male' },
    { value: 'This is value 2', label: 'Female' },
    { value: 'This is value 3', label: 'Other' },
  ];
  option;

  constructor( private patientService:PatientService, private doctorService: DoctorService, private router: Router, private activatedRoute: ActivatedRoute) {}
  days: any = [{ name: 'mon', fname: 'monday' }, { name: 'tue', fname: 'tuesday' }, { name: 'wed', fname: 'wednesday' }, { name: 'thu', fname: 'thursday' }, { name: 'fri', fname: 'friday' }, { name: 'sat', fname: 'saturday' }, { name: 'sun', fname: 'sunday' }];
  appointmentType: any = [{ name: "call", icon: "fas fa-phone" }, { name: "video", icon: "fas fa-video" }, { name: "whatsapp", icon: "fab fa-whatsapp" }, { name: "clinic", icon: "fas fa-clinic-medical" }];
  id:string;
  doctor_name:string;
  doctor:any = [];
  address:string ='';
  phone:string;
  affiliations:string;
  email:string;
  doc_dob:any;
  gender:string;
  StateMC:string;
  smc:string;
  imr:string;
  qualification:string;
  specialisation:string='';
  languages:string;
  max:number=10;
  symptoms:string='';
  about:string;
  pin:string= '';
  achievements:string='';
  clinicname:string;
  haveclinic:string;
  profileimg:any;
  registration_number:string='';
  hospital_email:string;
  hospital_ph:string;
  avaliableMode: any = [{ name: "call", icon: "fas fa-phone" }, { name: "video", icon: "fas fa-video" }, { name: "whatsapp", icon: "fab fa-whatsapp" }, { name: "clinic", icon: "fas fa-clinic-medical" }]
  city:string ='';
  state:string ='';
  avaliableDays:any;
  symptomslist:any;
  specializationList:any;
  selected:any;
  pwd:any;
  doc_clinic_city:any;
  doc_clinic_state:any;
  doc_clinic_pin:any;
  languageslist:any;
  any:any=['Dentist'];
  image:any = 'https://www.lyfboat.com/app/uploads/hospitals/default-hospital-profile.jpg';
  contact_person:string ='';
  hosp_name:string;
  hospital:any={};
  slotDetails:[];
  contact_person_name:string;
  consultationlist: any ={};
  interval:any;
  location:any;
  branch_id:string;
  add_branch:string;
  doctor_enrolled:any=[]
  add_hospital:string;
  lat: any = 12.991559579643953;
  lng: any = 77.59527616202831;
  mapType = 'satellite';
  map:boolean=false;

if (navigator){
navigator.geolocation.getCurrentPosition( pos => {
    this.lng = +pos.coords.longitude;
    this.lat = +pos.coords.latitude;
  });
}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.queryParams.id;
    this.branch_id = this.activatedRoute.snapshot.queryParams.branch_id;
    this.add_branch = this.activatedRoute.snapshot.queryParams.addbranch;
     this.add_hospital =this.activatedRoute.snapshot.queryParams.hospital_id;
if(this.activatedRoute.snapshot.queryParams.addbranch == undefined && this.activatedRoute.snapshot.queryParams.hospital_id == undefined){
 
  this.gethospitaldetailsbyID();

}else{

  this.image="https://www.lyfboat.com/app/uploads/hospitals/default-hospital-profile.jpg"

}

this.doctorService.getspecialitityList().subscribe((specialization) => {
  this.specializationList =specialization.response;
  
})

  this.doctorService.getLanguagesList().subscribe((languages) => {
    this.languageslist =languages.response;
    })
 
    this.doctorService.getSymptomsList().subscribe((symptom)=>{
      this.symptomslist=symptom.response;
    })
  }

  gethospitaldetailsbyID(){
    this.patientService.gethospitaldetailsbyID(this.id).subscribe((response) => {
      delete response.response._id;
      this.hospital=response.response;
      if(this.branch_id != undefined){
        var branch =response.response.branches.filter(obj => obj.branch_id === this.branch_id);      
        branch =branch[0]
        this.address=branch.address || ''
        this.image = branch.hosp_logo || 'https://www.lyfboat.com/app/uploads/hospitals/default-hospital-profile.jpg';
        this.symptoms = branch.symptoms;
        this.specialisation = branch.specialisation;
        this.address = branch.address;
        this.about = branch.about;
        this.affiliations= branch.affiliations || '';
        this.contact_person = branch.contact_person ||'';
        this.hosp_name = branch.hosp_name;

        if(branch.marker){
          this.lat = branch.marker.latitude || 12.991559579643953;
          this.lng = branch.marker.longitude || 77.59527616202831;
          }

        this.doctor_enrolled=branch.doctor_enrolled || [];
        this.city = branch.city || '';
         this.state = branch.state || '';
        this.pin = branch.pin || '';
        this.contact_person_name = branch.contact_person_name || ''
        this.registration_number = branch.registration_number || '';

        this.hospital_email = branch.email || '';
        this.hospital_ph = branch.phone || '';
        this.slotDetails=branch.slotDetails
        this.achievements=branch.achievements || '';

               branch.slotDetails.forEach( item =>{ 
                this.interval= parseInt(item.interval);
                
                this.consultationlist['config_' + this.fileno] = {
                  startTime: item.starttime,
                  endTime: item.endtime,
                  days: item.days,
                  avaliableMode: item.avaliableMode,
                }
                this.fileno++;
              
              });
       }else{

        if(this.hospital.marker){
          this.lat=this.hospital.marker.latitude || 12.991559579643953;
          this.lng= this.hospital.marker.longitude || 77.59527616202831;
          }
      this.address = this.hospital.address || ''
      this.image = this.hospital.hosp_logo || 'https://www.lyfboat.com/app/uploads/hospitals/default-hospital-profile.jpg';
      this.hosp_name = this.hospital.hosp_name;
      this.city = this.hospital.city || '';
      this.affiliations= this.hospital.affiliations || '';
      this.symptoms = this.hospital.symptoms;
      this.specialisation =this.hospital.specialisation;
      this.achievements=this.hospital.achievements
       this.state = this.hospital.state || '';
      this.pin = this.hospital.pin || '';
      this.about =this.hospital.about || '';
      this.location =this.hospital.location || '';
      this.contact_person=this.hospital.contact_person || '';
      this.interval = this.hospital.interval || '30';
      this.slotDetails=response.response.slotDetails
      this.contact_person_name=response.response.contact_person_name || ''
      this.hospital_email = response.response.email || response.response.hospital_email;
      this.hospital_ph = response.response.phone || '';
      this.registration_number=response.response.registration_number;

      if(this.slotDetails != undefined){
response.response.slotDetails.forEach( item =>{ 
  this.interval= parseInt(item.interval);
      
  this.consultationlist['config_' + this.fileno] = {
    startTime: item.starttime,
    endTime: item.endtime,
    days: item.days,
    avaliableMode: item.avaliableMode,
  }
  this.fileno++;

});
       }
       }
    })
  }

    
  isClinictoggal(){
      for (var key in this.consultationlist) {
        var index = this.consultationlist[key].avaliableMode.indexOf("clinic");
        this.consultationlist[key].avaliableMode.splice(index, 1);
      }
    
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault(); 
    }
  }

  keyPressPin(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 6 && !pattern.test(inputChar)) {
      event.preventDefault(); 
    }
  }
  toggleconsult(name, key, type) {
    if (this.consultationlist[key][type].includes(name)) {
      let index = this.consultationlist[key][type].indexOf(name);
      if (index > -1) {
        this.consultationlist[key][type].splice(index, 1);
      }
    } else {
      this.consultationlist[key][type].push(name);
    }
  
  }

  addbranch(){
    this.patientService.gethospitaldetailsbyID(this.id).subscribe((response) => {
      delete response.response._id;
      this.hospital=response.response;
       if(this.hospital.branches == undefined){
        this.hospital.branches =[];
       }
  var branch = {
    'branch_id':(new Date()).getTime().toString(),
  'address':this.address,
  'hosp_logo':this.image,
  'hosp_name':this.hosp_name,
  'email':this.hospital_email,
  'phone':this.hospital_ph,
  'city':this.city,
  'about':this.about,
  'affiliations':this.affiliations,
  'marker':{'latitude':this.lat,
'longitude':this.lng
},
   'state':this.state,
   'pin':this.pin,
   'symptoms':this.symptoms,
   'specialisation':this.specialisation,
   'achievements':this.achievements,
   'registration_number':this.registration_number,
   'contact_person':this.contact_person,
    'slotDetails':[],
    'doctor_enrolled':[]
  }
  this.hospital.branches.push(branch);
       
       for (let item in this.consultationlist) {
        branch.slotDetails.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'avaliableMode':this.consultationlist[item].avaliableMode})
       }

     this.doctorService.hospitalUpdate(this.id, this.hospital).subscribe((response) => {
   
       console.log("Added succfully!");
       setTimeout(() => {
        this.router.navigateByUrl('pages/charts/d3');
        // window.location.reload();

      }, 123);
   
     })

    })
    
   }
   filename:any;
   handleFileInput(event:any) {
    // this.fileupdate =true;
    console.log(event.target.files.length)
    // this.displayFileedit = event.target.files[0].name;

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
      this.openModal()
    }
  }


   openModal() {
    const formData = new FormData();
    let data =this.myForm.get('fileSource').value;
    formData.append('icon', this.myForm.get('fileSource').value);
    this.doctorService.addhospitalicon(formData).subscribe((icon: any) => {

      console.log(icon.message)
      this.image = icon.message;
      
  })
}
   addhospital(){
      this.id =this.activatedRoute.snapshot.queryParams.hospital_id;
      this.hospital.id= this.id;
      this.hospital.branch_id =this.id
      this.hospital.address = this.address;
      this.hospital.hosp_logo  = this.image;
      this.hospital.hosp_name = this.hosp_name;
      this.hospital.city = this.city;
      this.hospital.state = this.state;
      this.hospital.phone = this.hospital_ph;
      this.hospital.pin = this.pin;
      this.hospital.hosp_id= "1";
      this.hospital.hosp_desc = '';
      this.hospital.affiliations = this.affiliations;
      this.hospital.marker = {'latitude':this.lat,
                            'longitude':this.lng
                          };
      this.hospital.about = this.about;
      this.hospital.symptoms = this.symptoms;
      this.hospital.specialisation = this.specialisation;
      this.hospital.achievements=this.achievements;
      this.hospital.registration_number=this.registration_number;
      this.hospital.email = this.hospital_email;
      this.hospital.contact_person = this.contact_person || '';
      this.hospital.slotDetails=[];
     for (let item in this.consultationlist) {
       this.hospital.slotDetails.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'avaliableMode':this.consultationlist[item].avaliableMode})
     }
        this.doctorService.hospitalAdd(this.id, this.hospital).subscribe((response) => {
        this.router.navigateByUrl('pages/charts/hospital-view?id='+this.id);
      // if(this.filename != undefined){
      //   this.openModal();
      // }else{
        setTimeout(() => {
          this.router.navigateByUrl('pages/charts/d3');
          window.location.reload();

        }, 123);
      // }
  
 
   })
   }
  removeConfigBlock(key) {
    if(key != 'config_0'){
    delete this.consultationlist[key];
    }
  }
  fileno: number = 0;

  addconsultblock() {
    if(this.fileno <5){
    this.consultationlist['config_' + this.fileno] = {
      startTime: '10:00',
      endTime: '20:00',
      days: [],
      avaliableMode: [],
    }
    this.fileno++;
  }
  }
  mapview(){
    this.map=!this.map

  }
  
  
  markerDragEnd($event: any) {
    console.log($event.latLng.lat());
    this.lat = $event.latLng.lat();
    this.lng = $event.latLng.lng();
  }
updatefields(){
  if(this.branch_id != undefined){
    var branch =this.hospital.branches.filter(obj => obj.branch_id === this.branch_id);      

    for(let i=0; i<this.hospital.branches.length;i++){

      if(this.hospital.branches[i].branch_id == this.branch_id){
        this.hospital.branches[i].address = this.address;
        // if(this.filename != undefined){
        // this.hospital.branches[i].hosp_logo = this.filename;
        // }else{
          this.hospital.branches[i].hosp_logo = this.image;

        // }
        this.hospital.branches[i].doctor_enrolled =this.doctor_enrolled || []
        this.hospital.branches[i].hosp_name = this.hosp_name;
        this.hospital.branches[i].city = this.city;
        this.hospital.branches[i].state = this.state;
        this.hospital.branches[i].pin = this.pin;
        this.hospital.branches[i].affiliations = this.affiliations;

        this.hospital.branches[i].marker = {}
        this.hospital.branches[i].marker = {'latitude':this.lat,
                                            'longitude':this.lng
                                           };
        this.hospital.branches[i].email = this.hospital_email;
        this.hospital.branches[i].phone = this.hospital_ph;
        this.hospital.branches[i].about =this.about;
        this.hospital.branches[i].symptoms = this.symptoms;
        this.hospital.branches[i].specialisation = this.specialisation;
        this.hospital.branches[i].achievements=this.achievements;
        this.hospital.branches[i].registration_number=this.registration_number;
        this.hospital.branches[i].contact_person = this.contact_person || '';
        this.hospital.branches[i].slotDetails=[];
    for (let item in this.consultationlist) {
      this.hospital.branches[i].slotDetails.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[item].avaliableMode})
    }
  this.doctorService.hospitalUpdate(this.id, this.hospital).subscribe((response) => {

    // if(this.filename != undefined){
      // this.openModal()
    // }else{
       window.location.reload();
    // }
  })
}
}
  }else{

  
   this.hospital.address = this.address;
    this.hospital.icon = this.image;
    
      this.hospital.hosp_logo  = this.image;

      this.hospital.hosp_name = this.hosp_name;
    this.hospital.city = this.city;
     this.hospital.state = this.state;
    this.hospital.pin = this.pin;
    this.hospital.marker={}
    this.hospital.marker = { 'latitude':this.lat,
                             'longitude':this.lng
                          };
    this.hospital.symptoms = this.symptoms;
    this.hospital.about = this.about;
    this.hospital.phone = this.hospital_ph;
    this.hospital.affiliations = this.affiliations;
    this.hospital.contact_person_name = this.contact_person_name;
    this.hospital.specialisation = this.specialisation;
    this.hospital.achievements=this.achievements;
    this.hospital.registration_number=this.registration_number;
    this.hospital.email = this.hospital_email;
    this.hospital.branch_id =this.id
    this.hospital.contact_person = this.contact_person || '';

    this.hospital.slotDetails=[];

    for (let item in this.consultationlist) {
      this.hospital.slotDetails.push({'days':this.consultationlist[item].days,'starttime':this.consultationlist[item].startTime,'endtime':this.consultationlist[item].endTime,'interval':this.interval.toString(),'avaliableMode':this.consultationlist[item].avaliableMode})
    }
  this.doctorService.hospitalUpdate(this.id, this.hospital).subscribe((response) => {

    // if(this.filename != undefined){
      // this.openModal()
    // }else{
       window.location.reload();
    // }
  })
}
}

  onSelectFile(event) { 
    
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.profileimg = event.target.result;

      }
    }
}

}
