/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import {AppRoutingModule} from "../../app-routing.module";
import {ModelManagerService} from "../model-manager.service";
import {SpaAngularEditableComponentsModule} from "@adobe/cq-angular-editable-components";
import {APP_BASE_HREF} from "@angular/common";
import { ModelManager } from '@adobe/cq-spa-page-model-manager';

describe('PageComponentComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SpaAngularEditableComponentsModule, AppRoutingModule],
      providers: [ ModelManagerService,
        { provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [PageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Stub ModelManager
    spyOn(ModelManager, "getData").and.callFake(function() {
      return Promise.resolve({});
    });

    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
