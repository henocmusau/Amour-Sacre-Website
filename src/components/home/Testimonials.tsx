import Image from "next/image";

const testimonials = [
  {
    content: "The work this organization does is truly inspiring. I've seen firsthand how they transform communities.",
    author: "Sarah Johnson",
    role: "Community Partner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "Their dedication to making a positive impact is unmatched. I'm proud to support their mission.",
    author: "Michael Chen",
    role: "Volunteer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The impact they've had on our local community has been tremendous. They truly care about making a difference.",
    author: "Emily Rodriguez",
    role: "Local Resident",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Voices of Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from the people who have experienced our work firsthand
          </p>
        </div>

        <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="relative h-12 w-12 mx-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <blockquote className="mt-8">
                  <p className="text-lg text-gray-600 text-center">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-4 text-center">
                  <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}