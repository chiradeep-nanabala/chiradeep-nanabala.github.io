import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  technologies: string[] = [
    'Java',
    'Python',
    'C++',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'MySQL', 
    'Oracle',
    'PostgreSQL',
    'MongoDB',
    'Angular',
    'Bootstrap',
    'ReactJS',
    'Spring Boot',
    'REST APIs',
    'Tensorflow',
    'pandas',
    'NumPy',
    'scikit-learn'
  ];

  colorClasses: string[] = ['bg-primary text-dark', 'bg-success text-dark', 'bg-secondary text-dark',  'bg-danger text-white', 'bg-warning text-dark', 'bg-info text-dark', 'bg-dark text-white'];
  
  numberOfColorClasses = 7;
}
