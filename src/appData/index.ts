// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

import pvtImage from '../assets/images/pvt.png'
import orcaCredImage from '../assets/images/orcaCred.png'
import gspImage from '../assets/images/gsp.png'
import esimImage from '../assets/images/gsp.png'

// Project Data
export const projects = [
 
  {
    priority: 1,
    title: 'Cloud Management Portal',
    shortDescription:
      'Developed a scalable, theme-based architecture with responsive UI for cross-device accessibility. Integrated secure payment gateways and used Redux Saga for efficient state management. Led the front-end team, ensuring timely delivery and high-quality code. ',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
   
  },
  {
    priority: 2,
    title: 'Learning Management System  ',
    shortDescription:
      'Developed RESTful APIs using Node.js and Express.js for an LMS project, managing MongoDB schemas with Mongoose. Implemented CRUD operations for user profiles, courses, and work experience. Collaborated with front-end developers for seamless integration with React.js. Ensured API reliability through unit testing and used Git for version control. ',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   
  },
  {
    priority: 3,
    title: 'Assesment Engine  ',
    shortDescription:
      ' Developed an online Assessment Engine for virtual interviews with a recording feature, storing recordings in S3 buckets. Designed a mobile-responsive interface using MUI for seamless accessibility. Ensured smooth user experience across devices.',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

   
  },
  {
    priority: 4,
    title: 'eSIM Data Magic  ',
    shortDescription:
      'Designed a theme-based, responsive UI for cross-device accessibility and integrated secure payment gateways. Lead the front-end team using Redux Saga for efficient state management and seamless user experiences.' 

 ,
    cover:esimImage,
  
  },
  {
    priority: 5,
    title: 'Elev 8 App ',
    shortDescription:
      'Developed exam space feature for Elev8 App, a tool designed for students participating in placement drives utilized formik library to manage forms in the admin side of the application' 

 ,
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
  },
   {
    priority: 6,
    title: 'Pressure volume Calculator',
    shortDescription:
      'Developed the entire front-end UI using React.js, ensuring a responsive and user-friendly experience.Implemented a complex calculator tool capable of handling various inputs based on the PV = nRT equation.Integrated user inputs with real-time formula computation, providing instant feedback and results.Collaborated with backend developers to fetch/store calculation logs using Node.js and MongoDB.' 

 ,
    cover:
      pvtImage,
  
  },

  {
    priority: 7,
    title: 'Geo Sample Pro',
    shortDescription:
      'Joined the team during the production phase to assist in stabilizing the product.Actively resolved critical bugs impacting core workflows and system performance.Worked across both frontend (React.js) and backend (.NET Core, Azure SQL) to implement fixes and optimize user interactions.Collaborated with the QA and product teams to ensure bug-free deployments through rigorous testing and validation.' 

 ,
    cover:
      gspImage,
  
  },
  {
    priority: 8,
    title: 'Orca Cred',
    shortDescription:
      'Developed and maintained core features of the React Native mobile application.Integrated RESTful APIs for fetching user credit data and transactional information.Implemented form validations, navigation flows, and reusable UI components.Handled state management using Redux to ensure data consistency across the app.Collaborated with backend and QA teams to ensure bug-free releases and timely updates.' 

 ,
    cover:
      orcaCredImage,
  
  },

]


export const testimonials = [{
  name: "Shweta shukla",
  title: "Senior Product Manager",
  feedback: "Surya Shree is one of the most hardworking developers. She has been really consistent. Any work I asked her to finish was finished before the deadline I gave. She was one of my reliable and go to developer who would put in her all just to achieve anything that we decided. Found a bug? Surya shree, want to add a new feature? Surya shree, want clarifications? Surya shree She was always there even if she was on off she was ready to work if I come up with any requirement Andy time. She never backed out or said I can’t do it. Work wise excellent and personally also one of the sweetest I’ve ever come across .Surya Shree will give her best in everything she does. Will definitely recommend her to any company as she will definitely excel and make any product better. ✨👍",
 
},{
  name: "Vinoth Raja",
  title: "Career Services and Project Delivery Manager",
  feedback: "Surya Shree was worked in my project. She is the talented girl who easily tackled the critical situation and completed the projects. She was taken the ownership of the front end and lead the team. She is very good in communication and very professional in her task and the client interaction.",
 
},{
  name: "Rubana D J",
  title: "Project Manager",
  feedback: "Surya Shree has worked in my team as an UI developer. She is excellent in her work. Delivers her tasks on time. She is good in communication and a good team player. I recommend her as an UI developer.",
 
},


]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
 

]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
 
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
