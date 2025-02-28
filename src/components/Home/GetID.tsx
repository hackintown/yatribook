import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/Button";
export default function GetID() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-surface-dark/90 z-0" />

      {/* Main content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">
              Get Your Online Cricket ID With
            </span>
            <span className="text-foreground block">YatriBook</span>
          </h1>

          {/* Separator line */}
          <div className="w-24 h-1 bg-primary mb-8" />

          {/* Description */}
          <p className="text-base md:text-lg mb-8 leading-relaxed">
            Is it accurate to say that you are on the quest for the top provider
            of online cricket betting IDs? Well, your search ends with
            MadrasBook! We provide a hassle-free and safe means of acquiring
            your{" "}
            <span className="text-primary font-medium">online cricket ID</span>{" "}
            and exploiting the betting opportunities on the matches you love.
            With MadrasBook, you will enjoy special betting segments, better
            betting odds, and a secure and easy to use interface that enhances
            your love for cricket betting.
          </p>

          <p className="text-base md:text-lg mb-12 leading-relaxed">
            Now, let&apos;s explore the reasons why MadrasBook is the best place
            online for those people who are in search of the
            <span className="text-accent-yellow font-medium">
              best online cricket betting ID
            </span>
          </p>
          <Link href="https://wa.me/919840000000" passHref>
            <Button
              variant="primary"
              size="xl"
              className="rounded-full"
              leftIcon={<FaWhatsapp className="size-6 lg:size-7" />}
            >
              WhatsApp Us Now
            </Button>
          </Link>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500">
            <span>Trusted by 10,000+ users</span>
            <span>•</span>
            <span>Secure payments</span>
            <span>•</span>
            <span>24/7 support</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl" />
    </section>
  );
}
