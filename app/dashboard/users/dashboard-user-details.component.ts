import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {User} from '../../shared/models/user';
import {UserService} from '../../shared/services/user.service';

@Component({
  template:`
  <div class="jumbotron">
    <div *ngIf="user">
     <h2>{{user.name}}</h2> 
     
     <div class="from-group">
       <input type="text" [(ngModel)]="editName" class="form-control">
     </div>
     <br><br>
     <div class="form-group text-center">
       <button (click)="cancel()" class="btn btn-danger">Cancel</button>
       <button (click)="save()" class="btn btn-success">Save</button>
     </div>

    </div>
  </div>
  
  `
})
export class DashboardUserDetailsComponent implements OnInit{
  user:User;
  editName:string;

  constructor(
    private service:UserService,
    private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(){

    this.route.params.forEach(params=>{
      let username=params['username'];

      this.service.getUser(username).then(user=>{
        //console.log(user);
        this.user=user;
        this.editName=user.name;
      });
    });

    // let username=this.route.snapshot.params['username'];
    // //this.service.getUser(username).then(user=>this.user=user);
    // //or you can do
    // this.service.getUser(username).then(user=>{
    //   console.log(user);
    //   return this.user=user;
    // });
  }
 
  // dont save navigate to dashboard/users
  cancel(){
    this.router.navigate(['/dashboard/users']);
  }

  save(){
    this.user.name=this.editName;
    this.router.navigate(['/dashboard/users']);
  }
  canDeactivate(){
    console.log('nav away');

    if(this.user.name!==this.editName)
      return window.confirm('Discard changes?');

    return true;
  }

}