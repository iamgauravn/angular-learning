import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { UserCardViewComponent } from './user-card-view/user-card-view.component';
import { OutputComponentComponent } from './output-component/output-component.component';

export const routes: Routes = [
    {
        path: 'basics',
        component: BasicsComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'user-card-view/:username',
        component: UserCardViewComponent
    }, 
    {
        path: 'output-view',
        component: OutputComponentComponent
    }
];
