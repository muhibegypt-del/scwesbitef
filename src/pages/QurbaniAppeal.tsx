import { IMAGES } from '../data/imageAssets';

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealImpact } from '@/components/templates/appeal/AppealImpact';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/wTjNjHHp';

// Data
const GALLERY_IMAGES = [
    { src: IMAGES.QURBANI.QUEUE_OUTSIDE, alt: 'Families waiting for distribution' },
    { src: IMAGES.QURBANI.HANDING_BAG, alt: 'Receiving meat' },
    { src: IMAGES.QURBANI.MOTHER_CHILD, alt: 'Happy family' },
    { src: IMAGES.QURBANI.COMMUNITY_GATHERING, alt: 'Community celebration' },
];

const FAQ_ITEMS = [
    { question: 'When is the Qurbani performed?', answer: 'We perform all Qurbanis after the Eid prayer on the days of Eid al-Adha (10th-12th Dhul Hijjah), strictly according to Sunnah.' },
    { question: 'Can I give Qurbani on behalf of others?', answer: 'Yes, you can order Qurbani for yourself and on behalf of family members, including deceased loved ones.' },
    { question: 'Where is the meat distributed?', answer: 'The meat is distributed fresh to the most vulnerable families in rural villages who rarely afford meat throughout the year.' },
    { question: 'Do you provide proof of sacrifice?', answer: 'We aim to provide updates and reports upon completion of the Qurbani project.' },
];

export function QurbaniAppeal() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}
            <AppealHero
                title="Qurbani"
                subtitle="Provide Qurbani meat to families in need, ensuring that everyone can share in the blessings of Eid. Your contribution helps distribute fresh, high-quality meat to those who need it most, bringing nourishment and celebration to families across under resourced areas."
                badge="Seasonal Appeal"
                image={IMAGES.QURBANI.BANNER_GOATS}
                ctaLink={SQUARE_LINK}
                ctaText="Order Qurbani"
            />

            {/* Problem */}
            <AppealProblem
                label="Sunnah & Celebration"
                title="Share the Joy of Eid"
                intro={
                    <>
                        <p>
                            For many families, meat is a luxury they cannot afford. They may go months without a proper meal.
                        </p>
                        <p>
                            Your Qurbani provides them with a rare and nutritious meal to celebrate Eid al-Adha with dignity. It ensures that on a day of feasting, no one in the village goes hungry.
                        </p>
                    </>
                }
                bullets={[
                    "Performed strictly according to Sunnah",
                    "High-quality livestock selected",
                    "Immediate fresh meat distribution"
                ]}
                image={{
                    src: IMAGES.QURBANI.GOATS_HOLDING,
                    alt: "Qurbani livestock"
                }}
            />

            {/* Impact */}
            <AppealImpact
                title="Reaching the Most Vulnerable"
                subtitle="We distribute in verified areas of need, ensuring your obligation reaches those who truly deserve it."
                images={GALLERY_IMAGES}
            />

            {/* Cinematic Story */}
            <AppealCinematicStory
                background={IMAGES.QURBANI.WIDE_QUEUE}
                personName="A Rare Blessing"
                personImage={IMAGES.QURBANI.MOTHER_CHILD}
                personImageAlt="Mother and child receiving Qurbani"
                story={
                    <>
                        <p>
                            "Last Eid, my children asked for meat, but I had none to give. I felt helpless as a mother."
                        </p>
                        <p>
                            "When the Qurbani team arrived, it was an answer to prayer. We cooked a feast and celebrated like everyone else. It is not just food; it is feeling that we belong to the Ummah and look out for each other."
                        </p>
                    </>
                }
                quote="It is not their meat nor their blood that reaches Allah, but it is your piety that reaches Him."
            />

            {/* Quote */}
            <AppealQuote
                image={IMAGES.QURBANI.HANDING_BAG}
                imageAlt="Distribution"
                quote={
                    <>
                        <span className="text-brand-primary">"We handle every sacrifice with Ihsan."</span> Knowing that this is a sacred trust from the donor to the beneficiary drives our excellence.
                    </>
                }
                author="Distribution Team"
                role="Eid Operations"
            />

            {/* FAQ */}
            <AppealFAQ
                items={FAQ_ITEMS}
            />

            {/* CTA */}
            <AppealCTA
                title="Share the Joy of Eid"
                text="Your Qurbani brings essential protein to families who eat meat only a few times a year."
                ctaLink={SQUARE_LINK}
                ctaText="Order Now"
            />

        </div>
    );
}
