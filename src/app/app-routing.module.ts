import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const newLocal = "incident";
const routes: Routes = [
  { path: "", redirectTo: "advertisement", pathMatch: "full" },

  {
    path: "advertisement",
    loadChildren: "./advertisement/advertisement.module#AdvertisementPageModule"
  },
  {
    path: "incidents",
    loadChildren: "./incidents/incidents.module#IncidentsPageModule"
  },
  {
    path: "incidentform",
    loadChildren: "./incident-form/incident-form.module#IncidentFormPageModule"
  },
  { path: "modal", loadChildren: "./modal/modal.module#ModalPageModule" },
  {
    path: "popover",
    loadChildren: "./popover/popover.module#PopoverPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
