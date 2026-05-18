export type Post = {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  date: string;
  verified?: boolean;
  text: string;
  image?: string;
  video?: { src: string; duration: string; user: string };
  tags: string[];
  likes: number;
  comments: number;
  sponsored?: boolean;
};

const avatars = [
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=23",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=18",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=49",
];

const atvImg =
  "https://images.unsplash.com/photo-1533558701576-23c65e0272a3?w=900&q=80";
const carImg =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80";
const beachImg =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80";

export const stories = [
  { name: "You", avatar: avatars[0], you: true },
  { name: "lauraha", avatar: avatars[1] },
  { name: "ijordan", avatar: avatars[2] },
  { name: "kenneth", avatar: avatars[3] },
  { name: "aboyd", avatar: avatars[4] },
  { name: "jennife", avatar: avatars[5] },
  { name: "judith6", avatar: avatars[6] },
  { name: "kthoma", avatar: avatars[7] },
  { name: "murrayd", avatar: avatars[8] },
];

export const feedPosts: Post[] = [
  {
    id: "1",
    author: "Hannah Parsons",
    handle: "@laurahardy",
    avatar: avatars[1],
    date: "01 May 2025",
    verified: true,
    text: "Watch social sure get. Even thought mate the dunes today — couldn't ask for a better afternoon out on the coast.",
    image: atvImg,
    tags: ["model", "people", "evidence"],
    likes: 1,
    comments: 4,
  },
  {
    id: "2",
    author: "King Asher",
    handle: "@kingasher",
    avatar: avatars[3],
    date: "02 May 2025",
    text: "Discussion house back possible ability — the new Spectre on the streets tonight.",
    image: carImg,
    tags: ["threat", "figure", "soldier", "southern"],
    likes: 1,
    comments: 3,
    sponsored: true,
  },
  {
    id: "3",
    author: "Erin Wright",
    handle: "@chapmandonald",
    avatar: avatars[5],
    date: "02 May 2025",
    verified: true,
    text: "Lot mouth inside grow letter. Fine sometimes the best ride is the one you didn't plan.",
    image: beachImg,
    tags: ["at", "civil", "think", "career", "day"],
    likes: 10,
    comments: 4,
  },
  {
    id: "4",
    author: "Sean Brewer",
    handle: "@megan30",
    avatar: avatars[6],
    date: "01 May 2025",
    text: "Money drug service want game. Value the silence behind the engine.",
    image: carImg,
    tags: ["impact", "get", "view", "contain"],
    likes: 4,
    comments: 5,
    sponsored: true,
  },
  {
    id: "5",
    author: "Timothy Butler",
    handle: "@username",
    avatar: avatars[7],
    date: "01 May 2025",
    text: "Head modern father authority forward. Black on black, parked clean.",
    image: carImg,
    tags: ["their"],
    likes: 2,
    comments: 4,
  },
  {
    id: "6",
    author: "Mark Crosby",
    handle: "@username",
    avatar: avatars[8],
    date: "02 May 2025",
    verified: true,
    text: "Building still owner anything writer. Drop a line if you want the full story.",
    image: beachImg,
    tags: ["doctor", "support"],
    likes: 7,
    comments: 2,
  },
];

export const messages = [
  { name: "Victoria Farmer", verified: true, preview: "Discover allow involve lay seven.", time: "20d", avatar: avatars[2] },
  { name: "Jane Blankenship", verified: true, preview: "Since key vote our finish.", time: "24d", avatar: avatars[5] },
  { name: "Jessica Byrd", verified: true, preview: "Family along available consumer too.", time: "26d", avatar: avatars[1] },
  { name: "Gina Holt", verified: false, preview: "See you tomorrow.", time: "1mo", avatar: avatars[6] },
  { name: "Nancy Reed", verified: false, preview: "Thanks for the share!", time: "1mo", avatar: avatars[4] },
];

export const dmHeads = ["Gina", "Nancy", "Mark", "Daniel", "Joshua", "Victoria", "Matthew", "Karen"].map(
  (n, i) => ({ name: n, avatar: avatars[(i + 2) % avatars.length] }),
);

export const notifications = [
  { who: "Hannah Parsons", avatar: avatars[1], action: "liked your post", time: "2m" },
  { who: "Erin Wright", avatar: avatars[5], action: "started following you", time: "1h" },
  { who: "Mark Crosby", avatar: avatars[8], action: "commented: nice ride!", time: "3h" },
  { who: "King Asher", avatar: avatars[3], action: "mentioned you in a post", time: "1d" },
  { who: "Jessica Byrd", avatar: avatars[1], action: "replied to your comment", time: "2d" },
];