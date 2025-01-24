import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = true;

  // Languages
  java: boolean = false;
  python: boolean = false;
  sql: boolean = false;
  kotlin: boolean = false;
  cpp: boolean = false;
  c: boolean = false;
  csharp: boolean = false;
  html5: boolean = false;
  css: boolean = false;
  haskell: boolean = false;
  x86Assembly: boolean = false;
  javascript: boolean = false;
  typeScript: boolean = false;
  r: boolean = false;
  faust: boolean = false;
  maxMsp: boolean = false;

  // Frameworks and Libraries
  reactNative: boolean = false;
  nodeJs: boolean = false;
  beautifulSoup: boolean = false;
  numpy: boolean = false;
  axios: boolean = false;
  expo: boolean = false;
  htmlSession: boolean = false;
  angular: boolean = false;
  ngxBootstrap: boolean = false;

  // Tools
  maven: boolean = false;
  gradle: boolean = false;
  git: boolean = false;
  perforce: boolean = false;
  microsoftSuite: boolean = false;
  uiPath: boolean = false;
  sap: boolean = false;
  powerAutomate: boolean = false;
  androidStudio: boolean = false;
  linux: boolean = false;
  unix: boolean = false;
  windows: boolean = false;
  tensorFlow: boolean = false;
  azureDevOps: boolean = false;
  postman: boolean = false;
  trello: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Jonathan Fielder - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    // Languages
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.sql) {
      filterTags.push(Tag.SQL);
    }
    if (this.kotlin) {
      filterTags.push(Tag.KOTLIN);
    }
    if (this.cpp) {
      filterTags.push(Tag.CPP);
    }
    if (this.c) {
      filterTags.push(Tag.C);
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if (this.html5) {
      filterTags.push(Tag.HTML5);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.haskell) {
      filterTags.push(Tag.HASKELL);
    }
    if (this.x86Assembly) {
      filterTags.push(Tag.X86_ASSEMBLY);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.r) {
      filterTags.push(Tag.R);
    }
    if (this.faust) {
      filterTags.push(Tag.FAUST);
    }
    if (this.maxMsp) {
      filterTags.push(Tag.MAX_MSP);
    }

    // Frameworks and Libraries
    if (this.reactNative) {
      filterTags.push(Tag.REACT_NATIVE);
    }
    if (this.nodeJs) {
      filterTags.push(Tag.NODE_JS);
    }
    if (this.beautifulSoup) {
      filterTags.push(Tag.BEAUTIFULSOUP);
    }
    if (this.numpy) {
      filterTags.push(Tag.NUMPY);
    }
    if (this.axios) {
      filterTags.push(Tag.AXIOS);
    }
    if (this.expo) {
      filterTags.push(Tag.EXPO);
    }
    if (this.htmlSession) {
      filterTags.push(Tag.HTMLSESSION);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.ngxBootstrap) {
      filterTags.push(Tag.NGXBOOTSTRAP);
    }

    // Tools
    if (this.maven) {
      filterTags.push(Tag.MAVEN);
    }
    if (this.gradle) {
      filterTags.push(Tag.GRADLE);
    }
    if (this.git) {
      filterTags.push(Tag.GIT);
    }
    if (this.perforce) {
      filterTags.push(Tag.PERFORCE);
    }
    if (this.microsoftSuite) {
      filterTags.push(Tag.MICROSOFT_SUITE);
    }
    if (this.uiPath) {
      filterTags.push(Tag.UIPATH);
    }
    if (this.sap) {
      filterTags.push(Tag.SAP);
    }
    if (this.powerAutomate) {
      filterTags.push(Tag.POWER_AUTOMATE);
    }
    if (this.androidStudio) {
      filterTags.push(Tag.ANDROID_STUDIO);
    }
    if (this.linux) {
      filterTags.push(Tag.LINUX);
    }
    if (this.unix) {
      filterTags.push(Tag.UNIX);
    }
    if (this.windows) {
      filterTags.push(Tag.WINDOWS);
    }
    if (this.tensorFlow) {
      filterTags.push(Tag.TENSORFLOW);
    }
    if (this.azureDevOps) {
      filterTags.push(Tag.AZURE_DEVOPS);
    }
    if (this.postman) {
      filterTags.push(Tag.POSTMAN);
    }
    if (this.trello) {
      filterTags.push(Tag.TRELLO);
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }


  ResetFilters() {
      // Languages
  this.java = false;
  this.python = false;
  this.sql = false;
  this.kotlin = false;
  this.cpp = false;
  this.csharp = false;
  this.html5 = false;
  this.css = false;
  this.haskell = false;
  this.x86Assembly = false;
  this.javascript = false;
  this.typeScript = false;
  this.r = false;
  this.faust = false;
  this.maxMsp = false;

  // Frameworks and Libraries
  this.reactNative = false;
  this.nodeJs = false;
  this.beautifulSoup = false;
  this.numpy = false;
  this.axios = false;
  this.expo = false;
  this.htmlSession = false;
  this.angular = false;
  this.ngxBootstrap = false;

  // Tools
  this.maven = false;
  this.gradle = false;
  this.git = false;
  this.perforce = false;
  this.microsoftSuite = false;
  this.uiPath = false;
  this.sap = false;
  this.powerAutomate = false;
  this.androidStudio = false;
  this.unix = false;
  this.windows = false;
  this.tensorFlow = false;
  this.azureDevOps = false;

  this.projects = this.projectService.getProjects();
  }
}
