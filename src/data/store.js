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
        ]
})
