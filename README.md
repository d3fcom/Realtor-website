# Real Estate Agent Website Template .

A professional, multilingual Realtor website template designed for real estate agents. Built in TypeScript and ready to use for your business.
/ by weis. / 2025 
## Features

- **Complete Multilingual Support**: Full website language switching between Spanish, French, and English with a convenient globe button selector
- **Dynamic Language Switching**: All content (navigation, hero sections, about text, property details, contact forms, testimonials) automatically changes language when user selects their preference
- **Property Showcase**: Beautiful property cards with detailed information
- **Contact Forms**: Professional contact form with validation
- **Testimonials**: Client testimonial section
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design using Tailwind CSS and shadcn/ui

## Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: Wouter
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query

## Quick Start

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5000`

## 📝 Customization

To customize this template for your business:

1. **Replace placeholder content**: Update the agent name "John Doe" with your name
2. **Add your properties**: Modify the sample data in `server/storage.ts`
3. **Update contact information**: Change addresses and contact details in the translations
4. **Add your branding**: Update colors in `theme.json` and add your logo
5. **Customize translations**: Modify `client/src/lib/i18n.ts` for your content

## 🌍 Advanced Language Switching System

The template features a comprehensive multilingual system:

- **Three Complete Languages**: Spanish (Español), French (Français), and English
- **Smart Globe Button**: Easy-to-use language selector in the navigation bar
- **Instant Language Switching**: All website content changes immediately when language is selected
- **Complete Translation Coverage**: Every text element transforms including:
  - Navigation menus
  - Hero section titles and subtitles
  - About section content
  - Property details (bedrooms, bathrooms, area labels)
  - Contact form labels and buttons
  - Success/error messages
  - Testimonial headings

This ensures your international clients can browse your entire website in their preferred language for the best user experience.

## 📂 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and translations
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express server
├── shared/                 # Shared types and schemas
└── README.md
```

##  About This Project

This template was created by **Developer: Weis** as a demonstration of modern web development capabilities. It showcases skills in:

- Full-stack JavaScript development
- Modern React patterns and hooks
- Type-safe development with TypeScript
- Professional UI/UX design
- Multilingual application development
- Responsive web design

## 📄 License & Usage

**This project is completely FREE to use for any business purpose!**

- ✅ Use it for your real estate business
- ✅ Modify it to fit your needs
- ✅ Remove or change any branding
- ✅ Use it for client projects

**No attribution required**, but it's always appreciated!

## 🤝 Contributing

Feel free to submit issues and enhancement requests. This is an open-source project and contributions are welcome.

## 📞 Support

If you need help customizing this template for your business or want to hire the developer for custom work, feel free to reach out!

---

**Made with ❤️ by Weis - Free for everyone to use and build their business with.**
