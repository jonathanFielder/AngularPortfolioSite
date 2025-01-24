import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {


  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Jonathan Fielder - Resume');
  }

  DownloadResume() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume_Fielder_25.pdf');
    link.setAttribute('download', 'Resume_Fielder_25.pdf');
    link.click();
    link.remove();
  }

  DownloadTranscript() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/pdf/academicTranscript12-24.pdf');
    link.setAttribute('download', 'academicTranscriptJF12_24.pdf');
    link.click();
    link.remove();
  }
}
