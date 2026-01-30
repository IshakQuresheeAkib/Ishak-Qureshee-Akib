export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  liveUrl: string;
  imagePosition: "left" | "right";
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Concord",
    description:
      "Concord is a modern matrimony platform designed for seamless connections. With a user-friendly interface and advanced features, Concord simplifies the search for the perfect life partner.",
    features: [
      "Users can add and find biodata for a perfect match, and request contact information by paying a fee by Stripe.",
      "Created different user dashboards based on their roles, like admins and regular users.",
      "Allow users to filter biodatas based on location, age, and gender",
    ],
    image: "https://i.ibb.co/jkHS0LD/IMG-20240227-WA0020-01-jpeg.jpg",
    liveUrl: "https://assignment-12-847d7.web.app/",
    imagePosition: "left",
  },
  {
    id: 2,
    title: "NourishNet",
    description:
      "NourishNet is a Community Food Sharing and Surplus Reduction Platform,it offers a user-friendly interface where users can view their donation and request history, manage their profile, and track ongoing donation or request statuses.",
    features: [
      "Empower users to add surplus food for donation, edit or delete their listings as needed",
      "Allow users to request food, view all requests, and cancel their request if the status is pending.",
      "Donors can view and mark all food requests as delivered on the platform.",
    ],
    image:
      "https://i.ibb.co/Z8BTdK4/Whats-App-Image-2024-02-27-at-23-19-30-a5c82f45.jpg",
    liveUrl: "https://nourish-net.web.app/",
    imagePosition: "right",
  },
  {
    id: 3,
    title: "Car Canvas",
    description:
      "Car Canvas is a project where user can see a Wide Array of Cars from Leading Global Brands: Visitors can easily browse and explore a diverse selection of cars from renowned automobile manufacturers worldwide.",
    features: [
      "Users can add cars with specific details and explore cars based on their brand names.",
      "View car details, add to cart, and easily manage added cars in cart.",
      "Users will experience responsive design across various devices",
    ],
    image:
      "https://i.ibb.co/myZqSvL/Whats-App-Image-2024-02-28-at-00-13-23-c0f74721.jpg",
    liveUrl: "https://car-canvas.web.app/",
    imagePosition: "left",
  },
  {
    id: 4,
    title: "Occasion Alchemy",
    description:
      "Occasion Alchemy is your partner in transforming ordinary events into extraordinary memories. With an alchemical blend of creativity, meticulous planning, and personalized touches, we specialize in weddings, birthdays, anniversaries, engagement parties, baby showers etc.",
    features: [
      "User authentication is implemented using Firebase.",
      "Implemented pagination to enhance user experience with smooth navigation.",
      "Users will experience responsive design across various devices.",
    ],
    image:
      "https://i.ibb.co/T1sX87M/Whats-App-Image-2024-02-28-at-00-31-51-253c595c.jpg",
    liveUrl: "https://occasion-alchemy-40dfe.web.app/",
    imagePosition: "right",
  },
];
