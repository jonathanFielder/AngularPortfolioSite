import { Injectable } from '@angular/core';
import { Tag } from '../_models/tag';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {
      id: 0,
      name: 'Angular Portfolio Site',
      summary: 'Portfolio site developed in Angular, showcasing projects and resume.',
      description: 'Portfolio site developed in Angular using showcasing projects and resume. Developed in Angular 15. Utilized knowledge of ' +
      'JavaScript, TypeScript, Css, HTML, and UI design principles.',
      projectLink: '../../',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.GIT, Tag.HTML5, Tag.CSS, Tag.NGXBOOTSTRAP],
      pictures: ["../../assets/images/angularProject/kenya_crop.jpg"]
    },
    {
      id: 1,
      name: 'Frq-Drm',
      summary: 'FM Synthesis based drum module built in Max-MSP.',
      description: 'FM (Frequency Modulated) Synthesis based drum module built in Max-MSP. Showcases an in depth understanding' +
      'of digital signal processing as well as clean, intuitive UI design.',
      projectLink: 'https://latchwork.gumroad.com/l/frq-drm',
      tags: [Tag.MAX_MSP],
      pictures: ["../../assets/images/frq-drm/frq-drm.png"]
    },
    {
      id: 2,
      name: 'Hunger and Health Coalition Cross-Platform Application',
      summary: 'Cross platform application developed for the non profit, Hunger and Health Coalition of Boone in React Native.',
      description: 'Worked with a 3-person development team using React-Native and Expo with JavaScript and TypeScript.' +
      'Designed and implemented a repository pattern for accessing data from a testing environment as well as with API calls using Axios.' +
      'Used feature branching on GitHub for version control.',
      projectLink: 'https://youtube.com/shorts/nZL0b9y9Brc',
      tags: [Tag.REACT_NATIVE, Tag.GIT, Tag.TYPESCRIPT, Tag.JAVASCRIPT],
      pictures: ["../../assets/images/hhc/hhc_login.png", "../../assets/images/hhc/hhc_events.png"]
    }
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
