import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/property-card";
import TestimonialCard from "@/components/testimonial-card";
import type { Property, Testimonial } from "@shared/schema";
import { useLanguage } from "@/lib/languageContext";

export default function Home() {
  const { data: properties } = useQuery<Property[]>({
    queryKey: ["/api/properties"]
  });

  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"]
  });

  const { t } = useLanguage();
  const featuredProperties = properties?.filter(p => p.featured) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t("home.hero.title")}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t("home.hero.subtitle")}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">{t("nav.contact")}</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1661955676513-e2b0c70ca807"
                alt="John Doe"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("home.about.title")}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("home.about.content")}
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">{t("nav.contact")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("home.featured.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/properties">{t("home.featured.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("home.testimonials.title")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials?.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}