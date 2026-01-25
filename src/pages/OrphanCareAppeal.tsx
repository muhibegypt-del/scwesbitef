import { ORPHAN_CARE_IMAGES, IMAGES } from '../data/imageAssets';

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealImpact } from '@/components/templates/appeal/AppealImpact';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/1muC8Kjs';

// Data
const GALLERY_IMAGES = [
  { src: ORPHAN_CARE_IMAGES[0], alt: 'Happy children' },
  { src: ORPHAN_CARE_IMAGES[1], alt: 'Child receiving meal' },
  { src: ORPHAN_CARE_IMAGES[2], alt: 'Children in classroom' },
  { src: ORPHAN_CARE_IMAGES[3], alt: 'Community support' },
];

const FAQ_ITEMS = [
  { question: 'Is my donation Zakat eligible?', answer: 'Yes, our Orphan & Widow Care program is fully Zakat eligible. We ensure your donation reaches the most vulnerable families.' },
  { question: 'What does the support cover?', answer: 'Your donation covers essential needs including school fees, uniforms, daily nutritious meals, and healthcare, as well as psychosocial support.' },
  { question: 'Can I sponsor a specific child?', answer: 'We pool donations to ensure all registered orphans in our rigorous program receive equal care and support, regardless of individual sponsorship status.' },
  { question: 'How often will I receive updates?', answer: 'We provide annual reports and regular newsletter updates on the progress of the children and families in our care.' },
];

export function OrphanCareAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <AppealHero
        title="Support Orphans & Widows"
        subtitle="Provide comprehensive support for orphans and widows, including school fees, uniforms, and food for families who have lost their primary provider. Losing a parent or spouse can leave families vulnerable and struggling to meet basic needs. 

Your support helps restore stability, providing children with the opportunity to continue their education and widows with the resources they need to care for their families."
        badge="Orphan & Widow Care"
        image={IMAGES.EDUCATION.BOY_SMILING}
        ctaLink={SQUARE_LINK}
      />

      {/* Problem */}
      <AppealProblem
        label="Developing Bonds and Connection for Well-being"
        title="Every Child Deserves to Thrive"
        intro={
          <>
            <p>
              Every child deserves nutritious meals that fuel their growth and learning. Our orphan support program ensures no child goes hungry.
            </p>
            <p>
              From daily meals to special treats, we provide the sustenance they need to thrive. Without this support, many children are forced to work instead of attending school.
            </p>
          </>
        }
        bullets={[
          "Monthly support ensures stability",
          "Education, food & healthcare included",
          "Psychosocial support for trauma recovery"
        ]}
        image={{
          src: ORPHAN_CARE_IMAGES[1],
          alt: "Child receiving meal"
        }}
      />

      {/* Impact */}
      <AppealImpact
        title="Education Opens Doors"
        subtitle="We cover school fees, uniforms, and supplies so orphaned children can continue their education. Knowledge is their pathway to independence."
        images={GALLERY_IMAGES}
      />

      {/* Cinematic Story (Using Community Content) */}
      <AppealCinematicStory
        background={ORPHAN_CARE_IMAGES[2]} // Classroom bg
        personName="A Community of Care"
        personImage={ORPHAN_CARE_IMAGES[3]} // Community image
        personImageAlt="Community gathering"
        story={
          <>
            <p>
              Beyond material support, we provide a network of care. Widows receive vocational training while their children receive mentorship and guidance.
            </p>
            <p>
              Together, we build resilient families who can support themselves and give back to their communities. Many of our supported children go on to become teachers, doctors, and community leaders.
            </p>
          </>
        }
        quote="Your support provides complete care for orphaned children — education, nutrition, healthcare, and love."
      />

      {/* Quote */}
      <AppealQuote
        image={ORPHAN_CARE_IMAGES[0]}
        imageAlt="Happy child"
        quote={
          <>
            <span className="text-brand-primary">"We don't just feed children;</span> we nourish their dreams. Seeing them graduate and succeed is the greatest reward."
          </>
        }
        author="Program Coordinator"
        role="Orphan Care Team"
      />

      {/* FAQ */}
      <AppealFAQ
        items={FAQ_ITEMS}
      />

      {/* CTA */}
      <AppealCTA
        title="Be a Guardian of Hope"
        text="Your monthly support creates stability and hope for families who have lost everything."
        ctaLink={SQUARE_LINK}
      />

    </div>
  );
}
