"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Rooms",
          id: "rooms",
        },
        {
          name: "Dining",
          id: "dining",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Hotel The Kashmir"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Hotel The Kashmir"
      description="A peaceful boutique hotel experience in Srinagar with elegant interiors, spacious rooms, delicious food, and personalized hospitality."
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
        {
          text: "Explore Rooms",
          href: "#rooms",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-home-nobody-clean-morning_1203-4679.jpg",
          imageAlt: "Luxurious Hotel Interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-swimwear-standing-with-hands-hip-near-poolside_107420-9848.jpg",
          imageAlt: "Dal Lake Scenery",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-boho-style-bedroom_23-2149637993.jpg",
          imageAlt: "Cozy Bedroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/night-view-hanging-houses-cuenca_1398-2111.jpg",
          imageAlt: "Warm Hotel Lobby",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-european-positive-smiling-woman-summer-flying-dress-natural-day-light-villa-terrace-enjoying-beautiful-vacation-outdoor-sofa-with-pillows-tropical_343596-1155.jpg",
          imageAlt: "Scenic Mountain Balcony",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151118971.jpg",
          imageAlt: "Boutique Hotel Tranquility",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "No City Noise",
          "No Crowded Spaces",
          "No Impersonal Service",
        ],
      }}
      positiveCard={{
        items: [
          "Spacious & Hygienic Rooms",
          "Peaceful Ambience",
          "Delicious Home-Style Food",
          "Personalized Hospitality",
          "Near Dal Lake",
          "Taxi & Travel Assistance",
        ],
      }}
      title="Why Guests Love Hotel The Kashmir"
      description="At Hotel The Kashmir, every guest is welcomed with warmth, care, and genuine hospitality in our peaceful environment."
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        {
          id: "r1",
          name: "Deluxe Room",
          price: "From ₹4,500",
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-modern-bedroom-with-comfortable-bedding-elegant-decor-generated-by-ai_188544-29870.jpg",
        },
        {
          id: "r2",
          name: "Family Suite",
          price: "From ₹7,500",
          imageSrc: "http://img.b2bpic.net/free-photo/man-trying-work-laptop-from-home-while-her-children-are-running-around_23-2149009345.jpg",
        },
        {
          id: "r3",
          name: "Premium Mountain View",
          price: "From ₹9,000",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-photo-morning-mist-phu-lang-ka-phayao-thailand_335224-950.jpg",
        },
        {
          id: "r4",
          name: "Standard Comfort",
          price: "From ₹3,500",
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_74190-3650.jpg",
        },
        {
          id: "r5",
          name: "Heritage Room",
          price: "From ₹5,500",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956539.jpg",
        },
        {
          id: "r6",
          name: "Kashmir Classic",
          price: "From ₹4,000",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-van-interior-prepared-camping_23-2151938566.jpg",
        },
      ]}
      title="Elegant Rooms Designed for Comfort"
      description="Select from our range of meticulously designed accommodations tailored for a relaxing Srinagar experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Johnson",
          handle: "Traveler",
          testimonial: "The environment is peaceful and relaxing. Definitely worth the price.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-backpack_23-2148518190.jpg",
        },
        {
          id: "t2",
          name: "Michael Chen",
          handle: "Family",
          testimonial: "Fantastic hospitality! Everything was perfect. Felt at home.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-traveling-together_23-2149201389.jpg",
        },
        {
          id: "t3",
          name: "Emily Rodriguez",
          handle: "Couple",
          testimonial: "The owner treated us with utmost generosity and humbleness.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-hipster-beautiful-couple-love-holding-smartphone-taking-pictures-sitting-rock-river-winter-forest_285396-2189.jpg",
        },
        {
          id: "t4",
          name: "David Kim",
          handle: "Solo Traveler",
          testimonial: "Elegant and classy interiors. Felt like a premium experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-giving-thumb-up_23-2147650951.jpg",
        },
        {
          id: "t5",
          name: "Rahul Verma",
          handle: "Family",
          testimonial: "The staff members were friendly and helpful throughout our stay.",
          imageSrc: "http://img.b2bpic.net/free-photo/rear-view-loving-mature-couple_1398-4304.jpg",
        },
      ]}
      title="Hospitality That Guests Remember"
      description="Discover why our guests consistently rate us as a top choice in Srinagar."
    />
  </div>

  <div id="location" data-section="location">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "2km",
          title: "Dal Lake",
          items: [
            "Scenic surroundings",
            "Cultural landmark",
            "Easy access",
          ],
        },
        {
          id: "m2",
          value: "10min",
          title: "Local Markets",
          items: [
            "Shopping area",
            "Authentic crafts",
            "Handmade goods",
          ],
        },
        {
          id: "m3",
          value: "15min",
          title: "Mughal Gardens",
          items: [
            "Historic gardens",
            "Nature walk",
            "Heritage site",
          ],
        },
      ]}
      title="Perfectly Located in Rajbagh, Srinagar"
      description="Conveniently situated just minutes away from top city attractions."
    />
  </div>

  <div id="dining" data-section="dining">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Gastronomy"
      title="Delicious Food with a Homely Touch"
      description="From traditional Kashmiri dishes to comforting international flavors, our meals are prepared with fresh, local ingredients."
      subdescription="Our guests consistently praise our freshly prepared meals. Every meal is crafted to make your stay memorable."
      icon={Utensils}
      imageSrc="http://img.b2bpic.net/free-photo/welcome-our-restaurant_1098-15702.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="owner" data-section="owner">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "mem1",
          name: "Mr. Ahmed",
          role: "Hotel Director",
          imageSrc: "http://img.b2bpic.net/free-photo/male-front-desk-receptionist-luxury-resort-checking-visitors-passports-before-registration-asian-visitor-sipping-coffee-modern-waiting-lounge-ready-make-reservation-modern-hotel_482257-68060.jpg",
        },
        {
          id: "mem2",
          name: "Fatima",
          role: "Guest Experience",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-curly-woman-enjoying-her-holiday_23-2148631378.jpg",
        },
        {
          id: "mem3",
          name: "Zaid",
          role: "Travel Concierge",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-overweight-couple-traveling-world-world-tourism-day_23-2151700158.jpg",
        },
      ]}
      title="Hospitality Rooted in Care"
      description="Meet the team that makes your stay truly exceptional through personal attention and local insight."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Is the hotel family-friendly?",
          content: "Yes. Many families choose Hotel The Kashmir for its peaceful atmosphere and spacious rooms.",
        },
        {
          id: "f2",
          title: "How far is Dal Lake?",
          content: "The hotel is located approximately 2 km from Dal Lake, roughly a 10-minute drive.",
        },
        {
          id: "f3",
          title: "Does the hotel help with local travel?",
          content: "Yes. Taxi and travel assistance are available for sightseeing and airport transfers.",
        },
        {
          id: "f4",
          title: "Is the environment peaceful?",
          content: "Absolutely. Guests frequently mention the calm and relaxing atmosphere.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We have answers to ensure a peaceful Srinagar stay."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Your Kashmir Escape Starts Here. Wake up to peaceful surroundings, elegant interiors, and heartfelt hospitality in the heart of Srinagar."
      buttons={[
        {
          text: "Book Now",
          href: "#",
        },
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Hotel The Kashmir"
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Rooms",
              href: "#rooms",
            },
            {
              label: "Dining",
              href: "#dining",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Hotel The Kashmir. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
