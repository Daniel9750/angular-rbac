import { TemplateRef, ViewContainerRef } from '@angular/core';
import { RbacService } from '../rbac/rbac.service';
import { IsGrantedDirective } from './is-granted.directive';
import { TestBed } from '@angular/core/testing';

describe('IsGrantedDirective', () => {
  
    let _rbacService:RbacService;
    let _templateRef:TemplateRef<any>;
    let _viewContainer:ViewContainerRef;


  it('should create an instance', () => {
    _rbacService = TestBed.inject(RbacService);
    _templateRef = TestBed.inject(TemplateRef);
    _viewContainer = TestBed.inject(ViewContainerRef);
    const directive = new IsGrantedDirective(
      _rbacService, _templateRef, _viewContainer
    );
    expect(directive).toBeTruthy();
  });
});