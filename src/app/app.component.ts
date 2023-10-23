import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  technologies: string[] = [
    'Python',
    'Java',
    'C/C++',
    'MySQL',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Angular',
    'React',
    'Bootstrap',
    'AppDynamics',
    'Splunk',
    'Tensorflow',
    'Keras',
    'NLTK',
    'pandas',
    'NumPy',
    'Matplotlib',
    'Spring Boot',
    'scikit-learn'
  ];

  colorClasses: string[] = ['bg-primary text-dark', 'bg-success text-dark', 'bg-secondary text-dark',  'bg-danger text-white', 'bg-warning text-dark', 'bg-info text-dark', 'bg-dark text-white'];
  
  numberOfColorClasses = 7;
}
