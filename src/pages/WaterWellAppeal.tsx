import { WATER_WELL_IMAGES, IMAGES } from '../data/imageAssets';

// Appeal Template Components (Phase 1 Foundation)
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealImpact } from '@/components/templates/appeal/AppealImpact';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/d5fSYpG9';

// ============================================================
// DATA
// ============================================================

const GALLERY_IMAGES = [
  { src: IMAGES.WATER.CHILD_TAP_1, alt: 'Child using water tap' },
  { src: IMAGES.WATER.CHILD_DRINKING, alt: 'Child drinking clean water' },
  { src: IMAGES.WATER.TANK_VILLAGE_1, alt: 'Water tank in village' },
  { src: IMAGES.WATER.SIGNAGE_INSTALL_1, alt: 'Well installation with signage' },
  { src: IMAGES.WATER.TANK_LANDSCAPE, alt: 'Water infrastructure' },
];

const FAQ_ITEMS = [
  { question: 'How long does it take to build a well?', answer: 'A typical water well takes 4-8 weeks to complete, depending on the location and ground conditions. We provide regular updates throughout the construction process.' },
  { question: 'Can I dedicate the well to someone?', answer: 'Yes! You can dedicate the well in memory of a loved one, to celebrate a milestone, or in honor of someone special. A permanent plaque will be installed at the well site.' },
  { question: 'How do I receive updates on my well?', answer: 'You will receive photos and GPS coordinates once construction is complete. We also send annual impact reports showing how many people your well is serving.' },
];

// ============================================================
// MAIN PAGE
// ============================================================

export function WaterWellAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <AppealHero
        title="Build a Water Well"
        subtitle="Provide clean, safe drinking water for an entire village. For many communities, access to clean water is still a daily struggle. A single well can serve hundreds of individuals for years to come, transforming daily life and protecting families from preventable, water-borne diseases.
By building a water well, you provide more than just water - you provide health, dignity, and stability. Clean water reduces disease, strengthens communities, and creates a foundation for long-term development, allowing families to focus on building a better future."
        image={IMAGES.WATER.GIRL_COLLECTING}
        ctaLink={SQUARE_LINK}
      />

      {/* Problem Section */}
      <AppealProblem
        title="When Communities Can't Access Clean Water"
        intro={
          <>
            <p>
              Millions of families in rural Kenya walk miles each day to collect water from contaminated sources. Children miss school. Women spend hours fetching water instead of pursuing opportunities.
            </p>
            <p>
              Water-borne diseases claim lives that could be saved with simple access to clean water. Your support provides life-saving infrastructure for communities in desperate need.
            </p>
          </>
        }
        bullets={[
          "Wells are built with durable materials for longevity",
          "Each well serves hundreds of community members daily",
          "Local teams maintain the infrastructure for sustainability"
        ]}
        image={{
          src: WATER_WELL_IMAGES[1],
          alt: "Child using water tap"
        }}
      />

      {/* Impact Gallery */}
      <AppealImpact
        title="The Impact You've Delivered"
        subtitle="Your generosity builds water infrastructure for communities across rural Kenya."
        images={GALLERY_IMAGES}
      />

      {/* Beneficiary Story (Cinematic) */}
      <AppealCinematicStory
        background={IMAGES.WATER.TANK_LANDSCAPE}
        personName="Amina's Story"
        personImage={IMAGES.UPDATES_2025.WATER.AMINA_STORY}
        personImageAlt="Amina and her family"
        story={
          <>
            <p>
              Amina Mwende, a mother of six from Kilifi County, used to walk three hours each day to collect water from a distant river. Her children often fell sick from waterborne diseases, and she had no time to earn income for her family.
            </p>
            <p>
              When a water well was built in her village, everything changed. Her children are now healthy and attending school. Amina has started a small vegetable garden using the clean water, generating income for her family.
            </p>
          </>
        }
        quote="This well didn't just give us water — it gave us our lives back."
      />

      {/* Volunteer Quote */}
      <AppealQuote
        image={IMAGES.WATER.SIGNAGE_INSTALL_2}
        imageAlt="Field team installing well"
        quote={
          <>
            <span className="text-brand-primary">"As a volunteer</span>— I see the relief a family feels when clean water flows for the first time. It's not just infrastructure; it's hope, health, and a future they never thought possible."
          </>
        }
        author="Zakariya Jeilan"
        role="Volunteer"
      />

      {/* FAQ */}
      <AppealFAQ
        items={FAQ_ITEMS}
      />

      {/* Final CTA */}
      <AppealCTA
        title="Transform a Community Today"
        text="Your contribution helps us build water wells that serve over 200 people for more than a decade. Give the gift of clean water."
        ctaLink={SQUARE_LINK}
      />

    </div>
  );
}
