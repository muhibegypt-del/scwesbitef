import { FOOD_RELIEF_IMAGES, IMAGES } from '../data/imageAssets';

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealImpact } from '@/components/templates/appeal/AppealImpact';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/dpkEeY0Q';

// Data
const GALLERY_IMAGES = [
  { src: FOOD_RELIEF_IMAGES[0], alt: 'Food distribution' },
  { src: FOOD_RELIEF_IMAGES[1], alt: 'Child receiving meal' },
  { src: FOOD_RELIEF_IMAGES[2], alt: 'Food parcels' },
  { src: FOOD_RELIEF_IMAGES[3], alt: 'Community meal' },
];

const FAQ_ITEMS = [
  { question: 'Is my donation Zakat eligible?', answer: 'Yes, our Food Relief programs are designed to be Zakat eligible, reaching the poor and needy directly.' },
  { question: 'What is included in a food parcel?', answer: 'Each parcel typically contains essentials like rice, flour, cooking oil, lentils, sugar, and tea — enough to feed a family for several weeks.' },
  { question: 'Where does the food go?', answer: 'We distribute in areas facing critical food insecurity, including drought-affected regions and remote villages in Kenya.' },
  { question: 'Do you provide cooked meals too?', answer: 'Yes, we run hot meal programs in schools and community centers to provide immediate relief alongside our dry ration distributions.' },
];

export function FoodReliefAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <AppealHero
        title="Food Relief"
        subtitle="Distribute hot, nutritious meals and monthly food parcels to families facing starvation due to poverty or conflict. Providing food relief ensures that families receive not only nourishment, but also hope."
        badge="Emergency Relief"
        image={IMAGES.HOT_MEALS.GIRL_PLATE}
        ctaLink={SQUARE_LINK}
      />

      {/* Problem */}
      <AppealProblem
        label="Hot Meals That Nourish"
        title="No One Should Go Hungry"
        intro={
          <>
            <p>
              Our hot meal programs provide freshly cooked, nutritious food to those who need it most. From community halls to school feeding programs, we reach the hungry where they are.
            </p>
            <p>
              Every meal includes rice, protein, and vegetables — a complete, balanced diet essential for health and development.
            </p>
          </>
        }
        bullets={[
          "Emergency aid distribution within 24 hours",
          "Immediate relief for families in crisis",
          "Nutritionally balanced meals for children"
        ]}
        image={{
          src: FOOD_RELIEF_IMAGES[1],
          alt: "Child eating nutritious meal"
        }}
      />

      {/* Impact */}
      <AppealImpact
        title="Food Parcels for Families"
        subtitle="Beyond daily meals, we distribute monthly food parcels containing essentials. Each parcel feeds a family for weeks, providing stability."
        images={GALLERY_IMAGES}
      />

      {/* Cinematic Story */}
      <AppealCinematicStory
        background={FOOD_RELIEF_IMAGES[3]}
        personName="Building Resilience"
        personImage={FOOD_RELIEF_IMAGES[2]}
        personImageAlt="Woman with food parcel"
        story={
          <>
            <p>
              We set up distribution points in villages and community centers, ensuring that aid reaches even the most remote areas. Local volunteers help identify families in need.
            </p>
            <p>
              These provisions ensure that families have the stability of knowing where their next meal will come from, allowing them to focus on work and education instead of survival.
            </p>
          </>
        }
        quote="Your donation doesn't just provide food — it builds community resilience."
      />

      {/* Quote */}
      <AppealQuote
        image={FOOD_RELIEF_IMAGES[0]}
        imageAlt="Team distributing food"
        quote={
          <>
            <span className="text-brand-primary">"Serving food is serving humanity."</span> Seeing a child finish a full plate of food with a smile is why we do this. It's basic dignity.
          </>
        }
        author="Food Program Lead"
        role="Emergency Response Team"
      />

      {/* FAQ */}
      <AppealFAQ
        items={FAQ_ITEMS}
      />

      {/* CTA */}
      <AppealCTA
        title="Feed a Family Today"
        text="Your donation provides nutritious food packs that sustain vulnerable families for an entire month."
        ctaLink={SQUARE_LINK}
      />

    </div>
  );
}
