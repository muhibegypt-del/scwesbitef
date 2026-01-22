import { EDUCATION_IMAGES, IMAGES } from '../data/imageAssets';

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealImpact } from '@/components/templates/appeal/AppealImpact';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/VFOiNlbN';

// Data
const GALLERY_IMAGES = [
    { src: EDUCATION_IMAGES[0], alt: 'Students studying' },
    { src: EDUCATION_IMAGES[1], alt: 'Student with notebook' },
    { src: EDUCATION_IMAGES[2], alt: 'Teacher helping student' },
    { src: EDUCATION_IMAGES[3], alt: 'Classroom environment' },
];

const FAQ_ITEMS = [
    { question: 'Is my donation Zakat eligible?', answer: 'Yes, supporting the education of underprivileged children is a noble form of Sadaqah and Zakat eligible in many contexts (Zakat for students).' },
    { question: 'What does my donation cover?', answer: 'Donations go towards school fees, uniforms, textbooks, stationery, and maintaining safe classroom facilities.' },
    { question: 'Do you build schools?', answer: 'Yes, part of our appeal is constructing and renovating classrooms in underserved rural areas to reduce overcrowding.' },
    { question: 'How can I follow the progress?', answer: 'We share updates through our newsletters and social media, highlighting the academic achievements of the schools we support.' },
];

export function EducationAppeal() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}
            <AppealHero
                title="Education"
                subtitle="Support children's education and help create opportunities for learning and growth. Providing education support ensures children have the tools, environment, and guidance they need to learn and succeed."
                badge="Education Appeal"
                image={IMAGES.EDUCATION.FRIENDS_BLACKBOARD}
                ctaLink={SQUARE_LINK}
            />

            {/* Problem */}
            <AppealProblem
                label="Every Child Deserves to Learn"
                title="Breaking Barriers to Education"
                intro={
                    <>
                        <p>
                            In many communities, children walk miles to reach overcrowded classrooms. They share worn textbooks and dream of opportunities they've only heard about.
                        </p>
                        <p>
                            Your donation changes that story — one child at a time. We believe that lack of resources should never stand in the way of a child's potential.
                        </p>
                    </>
                }
                bullets={[
                    "Sadaqah Jariyah eligible investment",
                    "Provides books, uniforms & tuition",
                    "Constructs safe, dignified classrooms"
                ]}
                image={{
                    src: EDUCATION_IMAGES[1],
                    alt: "Student with notebook"
                }}
            />

            {/* Impact */}
            <AppealImpact
                title="Safe Spaces to Learn"
                subtitle="Beyond books and supplies, we ensure children have safe, dignified spaces to learn including proper desks and clean facilities."
                images={GALLERY_IMAGES}
            />

            {/* Cinematic Story */}
            <AppealCinematicStory
                background={EDUCATION_IMAGES[3]}
                personName="Teachers & Futures"
                personImage={EDUCATION_IMAGES[2]}
                personImageAlt="Teacher helping student"
                story={
                    <>
                        <p>
                            Our education programs support not just students, but also the teachers who guide them. We provide training, resources, and fair wages to ensure quality education.
                        </p>
                        <p>
                            When teachers thrive, students succeed. The bond between a dedicated teacher and an eager student is where the real transformation happens.
                        </p>
                    </>
                }
                quote="Education flourishes when children feel secure and teachers feel supported."
            />

            {/* Quote */}
            <AppealQuote
                image={EDUCATION_IMAGES[0]}
                imageAlt="Students studying"
                quote={
                    <>
                        <span className="text-brand-primary">"Knowledge is power."</span> Seeing these children excel against all odds is the greatest testament to the power of your support.
                    </>
                }
                author="School Principal"
                role="Partner School, Tana River"
            />

            {/* FAQ */}
            <AppealFAQ
                items={FAQ_ITEMS}
            />

            {/* CTA */}
            <AppealCTA
                title="Invest in Tomorrow's Leaders"
                text="Your support gives children the gift of knowledge and opportunity. Build a future today."
                ctaLink={SQUARE_LINK}
            />

        </div>
    );
}
