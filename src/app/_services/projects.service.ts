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
      summary: 'short description',
      description: '',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.GIT, Tag.HTML5, Tag.CSS],
      pictures: []
    },
    {
      id: 1,
      name: 'Second',
      summary: 'short description',
      description: '',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.GIT, Tag.HTML5, Tag.CSS],
      pictures: []
    },
    {
      id: 2,
      name: 'Third',
      summary: 'short description',
      description: '',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.GIT, Tag.HTML5, Tag.CSS],
      pictures: []
    },
    {
      id: 3,
      name: 'Fourth',
      summary: 'short description',
      description: '',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.GIT, Tag.HTML5, Tag.CSS],
      pictures: []
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
}
