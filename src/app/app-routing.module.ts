import { HomeComponent } from './components/home/home.component';
import { BoardsChoiceComponent } from './components/boards-choice/boards-choice.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { DashboardComponent } from './components/tracking/dashboard/dashboard.component';
import { ActivityComponent } from './components/tracking/activity/activity.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountService } from './services/account.service'
import { ApiService } from './services/api.service'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'boards',
        component: BoardsChoiceComponent
    },
    {
        path: 'tracking',
        component: TrackingComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'activity',
                component: ActivityComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: [
        AccountService,
        ApiService
    ]
})
export class AppRoutingModule { }
