export const PostsMock = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/72817154?v=4',
      name: 'Marcos André',
      role: 'Web Developer',
    },
    publishedAt: new Date(),
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu GitHub. É Projeto desenvolvido com o conteúdo estudado nas aulas do Chapter I da trilha de ReactJS do Bootcamp Ignite da Rocketseat. O nome do projeto é Ignite Feed 🚀',
      },
      {
        type: 'link',
        content: 'https://github.com/Marcos-afk/ignite-feed',
        description: 'Repositório do projeto',
      },
      {
        type: 'hashtags',
        content: ['#novoprojeto', '#reactjs', '#ignite', '#rocketseat'],
      },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/72817154?v=4',
      name: 'Marcos André',
      role: 'Web Developer',
    },
    publishedAt: new Date(),
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋, tudo bem?',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu GitHub. É um projeto com a proposta de ajudar no gerenciamento de treinos na academia por parte do usuário, desenvolvido com o conteúdo estudado nas aulas do Chapter III da trilha de React Native do Bootcamp Ignite da Rocketseat. O nome do projeto é Ignite Gym 🚀',
      },
      {
        type: 'link',
        content: 'https://github.com/Marcos-afk/ignite-gym',
      },
      {
        type: 'hashtags',
        content: ['#novoprojeto', '#reactnative', '#ignite', '#rocketseat'],
      },
    ],
  },
];
