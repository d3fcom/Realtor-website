import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-lg italic mb-4">{testimonial.content}</p>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
