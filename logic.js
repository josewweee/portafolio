/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Jose Maria',
  lastName: 'Mira Barrientos',
  jobTitle: 'Software Developer',
  photo: 'null',
  city: 'Medellin',
  postalCode: '050022',
  country: 'Colombia',
  phone: '+573505325406',
  email: 'josemb125@gmail.com',
  education: [
    {
      school: 'Universidad EAFIT',
      degree: 'Bachelor',
      graduationDate: '2020',
      description: 'Software Engineering',
    },
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/josewweee',
    },
    {
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/josemirab',
    },
  ],
  skills: [
    'React',
    'NextJs',
    'JavaScript',
    'CSS',
    'TypeScript',
    'Tailwind',
    'Angular',
    'NodeJs',
    'React Native',
    'Cypress',
    'Jest',
    'Docker',
    'C#',
    'Firebase',
    'Python',
    'Storybook',
    'MongoDB',
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: `Front End developer with strong habilities in React and Angular, having 4+ years of experience with Javascript, and leadership building interactive experiences.
  Disciplined, organized, humble and righteous person. Committed to good morals, continuous learning, innovation and development of optimal solutions.
  Great teamworker, considered enthusiastic, helpful, creative, assertive and cautious.`,
  employmentHistory: [
    {
      jobTitle: 'Front-End Developer',
      startDate: 'July 2020',
      endDate: 'Present',
      employer: 'Perficient',
      city: 'Remote',
      achievements: [
        `Created big web projects with brand new technologies at the
        moment ( NextJs and Tailwind ), manage to learn on the go,
        synchronize with a fully remote team, deliver quality products and
        made several on-boarding process to new developers.`,
        `Mentored team members in development, issues and technical
        progression.`,
        `Optimized web pages to increase performance by a 100%, and SEO by a 70%, using coding best practices, and good approaches to bottlenecks using profilers and flamecharts.`,
        `Created a custom video editor, video player, audio recognition softwares, and data collectors platforms that worked as the core of new platforms.`,
      ],
    },
    {
      jobTitle: 'Software Developer and CEO',
      startDate: 'January 2018',
      endDate: 'February 2019',
      employer: 'Barbero express App',
      city: 'Medell??n',
      achievements: [
        `Developed, launched and managed the commercialization of a
        successful app along with other 2 engineer using scrum, Firebase,
        Angular and Ionic.`,
        `Collaborated with other developers to identify and alleviate
        software errors and inefficiencies.`,
        `Discussed project progress with customers, collected feedback on
        different stages and directly addressed concerns.`,
        `Got over 1,000 downloads, more than 200 users online at the same
        time and more than 3,000 usd in revenues.`,
      ],
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'February 2017',
      endDate: 'December 2017',
      employer: 'Independent, Freelancer',
      city: 'Medell??n',
      achievements: [
        'Created eye catching and functional digital desing concepts across varius platforms to strengthen company brand and identity',
        'Tested websited and performed troubleshooting prior deployment.',
      ],
    },
  ],
};

const formatResume = (r) => ({
  ...r,
  address: [r.country, r.city, r.postalCode].filter(Boolean).join(', '),
});

new Vue({
  el: '#app',
  data: formatResume(resume),
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded();
