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
  { question: 'What does my donation cover?', answer: 'Your donation covers school fees, uniforms, textbooks, learning materials, and educational support programs. We ensure that financial barriers don\'t prevent children from accessing quality education.' },
  { question: 'How many children can I help support?', answer: 'Depending on your donation amount, you can help support one or multiple children. We pool resources to ensure all registered students receive comprehensive educational support.' },
  { question: 'Can I sponsor a specific student?', answer: 'While we pool donations to serve all students equitably, we provide regular updates on the educational programs and student progress in our supported schools.' },
  { question: 'How do I receive updates?', answer: 'You will receive quarterly reports showcasing the impact of your contribution, including student success stories, academic achievements, and program developments.' },
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

      {/* Cinematic Story */}
      <AppealCinematicStory
        background={IMAGES.EDUCATION.KIDS_CLASSROOM}
        personName="Fatima's Journey"
        personImage={IMAGES.EDUCATION.GIRL_DESK}
        personImageAlt="Fatima studying"
        story={
          <>
            <p>
              Fatima, a 12-year-old from Malindi, was forced to drop out of school when her father passed away. Her mother couldn't afford the fees. Fatima spent her days helping at home, watching other children walk to school with dreams she thought were lost forever.
            </p>
            <p>
              When she received educational sponsorship through Soul Caravan, everything changed. Today, Fatima is top of her class, excelling in mathematics and science. She dreams of becoming a doctor to help her community. Education gave her back her future.
            </p>
          </>
        }
        quote="Education didn't just change my life — it gave me permission to dream again."
      />

      {/* Quote */}
      <AppealQuote
        image={IMAGES.EDUCATION.BOY_SMILING}
        imageAlt="Happy student"
        quote={
          <>
            <span className="text-brand-primary">"Every child I see succeed</span> reminds me why we do this work. Education is the most powerful tool we have to break the cycle of poverty. When a child learns, an entire community benefits."
          </>
        }
        author="Sarah Kamau"
        role="Education Program Coordinator"
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
