import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { EleveComponent } from 'app/pages/eleve/eleve/eleve.component';
import { PersonnelComponent } from 'app/pages/personnel/personnel/personnel.component';
import { ModeratorGuard } from 'app/moderator.guard';
import { UserGuard } from 'app/user.guard';
import { ChangepasswordComponent } from 'app/changepassword/changepassword.component';
import { UserComponent } from 'app/user/user.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent,canActivate:[ModeratorGuard] },
    { path: 'parametres',   component: ChangepasswordComponent,canActivate:[ModeratorGuard] },
    { path: 'table-list',     component: TableListComponent,canActivate:[ModeratorGuard] },
    { path: 'icons',          component: IconsComponent,canActivate:[ModeratorGuard] },
    { path: 'maps',           component: MapsComponent,canActivate:[ModeratorGuard] },
    { path: 'notifications',  component: NotificationsComponent,canActivate:[ModeratorGuard] },
    { path: 'eleves',  component: EleveComponent,canActivate:[ModeratorGuard] },
    { path: 'personnels',  component: PersonnelComponent,canActivate:[ModeratorGuard] },
    { path: 'dashboarduser', component: DashboardComponent,canActivate:[UserGuard] },
    { path: 'register',  component: UserComponent,canActivate:[ModeratorGuard] },

    { path: 'bususer' },
    { path: 'stationsuser' },
    { path: 'agencesuser' },
    { path: 'elevesuser'  },
    { path: 'classesuser' },
    { path: 'annee-scolaireuser' },
    { path: 'affectation-eleveuser' },
    { path: 'affectation-personneluser'},
    { path: 'lignes', title: 'Lignesuser' },

];
