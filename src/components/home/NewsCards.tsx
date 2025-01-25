import { Newspaper, Users, Heart, Globe, BookOpen, HandHeart } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Latest News",
    description: "Stay updated with our recent activities and impact stories",
    icon: Newspaper,
    href: "/news",
    color: "bg-blue-500",
  },
  {
    title: "Our Community",
    description: "Meet the people making a difference in communities",
    icon: Users,
    href: "/community",
    color: "bg-green-500",
  },
  {
    title: "Success Stories",
    description: "Read about the lives we've touched and changed",
    icon: Heart,
    href: "/success-stories",
    color: "bg-red-500",
  },
  {
    title: "Global Impact",
    description: "Explore our worldwide initiatives and projects",
    icon: Globe,
    href: "/impact",
    color: "bg-purple-500",
  },
  {
    title: "Resources",
    description: "Access educational materials and research",
    icon: BookOpen,
    href: "/resources",
    color: "bg-yellow-500",
  },
  {
    title: "Get Involved",
    description: "Find out how you can contribute to our cause",
    icon: HandHeart,
    href: "/volunteer",
    color: "bg-orange-500",
  },
];

export default function NewsCards() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover how we&apos;re making a positive impact around the world
          </p>
        </div>

        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className={`${card.color} rounded-lg p-3 inline-block`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-primary transition">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}