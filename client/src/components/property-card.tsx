import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Property } from "@shared/schema";
import { useLanguage } from "@/lib/languageContext";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/9] relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{property.title}</h3>
          <p className="text-lg font-bold text-primary">
            ${property.price.toLocaleString()}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">{property.address}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{property.bedrooms} {t("properties.details.beds")}</span>
          <span>{property.bathrooms} {t("properties.details.baths")}</span>
          <span>{property.area} {t("properties.details.sqft")}</span>
        </div>
      </CardContent>
    </Card>
  );
}