import { Project } from '../shared/interfaces/project.interface';

export const DESIGNPROJECTSDB: Project[] = [
  {
    id: 1,
    title: 'Spielraum',
    medium: 'book design',
    slug: 'spielraum',
    preview: '/img/spielraum01.jpg',
    collaborators: ['Leonie Wind'],
    specifications: [
      { label: ' Video:', value: '06:38 min' },
      {
        label: 'Catalog',
        value: `177 x 240 mm 76 pages`,
      },
    ],
    description: `The question of what is space seems so obvious and yet so abstract at the same time. Space is omnipresent, we refer
to our surroundings as living space or working space. We effortlessly move from one space to another. But what actually
is space? How is it structured and arranged? How do we effect space and vice versa?
Against the background of sociological theories of space, the work addresses the relational concept of space and the
constitution of spaces. It is an exploration of movement, action and structure in space; a translation of space theories; a
study of relations.
The video work reflects on the process of forming space. The reference to the Twister game symbolizes the construction
process through action and at the same time shows how space shapes action. The decision-making ability and spatial
positioning of the subject is emphasized. Structures are visualized, boundaries, but also connections between space,
body and object are made visible. The performative examination offers a starting point for a study of movements and
structures, which was documented in an enclosed catalog, alongside the video.

The first part of the catalog explores a sociological view onto space and examples of how different artist use space in
their practice. The layout and format of the catalog is based on the proportions of the Twister game. It is intended to be
a handy size that is easy to flip through, but still makes it possible for the images and texts to be arranged in a structured
and yet flexible and free manner. The typography also reflects the clear, classy (Helvetica) as well as the playful, flexible
layout (Argesta serif).`,
  },
  {
    id: 2,
    title: 'Tokyo Art Book Fair',
    medium: 'print',
    slug: 'tokyo-art-book-fair',
    preview: '/img/tokyo-art-book-fair.jpg',
    collaborators: ['Leonie Wind'],
    specifications: [{ label: '2 flyers', value: '105 x 148.5 mm' }],
    description: `This flyer was created during an internship at Barcelona based risography studio Jumbo Press. It was designed for
the participation at Tokyo Art Book Fair 2023. Combining the differnt aesthetics of hand drawings and digital art it creates a playful and eclectic blend.`,
  },
  {
    id: 3,
    title: 'Playground',
    medium: 'print',
    slug: 'playground',
    preview: '/img/playground01.png',
    collaborators: ['Leonie Wind'],
    specifications: [{ label: '2 posters', value: '420 x 594 mm' }],
    description: `This poster series on the theme of “Playground” was created as part of a course at the Akademia Sztuk Pięknych w
Gdańsku. My approach is a personal understanding of playground, playfulness and of childhood. I found inspiration
in puzzle magazines, which I have always enjoyed. The aim was to reflect the interesting letter combinations, grids,
overlaps due to incorrectly guessed words and the different elements of the puzzles within the posters. That is why I
created a “filled-in” version and an unfilled version, so to speak, which leaves room for own additions and doodles.

The second set of posters, an experimental collage, using photos I took of toys as well as of playground structures
focuses not only on rodeos as a playground but rather turns the process into a playground itself. In abstracting the
images, modelling the fonts and layering I gave myself the freedom to be completely random, intuitive and playful.`,
  },
  {
    id: 4,
    title: 'Nightcaps 2025',
    medium: 'identity',
    slug: 'nightcaps-2025',
    preview: '/img/nightcaps01.png',
    collaborators: ['Leonie Wind'],
    specifications: [
      {
        label: `Interaction design / Visual campaign`,
        value: `Questionnaire/ website`,
      },
    ],
    description: `This corporate design was created for the Nightcaps 2025 project by Berlin-based visual artist Alona Rodeh. The project
features a series of sculptural installations on streetlamps in the Berlin district of Wedding, aimed at counteracting light

pollution. It is supported by the housing company degewo and collaborates with NABU Berlin. To engage the local com-
munity, an interactive online questionnaire was developed, allowing residents to contribute their own designs. This de-
sign was translated into a website. In addition, a comprehensive visual campaign—including posters, flyers, social media

content, and infographics—was created to promote community workshops and public participation.
Since the project targets a broad audience—including children and schools through community workshops—the design
is intentionally playful and inviting. It uses a bold, colorful visual language that reflects the project’s core themes: the
contrast between night and darkness versus the artificial glow of streetlamps. Elements like star motifs and sticker-style
illustrations of the hat sculptures add a vibrant and approachable touch.`,
  },
  {
    id: 5,
    title: 'Nadir/Zenith',
    medium: 'book design',
    slug: 'nadir-zenit',
    preview: '/img/nadir-zenit01.png',
    collaborators: ['Estelle Träger', 'Leonie Wind'],
    specifications: [
      {
        label: `Nadir:`,
        value: `140 x 240mm
200 pages`,
      },
      {
        label: `Zenith:`,
        value: `125 x 205mm
116 pages/ 260 pages`,
      },
    ],
    description: `Two books, same content (using only Wikipedia articles), different layout! For the design, we played with the contrast
of readability versus deconstruction. While Nadir conveys the topic “The mountains of the solar system” in a linear way,
Zenith offers an experimental approach. Zenith is layed out to be read in a non-linear way. It consists of a picture and a
text book, which was generated using Indesigns GREP tool. Pictures and text are linked through labels, adapting the link
structure of Wikipedia while also supporting the element of deconstruction and the possibility to open up the book on
any page and start reading from there.`,
  },
];
