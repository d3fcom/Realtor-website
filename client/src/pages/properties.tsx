import { useQuery } from "@tanstack/react-query";
import PropertyCard from "@/components/property-card";
import type { Property } from "@shared/schema";
import { useLanguage } from "@/lib/languageContext";

export default function Properties() {
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ["/api/properties"]
  });

  const { t } = useLanguage();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">{t("properties.title")}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties?.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}