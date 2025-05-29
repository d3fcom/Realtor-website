import {
  type Property,
  type Testimonial,
  type Contact,
  type InsertProperty,
  type InsertTestimonial,
  type InsertContact,
} from "@shared/schema";

export interface IStorage {
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  getTestimonials(): Promise<Testimonial[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private properties: Map<number, Property>;
  private testimonials: Map<number, Testimonial>;
  private contacts: Map<number, Contact>;
  private currentPropertyId: number;
  private currentTestimonialId: number;
  private currentContactId: number;

  constructor() {
    this.properties = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    this.currentPropertyId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;

    // Add sample properties
    this.addSampleData();
  }

  private addSampleData() {
    const sampleProperties: InsertProperty[] = [
      {
        title: "Modern Downtown Apartment",
        description: "Luxurious apartment with stunning city views",
        price: 450000,
        address: "123 Downtown Ave",
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        imageUrl: "https://images.unsplash.com/photo-1731522572624-f0b91ded2538",
        featured: true as boolean
      },
      {
        title: "Suburban Family Home",
        description: "Spacious family home with modern amenities",
        price: 750000,
        address: "456 Suburbia St",
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
        imageUrl: "https://images.unsplash.com/photo-1691745798448-51d67d5d5541",
        featured: true as boolean
      }
    ];

    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "John Smith",
        content: "John Doe helped us find our dream home. Their expertise and dedication made the process smooth and enjoyable.",
        role: "Home Buyer"
      },
      {
        name: "Maria Garcia",
        content: "Outstanding service! John Doe's knowledge of the market is impressive. Highly recommended!",
        role: "Property Seller"
      }
    ];

    sampleProperties.forEach(prop => {
      const id = this.currentPropertyId++;
      this.properties.set(id, { ...prop, id });
    });

    sampleTestimonials.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const newContact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
