import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  dataSource:any[] = [];
  displayedColumns: string[] = [ 'name', 'email'];
  userlist:any[] = [];
  searhcterm = new FormControl('');
  constructor(private users: UserService) { }

  ngOnInit(): void {
    this.userlist =  this.users.getFullList();
    this.dataSource = Object.assign([],this.userlist);
    this.searhcterm.valueChanges.pipe(
      debounceTime(400), // discard emitted values that take less than the specified time between output
      distinctUntilChanged() // only emit when value has changed
    ).subscribe(term => {
      this.dataSource = this.userlist.filter(item => item.user.name.first.includes(term));
    });
  }

}
