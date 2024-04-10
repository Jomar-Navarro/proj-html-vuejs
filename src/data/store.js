import { reactive } from 'vue';

export const store = reactive({
  mainTitle: 'MaxCoach',
  cardContent: [
          {
            cardImage: '/img/course-02-480x298.jpg',
            price: '$40',
            program: 'Learning to Write as a Preofessional Author',
            lessons: '20',
            students: '50',
          },

          {
            cardImage: '/img/stock-full-hd-03-480x298.jpg',
            program: 'Customer-centric Info-Tech Strategies',
            lessons: '24',
            students: '769',
          },

          {
            cardImage: '/img/stock-full-hd-04-480x298.jpg',
            price: '$19',
            program: 'Open Programming Courses for Everyone: Python',
            lessons: '17',
            students: '62',
          },

          {
            cardImage: '/img/stock-full-hd-06-480x298.jpg',
            price: '$26',
            program: 'Academic Listening and Note-taking',
            lessons: '14',
            students: '67',
          },

          {
            cardImage: '/img/course-featured-image-01-480x298.jpg',
            price: '$39',
            program: 'Masterd jQuery in a Short Period of Time',
            lessons: '6',
            students: '51',
          },

          {
            cardImage: '/img/stock-full-hd-05-480x298.jpg',
            price: '$59',
            program: 'Introduction to Javascript for Beginners',
            lessons: '14',
            students: '76',
          },
        ],

  titles: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],

  worldwide: [
    {
      title: 'Successfully trained',
      num: '1790',
      subTitle: 'Enrolled Learners'
    },

    {
      title: 'Proudly Received',
      num: '19',
      subTitle: 'Enrolled Learners'
    },

    {
      title: 'Firmly Established',
      num: '24',
      subTitle: 'Enrolled Learners'
    },

    {
      title: 'Getting Featured on',
      num: '1090',
      subTitle: 'Enrolled Learners'
    },
  ],

  carouselEl: [
    {
      title: 'It\'s a choice of quality for people with special needs',
      text: 'I\'m a very stric person so I require everything to be organized and neat. Then, I\'ll be able to make things right and shine. Maxcoach guys just got me. ,',
      cardImg: '/img/testimonial-avata-03.jpg',
      name: 'Florence Themes',
      position: '/ Multimedia Admin',
    },

    {
      title: 'High level of efficiency and scientific teaching methods',
      text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
      cardImg: '/img/testimonial-avata-02.jpg',
      name: 'Mina Hollace',
      position: '/ Freelancer',
    },

    {
      title: 'Professional team of specialist and pasisonate mentors at reach',
      text: 'I need to get a certification for English proficiency and MaxCoach is my best coiche. Their tutors are smart and professional when dealing with students.',
      cardImg: '/img/testimonial-avata-04.jpg',
      name: 'Madley Pondor',
      position: 'IT Specialist',
    },

    {
      title: 'High level of efficiency and scientific teaching methods',
      text: 'I need to get a certification for English proficiency and MaxCoach is my best coiche. Their tutors are smart and professional when dealing with students.',
      cardImg: '/img/testimonial-avata-01.jpg',
      name: 'Ben Wallace',
      position: '/ IT Head Specialist',
    },
  ]
})
