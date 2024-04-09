import { reactive } from 'vue';

export const store = reactive({
  mainTitle: 'MaxCoach',
  cardContent: [
          {
            cardImage: '/img/course-02-480x298.jpg',
            price: '$40.00',
            program: '',
            class: '',
          },

          {
            cardImage: '/img/stock-full-hd-03-480x298.jpg',
            price: 'Free',
            program: '',
            class: '',
          },

          {
            cardImage: '/img/stock-full-hd-04-480x298.jpg',
            price: '$19.00',
            program: '',
            class: '',
          },

          {
            cardImage: '/img/stock-full-hd-06-480x298.jpg',
            price: '$26.00',
            program: '',
            class: '',
          },

          {
            cardImage: '/img/course-featured-image-01-480x298.jpg',
            price: '$39.00',
            program: '',
            class: '',
          },

          {
            cardImage: '/img/stock-full-hd-05-480x298.jpg',
            price: '$59.00',
            program: '',
            class: '',
          },
        ]
})
