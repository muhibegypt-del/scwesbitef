import { ORPHAN_CARE_IMAGES, IMAGES } from '../data/imageAssets';

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

// New Images provided by user
const NEW_IMAGES = {
  HERO: 'https://ik.imagekit.io/dzmabcda0/DSC00747.jpg',
  PROBLEM: 'https://ik.imagekit.io/dzmabcda0/DSC00472.jpg',
  QUOTE: 'https://ik.imagekit.io/dzmabcda0/DSC00111.JPG.jpeg'
};

const SQUARE_LINK = 'https://square.link/u/1muC8Kjs';

// Data
const FAQ_ITEMS = [
  { question: 'Is my donation Zakat eligible?', answer: 'Yes, our Orphan & Widow Care program is fully Zakat eligible. We ensure your donation reaches the most vulnerable families.' },
  { question: 'What does the support cover?', answer: 'Your donation covers essential needs including school fees, uniforms, daily nutritious meals, and healthcare, as well as emotional and community-based care to help them heal.' },
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
        image={NEW_IMAGES.HERO}
        ctaLink={SQUARE_LINK}
      />

      {/* Problem */}
      <AppealProblem
        label="Developing Bonds and Connection for Well-being"
        title="Every Child Deserves to Thrive"
        intro={
          <>
            <p>
              Through holistic care, we support orphans and widows with essential resources that restore dignity and stability. Our programs strengthen families, protect education, and ease daily burdens.
            </p>
            <p>
              Without this support, many households face hardship, disrupted schooling, and limited opportunities to rebuild secure, independent futures for their children today.
            </p>
          </>
        }
        bullets={[
          "Ongoing support that helps restore stability",
          "Education assistance and food for vulnerable families",
          "Essential resources that strengthen households and protect children’s futures"
        ]}
        image={{
          src: NEW_IMAGES.PROBLEM,
          alt: "Students learning together"
        }}
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
              Beyond material support, we provide a network of care. Together, we build resilient families who can support themselves and give back to their communities.
            </p>
          </>
        }
        quote="Your support provides complete care for orphaned children — education, nutrition, healthcare, and love."
      />

      {/* Quote */}
      <AppealQuote
        image={NEW_IMAGES.QUOTE}
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
