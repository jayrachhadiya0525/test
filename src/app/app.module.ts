import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutoCompleteModule } from 'primeng/autocomplete'
import { TreeModule } from 'primeng/tree'
import { ButtonModule } from 'primeng/button'
import { AccordionModule } from 'primeng/accordion'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CalendarModule } from 'primeng/calendar'
import { CheckboxModule } from 'primeng/checkbox'
import { ChipsModule } from 'primeng/chips'
import { ColorPickerModule } from 'primeng/colorpicker'
import { DropdownModule } from 'primeng/dropdown'
import { InputMaskModule } from 'primeng/inputmask'
import { InputTextModule } from 'primeng/inputtext'
import { InputSwitchModule } from 'primeng/inputswitch'
import { PasswordModule } from 'primeng/password'
import { SliderModule } from 'primeng/slider'
import { SelectButtonModule } from 'primeng/selectbutton'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { TableModule } from 'primeng/table'
import { CardModule } from 'primeng/card'
import { TabViewModule } from 'primeng/tabview'
import { ToolbarModule } from 'primeng/toolbar'
import { SplitButtonModule } from 'primeng/splitbutton'
import { DialogModule } from 'primeng/dialog'
import { SidebarModule } from 'primeng/sidebar'
import { TooltipModule } from 'primeng/tooltip'
import { MenuModule } from 'primeng/menu'
import { ToastModule } from 'primeng/toast'
import { StepsModule } from 'primeng/steps'
import { MessagesModule } from 'primeng/messages'
import { BadgeModule } from 'primeng/badge'
import { KnobModule } from 'primeng/knob'
import { RatingModule } from 'primeng/rating'



import { TreeComponent } from './tree/tree.component';
import { AccordionComponent } from './accordion/accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ChipsComponent } from './chips/chips.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { InputTextComponent } from './input-text/input-text.component';
import { PasswordComponent } from './password/password.component';
import { SliderComponent } from './slider/slider.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenuComponent } from './menu/menu.component';
import { StepsComponent } from './steps/steps.component';
import { MassageComponent } from './massage/massage.component';
import { BadgeComponent } from './badge/badge.component';
import { KnobComponent } from './knob/knob.component';
import { RatingComponent } from './rating/rating.component';

const angularPrimeng: any = [
  AutoCompleteModule,
  TreeModule,
  ButtonModule,
  AccordionModule,
  CalendarModule,
  CheckboxModule,
  ChipsModule,
  ColorPickerModule,
  DropdownModule,
  InputMaskModule,
  InputTextModule,
  InputSwitchModule,
  PasswordModule,
  SliderModule,
  SelectButtonModule,
  ToggleButtonModule,
  TableModule,
  CardModule,
  TabViewModule,
  ToolbarModule,
  SplitButtonModule,
  DialogModule,
  SidebarModule,
  TooltipModule,
  MenuModule,
  ToastModule,
  StepsModule,
  MessagesModule,
  BadgeModule,
  KnobModule,
  RatingModule
]
@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    AccordionComponent,
    AutoCompleteComponent,
    CalendarComponent,
    CheckBoxComponent,
    ChipsComponent,
    ColorPickerComponent,
    DropdownComponent,
    InputGroupComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    PasswordComponent,
    SliderComponent,
    SelectButtonComponent,
    ButtonComponent,
    TableComponent,
    CardComponent,
    TabComponent,
    ToolbarComponent,
    DialogComponent,
    SlidebarComponent,
    TooltipComponent,
    MenuComponent,
    StepsComponent,
    MassageComponent,
    BadgeComponent,
    KnobComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularPrimeng,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
