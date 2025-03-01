import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const bulletPoints = [
  {
    text: "BONUS ON FIRST DEPOSIT.",
  },
  {
    text: "LIVE CASINO ON YATRIBOOK.",
  },
  {
    text: "INDIA'S NO 1 MOST TRUSTED BOOK.",
  },
  {
    text: "FASTEST WITHDRAWAL SERVICE.",
  },
];

export default function MovingCards() {
  return (
    <div className="bg-background">
      <InfiniteMovingCards
        items={bulletPoints}
        direction="left"
        speed="fast"
        className="py-1"
      />
    </div>
  );
}
