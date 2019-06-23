export class MarketService {

  constructor() {}

  types = [
    {
      id: 'TA',
      name: 'Tabac'
    },
    {
      id: 'EP',
      name: 'Epicerie'
    },
    {
      id: 'SU',
      name: 'Supermarché'
    }
  ]


  markets=[
    {
      type_id: 'TA',
      id : 1,
      img_url: 'assets/img/img.jpg',
      name: 'Tabac presse café',
      owner_name: '',
      time_open: '6',
      time_closed: '20',
      address: '76 Rue Camille Desmoulins, 92130 Issy-les-Moulineaux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'TA',
      id : 2,
      img_url: 'assets/img/img.jpg',
      name: 'Tabac de la Mairie',
      owner_name: '',
      time_open: '6',
      time_closed: '20',
      address: ' 38 Rue Diderot, 92130 Issy-les-Moulineaux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'TA',
      id : 3,
      img_url: 'assets/img/img.jpg',
      name: 'Tabac Saint Germain',
      owner_name: '',
      time_open: '6',
      time_closed: '20',
      address: ' 3 Cours de l\'Ancienne Boulangerie, 92130 Issy-les-Moulineaux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'TA',
      id : 4,
      img_url: 'assets/img/img.jpg',
      name: 'Le Tabac d\'Ici',
      owner_name: '',
      time_open: '6',
      time_closed: '20',
      address: '58 Avenue Victor Cresson, 92130 Issy-les-Moulineaux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'TA',
      id : 5,
      img_url: 'assets/img/img.jpg',
      name: 'Tabac Perucca',
      owner_name: '',
      time_open: '6',
      time_closed: '20',
      address: '19 Rue Jean Pierre Timbaud, 92130 Issy-les-Moulineaux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'TA',
      id : 6,
      img_url: 'assets/img/img.jpg',
      name: 'Loeur Sylvie',
      owner_name: '',
      time_open: '6',
      time_closed: '20',
      address: '54 Rue d\'Erevan, 92130 Issy-les-Moulineaux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'SU',
      id : 7,
      img_url: 'assets/img/img.jpg',
      name: 'Carrefour',
      owner_name: '',
      time_open: '9',
      time_closed: '21',
      address: 'Rue Joël le Theule Centre Commercial, 78180 Montigny-le-Bretonneux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'SU',
      id : 8,
      img_url: 'assets/img/img.jpg',
      name: 'Franprix',
      owner_name: '',
      time_open: '10',
      time_closed: '19',
      address: '6 Square François Arago, 78330 Fontenay-le-Fleury',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'EP',
      id : 9,
      img_url: 'assets/img/img.jpg',
      name: 'Grand Frais Montigny',
      owner_name: '',
      time_open: '9',
      time_closed: '00',
      address: '12 Avenue Ampère, 78180 Montigny-le-Bretonneux',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'EP',
      id : 10,
      img_url: 'assets/img/img.jpg',
      name: 'Vikneswara Store',
      owner_name: '',
      time_open: '9',
      time_closed: '22',
      address: '11 Square Louis Georges Buffon, 78330 Fontenay-le-Fleury',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },
    {
      type_id: 'EP',
      id : 11,
      img_url: 'assets/img/img.jpg',
      name: 'Chez Doudou',
      owner_name: '',
      time_open: '9:30',
      time_closed: '22',
      address: ' Avenue Jean Lurçat, 78330 Fontenay-le-Fleury',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper velit ut posuere fermentum. Duis non volutpat tellus. Vestibulum tristique, orci vitae scelerisque ultricies, risus augue accumsan ante, a suscipit arcu enim eget nibh. Donec non posuere tortor. Sed lobortis et erat sed rhoncus. Aenean quis mauris ac magna facilisis finibus a eu enim. Etiam sodales tristique ante, finibus tincidunt arcu elementum vel. Phasellus ut ligula non justo ultricies scelerisque. Ut tincidunt nulla ut velit finibus, id vehicula arcu facilisis. Aenean vel convallis nunc, eget fermentum libero. Sed tincidunt purus sed neque dapibus, nec pulvinar felis congue. Nam eget rutrum dolor. Curabitur sodales, ligula in luctus dignissim, libero mauris lacinia turpis, et pulvinar purus nisi vitae lacus.'
    },


  ];
}
