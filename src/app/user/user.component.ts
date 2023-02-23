import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from '../modal-component/modal-component.component';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor( private service:UsersService,public dialog: MatDialog) {
  }
  
  users : any  = [];
  filteredUsers : any[] = [];
  showImage : boolean = false;
  selectedImage : {src:string, alt : string} | undefined;
  enteredSearchValue : string = '';
  private _listFilter : string = '';
  get listFilter () : string {
    return this._listFilter
  }
  
  set listFilter (value : string) {
    this._listFilter = value;
    this.filteredUsers = this.performFilter(value)
  }
  performFilter (filterBy:string) : any[] {
    filterBy= filterBy.toLowerCase();
    return this.users.filter((user:any)=>user.location.country.toLowerCase().includes(filterBy))

  }
   OpenModal (image:any) {
    this.selectedImage = image
    const dialogRef = this.dialog.open(ModalComponentComponent , {
      height:'40%', panelClass: 'custom-dialog-container',

   data : {
     image : this.selectedImage,

   }
    })
    dialogRef.afterOpened().subscribe(() => {
      const width = window.innerWidth > 768 ? '40%' : '100%';
      dialogRef.updateSize(width);
    });
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe(response => {
      this.users=response.results
      this.filteredUsers=this.users;
    })
  }

}
