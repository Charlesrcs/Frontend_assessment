import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem} from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,MenubarModule,TooltipModule,ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  ngOnInit() {
  }
}
