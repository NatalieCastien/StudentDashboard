const students = [
  {
    id: 1,
    name: "Evelyn",
    picture: "https://randomuser.me/api/portraits/women/51.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D1-1",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W1D2-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D2-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D2-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D2-4",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D2-5",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D3-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D3-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D3-4",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W1D3-5",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 5,
        fun: 5,
      },
      {
        assignment: "W1D4-1",
        difficulty: 4,
        fun: 5,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D1-1",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W2D1-2",
        difficulty: 2,
        fun: 5,
      },
      {
        assignment: "W2D2-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D2-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D2-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D3-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D3-2",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W2D3-3",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W2D4-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D4-3",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D1-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D1-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D1-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D1-4",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D2-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D2-2",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D2-3",
        difficulty: 3,
        fun: 5,
      },
      {
        assignment: "W3D3-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D3-2",
        difficulty: 4,
        fun: 5,
      },
      {
        assignment: "W3D3-3",
        difficulty: 3,
        fun: 5,
      },
      {
        assignment: "W3D3-4",
        difficulty: 4,
        fun: 5,
      },
      {
        assignment: "W3D4-1",
        difficulty: 5,
        fun: 5,
      },
      {
        assignment: "W3D4-2",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 2,
        fun: 5,
      },
      {
        assignment: "W4D2-1",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D2-2",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D2-3",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D2-4",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D3-1",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D3-2",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D3-3",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D3-4",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D3-5",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 1,
        fun: 5,
      },
      {
        assignment: "W5D4-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W6D1-1",
        difficulty: 5,
        fun: 5,
      },
      {
        assignment: "W6D2-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 5,
        fun: 5,
      },
    ],
  },
  {
    id: 2,
    name: "Aranka",
    picture: "https://randomuser.me/api/portraits/women/85.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D1-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D2-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W1D2-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W1D2-3",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W1D2-4",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D2-5",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W1D3-1",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W1D3-2",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W1D3-4",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D3-5",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D4-1",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D1-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W2D1-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D2-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D2-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D2-3",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W2D3-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W2D3-2",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D3-3",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D4-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W2D4-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W2D4-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D1-1",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W3D1-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D1-3",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D1-4",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D2-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D2-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D2-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D3-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D3-2",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W3D3-3",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D3-4",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D4-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W3D4-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W4D2-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D2-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W4D2-3",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W4D2-4",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D3-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D3-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W4D3-3",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W4D3-4",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W4D3-5",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W5D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W6D1-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W6D2-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 3,
        fun: 4,
      },
    ],
  },
  {
    id: 3,
    name: "Floris",
    picture: "https://randomuser.me/api/portraits/men/27.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W1D1-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D2-1",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D2-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D2-3",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D2-4",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D2-5",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D3-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D3-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W1D3-4",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W1D3-5",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D1-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D1-2",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D2-1",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D2-2",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D2-3",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W2D3-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D3-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W2D3-3",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D4-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D4-2",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W2D4-3",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W3D1-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W3D1-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D1-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D1-4",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D2-1",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D2-2",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D2-3",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D3-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D3-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D3-3",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W3D3-4",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D4-2",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W4D2-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W4D2-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W4D2-3",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D2-4",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W4D3-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W4D3-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W4D3-3",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W4D3-4",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W4D3-5",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W5D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W6D1-1",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W6D2-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 4,
        fun: 1,
      },
    ],
  },
  {
    id: 4,
    name: "Hector",
    picture: "https://randomuser.me/api/portraits/men/18.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D1-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D2-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D2-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D2-3",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D2-4",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D2-5",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W1D3-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D3-2",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D3-4",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W1D3-5",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W1D4-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W2D1-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D1-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D2-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W2D2-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W2D2-3",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D3-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W2D3-2",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W2D3-3",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W2D4-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W2D4-2",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D4-3",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W3D1-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W3D1-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D1-3",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D1-4",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W3D2-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D2-2",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W3D2-3",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W3D3-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D3-2",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D3-3",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D3-4",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W3D4-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D4-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D2-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W4D2-2",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D2-3",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W4D2-4",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W4D3-1",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W4D3-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W4D3-3",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W4D3-4",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W4D3-5",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W5D4-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W6D1-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W6D2-1",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 2,
        fun: 4,
      },
    ],
  },
  {
    id: 5,
    name: "Martina",
    picture: "https://randomuser.me/api/portraits/women/9.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D1-1",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W1D2-1",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W1D2-2",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W1D2-3",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W1D2-4",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W1D2-5",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D3-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D3-2",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W1D3-4",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W1D3-5",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D4-1",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W2D1-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W2D1-2",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W2D2-1",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D2-2",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D2-3",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W2D3-1",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W2D3-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D3-3",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D4-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W2D4-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D4-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D1-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W3D1-2",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D1-3",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D1-4",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D2-1",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D2-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D2-3",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D3-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D3-2",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W3D3-3",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D3-4",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D4-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D4-2",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W4D2-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D2-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W4D2-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D2-4",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W4D3-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D3-2",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W4D3-3",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D3-4",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W4D3-5",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W5D4-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W6D1-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W6D2-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 1,
        fun: 4,
      },
    ],
  },
  {
    id: 6,
    name: "Maurits",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D1-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D2-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D2-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D2-3",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D2-4",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W1D2-5",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D3-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D3-2",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D3-4",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D3-5",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D4-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D1-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D1-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W2D2-1",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W2D2-2",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D2-3",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D3-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D3-2",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D3-3",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W2D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W2D4-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D4-3",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D1-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D1-2",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D1-3",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D1-4",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D2-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D2-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W3D2-3",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W3D3-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W3D3-2",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W3D3-3",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D3-4",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W3D4-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D4-2",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D2-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W4D2-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W4D2-3",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W4D2-4",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W4D3-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W4D3-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W4D3-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D3-4",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W4D3-5",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W5D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W6D1-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W6D2-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 3,
        fun: 3,
      },
    ],
  },
  {
    id: 7,
    name: "Rahima",
    picture: "https://randomuser.me/api/portraits/women/33.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D1-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D2-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D2-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D2-3",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D2-4",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D2-5",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D3-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D3-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D3-4",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D3-5",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W1D4-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D1-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D1-2",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W2D2-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D2-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D2-3",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W2D3-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D3-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W2D3-3",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W2D4-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D4-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D4-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D1-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W3D1-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D1-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D1-4",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D2-1",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D2-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D2-3",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W3D3-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D3-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D3-3",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D3-4",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D4-1",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D4-2",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D2-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D2-2",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W4D2-3",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W4D2-4",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W4D3-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D3-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W4D3-3",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D3-4",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W4D3-5",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W5D4-1",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W6D1-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W6D2-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 4,
        fun: 1,
      },
    ],
  },
  {
    id: 8,
    name: "Sandra",
    picture: "https://randomuser.me/api/portraits/women/95.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W1D1-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D2-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D2-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W1D2-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D2-4",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W1D2-5",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D3-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D3-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D3-4",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W1D3-5",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D4-1",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D1-1",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D1-2",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W2D2-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D2-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W2D2-3",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W2D3-1",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W2D3-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D3-3",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D4-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W2D4-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W2D4-3",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D1-1",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D1-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D1-3",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D1-4",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D2-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D2-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D2-3",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D3-1",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D3-2",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D3-3",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D3-4",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D4-1",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D4-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W4D2-1",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W4D2-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W4D2-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D2-4",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W4D3-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W4D3-2",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W4D3-3",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D3-4",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W4D3-5",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W5D4-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W6D1-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W6D2-1",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 4,
        fun: 1,
      },
    ],
  },
  {
    id: 9,
    name: "Wietske",
    picture: "https://randomuser.me/api/portraits/women/63.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D1-1",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D2-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D2-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D2-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D2-4",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W1D2-5",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D3-1",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D3-2",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W1D3-4",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W1D3-5",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D4-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W2D1-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W2D1-2",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W2D2-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W2D2-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W2D2-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D3-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W2D3-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D3-3",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W2D4-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D4-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W2D4-3",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D1-1",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D1-2",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W3D1-3",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W3D1-4",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D2-1",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W3D2-2",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D2-3",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D3-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D3-2",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D3-3",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W3D3-4",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D4-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D4-2",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D2-1",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W4D2-2",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W4D2-3",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W4D2-4",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W4D3-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D3-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W4D3-3",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W4D3-4",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D3-5",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W5D4-1",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W6D1-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W6D2-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 1,
        fun: 2,
      },
    ],
  },
  {
    id: 10,
    name: "Storm",
    picture: "https://randomuser.me/api/portraits/men/33.jpg",
    evaluations: [
      {
        assignment: "SCRUM",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D1-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D2-1",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D2-2",
        difficulty: 1,
        fun: 3,
      },
      {
        assignment: "W1D2-3",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W1D2-4",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W1D2-5",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W1D3-1",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W1D3-2",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D3-4",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W1D3-5",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W1D3 - Project - Guess-the-number",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W1D4-1",
        difficulty: 4,
        fun: 2,
      },
      {
        assignment: "W1D4 - Project - Kleurentoggle",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W1D5 - Project - Galgje",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D1-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W2D1-2",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D2-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W2D2-2",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W2D2-3",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W2D3-1",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W2D3-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D3-3",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W2D4-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W2D4-2",
        difficulty: 4,
        fun: 3,
      },
      {
        assignment: "W2D4-3",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W2D5 - Project - Filmzoeker",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W3D1-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W3D1-2",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W3D1-3",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D1-4",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W3D2-1",
        difficulty: 1,
        fun: 4,
      },
      {
        assignment: "W3D2-2",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W3D2-3",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D3-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D3-2",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W3D3-3",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D3-4",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W3D4-1",
        difficulty: 2,
        fun: 4,
      },
      {
        assignment: "W3D4-2",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W3D5 - Project - Todo-List",
        difficulty: 3,
        fun: 2,
      },
      {
        assignment: "W4D2-1",
        difficulty: 2,
        fun: 1,
      },
      {
        assignment: "W4D2-2",
        difficulty: 3,
        fun: 3,
      },
      {
        assignment: "W4D2-3",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W4D2-4",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D3-1",
        difficulty: 3,
        fun: 4,
      },
      {
        assignment: "W4D3-2",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W4D3-3",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W4D3-4",
        difficulty: 3,
        fun: 1,
      },
      {
        assignment: "W4D3-5",
        difficulty: 2,
        fun: 3,
      },
      {
        assignment: "W4D3 - Project - Next-Level CSS",
        difficulty: 4,
        fun: 1,
      },
      {
        assignment: "W5D4-1",
        difficulty: 2,
        fun: 2,
      },
      {
        assignment: "W5D5 - Project - Lil_Playlist",
        difficulty: 1,
        fun: 2,
      },
      {
        assignment: "W6D1-1",
        difficulty: 4,
        fun: 4,
      },
      {
        assignment: "W6D2-1",
        difficulty: 1,
        fun: 1,
      },
      {
        assignment: "W6D2 - Project - Eindopdracht",
        difficulty: 3,
        fun: 3,
      },
    ],
  },
];

export default students;
