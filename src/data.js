import img1 from './components/image/post1.jpg'
import img2 from './components/image/aVbMoW8_460swp.webp'
import img3 from './components/image/axo1R8Y_460swp.webp'
import img4 from './components/image/img10.jpg'
import icon1 from './components/image/icon1.jpg' 
import icon2 from './components/image/icon2.jpg'
import icon3 from './components/image/icon3.jpg'
import icon4 from './components/image/icon4.jpg'
import icon5 from './components/image/icon5.jpg'
import icon6 from './components/image/icon6.jpg'

const postData = [
  {
    id: 1,
    title: "funny",
    op_user: "gager name", // original poster,
    op_user_avatar: icon1, // original poster,
    post_date: "2022-01-01", //yyyy-mm-dd
    up_votes: 100,
    down_votes: 10,
    content: img1, // post content (post media)
    tags: ["world cup", "funny", "travel"],
    comment_count: 150,
    comment: [
      {
        user: "9hdw ",
        avatar: "",
        comment_date: "2022-01-01",
        comment_body: "hahahah ",
        up_votes: 120,
        down_votes: 10,
      },
      {
        user: "khif",
        avatar: icon3,
        comment_date: "2020-02-11",
        comment_body: "why not",
        up_votes: 2,
        down_votes: 13,
      },
      {
        user: "atti18",
        avatar: icon4,
        comment_date: "2022-08-03",
        comment_body: "Laugh track starts",
        up_votes: 22,
        down_votes: 19,
      },
      {
        user: "takedahiromitsu",
        avatar: icon2,
        comment_date: "2022-11-02",
        comment_body: "Someone asked for a rumble?",
        up_votes: 38,
        down_votes: 2,
      },
    ],
  },
  {
    id: 2,
    title: "How to tell people",
    op_user: "heyheyhohojoeb", // original poster,
    op_user_avatar: icon2, // original poster,
    post_date: "2022-09-12", //yyyy-mm-dd
    up_votes: 200,
    down_votes: 12,
    content: img2, // post content (post media)
    tags: ["world cup", "morocco", "brazil"],
    comment_count: 155,

    comment: [
      {
        user: "note",
        avatar: icon1,
        comment_date: "2022-11-18",
        comment_body: "ok  ",
        up_votes: 20,
        down_votes: 39,
      },
      {
        user: "uskwm",
        avatar: icon3,
        comment_date: "2022-9-13",
        comment_body: "noooooo",
        up_votes: 22,
        down_votes: 133,
      },
      {
        user: "art",
        avatar: icon6,
        comment_date: "2022-02-20",
        comment_body: "sure for now",
        up_votes: 42,
        down_votes: 39,
      },
      {
        user: "ahmed",
        avatar: icon3,
        comment_date: "2022-12-03",
        comment_body: "Someone asked about this?",
        up_votes: 28,
        down_votes: 4,
      },
    ],
  },
  {
    id: 3,
    title: "I've been bamboozled many times",
    op_user: "el_homero", // original poster,
    op_user_avatar: icon6, // original poster,
    post_date: "2012-29-12", //yyyy-mm-dd
    up_votes: 20,
    down_votes: 12,
    content: img3, // post content (post media)
    tags: ["football", "cozy", "france"],
    comment_count: 50,

    comment: [
      {
        user: "notsi",
        avatar: icon2,
        comment_date: "2022-03-18",
        comment_body: "hahahah",
        up_votes: 20,
        down_votes: 39,
      },
      {
        user: "lara",
        avatar: icon3,
        comment_date: "2022-12-13",
        comment_body: "lol",
        up_votes: 22,
        down_votes: 133,
      },
      {
        user: "totto",
        avatar: icon6,
        comment_date: "2022-02-20",
        comment_body: "really ",
        up_votes: 42,
        down_votes: 39,
      },
      {
        user: "thisi",
        avatar: icon6,
        comment_date: "2022-12-03",
        comment_body: "not possible",
        up_votes: 28,
        down_votes: 4,
      },
    ],
  },
  {
    id: 4,
    title: "France Random Chat",
    op_user: "9GAGGERkl", // original poster,
    op_user_avatar: icon2, // original poster,
    post_date: "2022-03-2", //yyyy-mm-dd
    up_votes: 230,
    down_votes: 172,
    content: img4, // post content (post media)
    tags: ["football", "france"],
    comment_count: 190,

    comment: [
      {
        user: "notsi",
        avatar: icon2,
        comment_date: "2022-03-18",
        comment_body: "france",
        up_votes: 230,
        down_votes: 39,
      },
      {
        user: "lara",
        avatar: icon3,
        comment_date: "2022-12-13",
        comment_body: "lol",
        up_votes: 22,
        down_votes: 133,
      },
      {
        user: "totto",
        avatar: icon6,
        comment_date: "2022-02-20",
        comment_body: "really ",
        up_votes: 42,
        down_votes: 39,
      },
      {
        user: "thisi",
        avatar: icon6,
        comment_date: "2022-12-03",
        comment_body: "not possible",
        up_votes: 28,
        down_votes: 4,
      },
    ],
  },
];
  

 export default postData;