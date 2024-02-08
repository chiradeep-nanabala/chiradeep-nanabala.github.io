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
    'C/C++',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'MySQL', 
    'Oracle',
    'MongoDB',
    'Angular',
    'React',
    'React Native',
    'Bootstrap',
    'Spring Boot',
    'REST APIs',
    'AppDynamics',
    'Splunk',
    'Tensorflow',
    'NLTK',
    'pandas',
    'NumPy',
    'Matplotlib',
    'scikit-learn'
  ];

  colorClasses: string[] = ['bg-primary text-dark', 'bg-success text-dark', 'bg-secondary text-dark',  'bg-danger text-white', 'bg-warning text-dark', 'bg-info text-dark', 'bg-dark text-white'];
  
  numberOfColorClasses = 7;
}
