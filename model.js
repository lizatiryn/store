let store = document.getElementById("main");
let bottom = document.getElementById('bottom')

let pageNr = 1;
let cart;
let cover;
let menu;
let totalPrice = 0;
let cartArray = [];
let id = 0;
let products = [
  {
    src: "https://www.randomlists.com/img/things/scotch_tape.webp",
    name: "Tape",
    price: "$5",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus laborum possimus saepe animi facere qui debitis, accusamus error aliquam repellat dolor temporibus, sint reprehenderit nulla laboriosam provident suscipit consequuntur?',
  },
  {
    src: "https://www.randomlists.com/img/things/doll.webp",
    name: "Doll",
    price: "$10",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eaque neque voluptatum voluptatibus sunt eligendi ratione. Est reiciendis dignissimos optio ea sunt sequi, repellendus aspernatur corporis, suscipit pariatur maxime aperiam.',
  },
  {
    src: "https://www.randomlists.com/img/things/lace.webp",
    name: "Lace",
    price: "$7",
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni autem provident quidem. Nostrum similique pariatur voluptates eveniet aspernatur incidunt quia dolores ab enim maiores? Quisquam est corporis dolorem! Ipsum!',
  },
  {
    src: "https://www.randomlists.com/img/things/camera.webp",
    name: "Camera",
    price: "$63",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsa magni voluptate, nesciunt enim delectus praesentium consectetur necessitatibus corrupti nobis sint aliquam assumenda harum a iusto inventore! Sint, itaque beatae!',
  },
  {
    src: "https://www.randomlists.com/img/things/speakers.webp",
    name: "Speakers",
    price: "$50",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsam aspernatur deleniti sapiente explicabo sint sunt beatae libero necessitatibus pariatur? Quod assumenda vero voluptates ipsa, minima aliquam et numquam veritatis.',
  },
  {
    src: "https://www.randomlists.com/img/things/sailboat.webp",
    name: "Sailboat",
    price: "$10000",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem ab corporis totam aliquid voluptatum explicabo suscipit, quo harum pariatur quidem excepturi quibusdam quis, ex dolorum qui. Dicta, exercitationem praesentium.',
  },
  {
    src: "https://www.randomlists.com/img/things/wallet.webp",
    name: "Wallet",
    price: "$15",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore unde numquam ipsam placeat aspernatur, quibusdam mollitia quis error quod sapiente. Quaerat magni quisquam deserunt fuga doloribus aliquam libero reiciendis!',
  },
  {
    src: "https://www.randomlists.com/img/things/wallet.webp",
    name: "Wallet cool",
    price: "$17",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore unde numquam ipsam placeat aspernatur, quibusdam mollitia quis error quod sapiente. Quaerat magni quisquam deserunt fuga doloribus aliquam libero reiciendis!',
  },
  {
    src: "https://www.randomlists.com/img/things/wallet.webp",
    name: "Wallet expensive",
    price: "$150",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore unde numquam ipsam placeat aspernatur, quibusdam mollitia quis error quod sapiente. Quaerat magni quisquam deserunt fuga doloribus aliquam libero reiciendis!',
  },
  {
    src: "https://www.randomlists.com/img/things/wallet.webp",
    name: "Wallet cheap",
    price: "$5",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore unde numquam ipsam placeat aspernatur, quibusdam mollitia quis error quod sapiente. Quaerat magni quisquam deserunt fuga doloribus aliquam libero reiciendis!',
  },
  {
    src: "https://www.randomlists.com/img/things/wallet.webp",
    name: "Wallet cute",
    price: "$12",
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tempore unde numquam ipsam placeat aspernatur, quibusdam mollitia quis error quod sapiente. Quaerat magni quisquam deserunt fuga doloribus aliquam libero reiciendis!',
  },
];