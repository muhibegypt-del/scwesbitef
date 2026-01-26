import { EDUCATION_IMAGES, IMAGES } from '../data/imageAssets';

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealImpact } from '@/components/templates/appeal/AppealImpact';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/d5fSYpG9';

// Data
const GALLERY_IMAGES = [
  { src: IMAGES.EDUCATION.FRIENDS_BLACKBOARD, alt: 'Students at blackboard' },
  { src: IMAGES.EDUCATION.BOY_NOTEBOOK, alt: 'Student with notebook' },
  { src: IMAGES.EDUCATION.GIRL_DESK, alt: 'Girl studying at desk' },
  { src: IMAGES.EDUCATION.TUTOR_SESSION, alt: 'Tutoring session' },
];

const FAQ_ITEMS = [
  { question: 'How does my donation support education and improve learning environments?', answer: 'Your donation helps refurbish classrooms, renovate schools, sponsor libraries, and provide essential items like school fees, shoes, and learning supplies.' },
  { question: 'Who benefits from the education projects supported by donations?', answer: 'Children and schools in underserved communities benefit directly from our education programs and initiatives.' },
  { question: 'Can donors choose or sponsor a specific school, classroom, or educational program?', answer: 'Yes. Donors can choose to support specific schools, classrooms, or education programs where possible.' },
  { question: 'How can I get involved beyond making a donation?', answer: 'You can get involved by partnering with us, volunteering, sponsoring projects, or helping raise awareness about our work.' },
];

export function EducationAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <AppealHero
        title="Empower Through Education"
        subtitle="Support children's education and help create opportunities for learning and growth. For many children, access to quality education is limited by poverty, lack of resources, or inadequate school facilities. Without support, students face challenges that make it difficult to reach their potential. Providing education support ensures children have the tools, environment, and guidance they need to learn and succeed. Your contribution helps create safe and inspiring spaces for education, empowering children to gain essential skills and build a brighter future for themselves and their communities."
        badge="Educational Support"
        image={IMAGES.EDUCATION.FRIENDS_BLACKBOARD}
        ctaLink={SQUARE_LINK}
      />

      {/* Problem */}
      <AppealProblem
        label="Breaking Barriers to Learning"
        title="When Children Can't Afford School"
        intro={
          <>
            <p>
              In rural Kenya, thousands of bright children are unable to attend school due to financial constraints. School fees, uniforms, and supplies create insurmountable barriers for families living in poverty.
            </p>
            <p>
              Without education, these children face limited opportunities and a future of hardship. Your support ensures that talented students can access the education they deserve, regardless of their economic circumstances.
            </p>
          </>
        }
        bullets={[
          "Full coverage of school fees and uniforms",
          "Learning materials and textbooks provided",
          "After-school tutoring and mentorship programs"
        ]}
        image={{
          src: EDUCATION_IMAGES[2],
          alt: "Student receiving tutoring"
        }}
      />

      {/* Impact */}
      <AppealImpact
        title="Transforming Lives Through Learning"
        subtitle="Your support creates opportunities for students to excel academically and build a better future for themselves and their communities."
        images={GALLERY_IMAGES}
      />

      {/* Field Report - Maasai School Renovation */}
      <AppealCinematicStory
        background={IMAGES.EDUCATION.KIDS_CLASSROOM}
        personName="Maasai School Renovation"
        personImage={IMAGES.EDUCATION.KIDS_CLASSROOM}
        personImageAlt="Renovated classroom"
        story={
          <>
            <p>
              During a Soul Caravan visit to a remote Maasai school, we were confronted with the harsh reality of what learning looked like there. Broken chairs, peeling paint, and the absence of proper desks made it difficult for students to focus, let alone dream. We made a promise to change that.
            </p>
            <p>
              Today, the school has been fully renovated with new tables and chairs, fresh paint, essential school supplies, and repaired sanitation facilities. By improving both the learning environment and access to educational resources, we restored dignity, safety, and hope to the classroom. And this is only the beginning, plans are already underway to introduce a school meal programme, ensuring that no child has to choose between hunger and education.
            </p>
          </>
        }
        quote=""
      />

      {/* FAQ */}
      <AppealFAQ
        items={FAQ_ITEMS}
      />

      {/* CTA */}
      <AppealCTA
        title="Invest in a Child's Future"
        text="Your contribution provides comprehensive educational support that transforms lives and builds stronger communities."
        ctaLink={SQUARE_LINK}
      />

    </div>
  );
}
