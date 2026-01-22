import { IMAGES } from '../data/imageAssets'; // Reusing some village images

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';
import { AppealImpact } from '@/components/templates/appeal/AppealImpact';
import { AppealCinematicStory } from '@/components/templates/appeal/AppealCinematicStory';
import { AppealQuote } from '@/components/templates/appeal/AppealQuote';
import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/PaNdJVqa';

// Data (Using generic/reused assets where specific ones are missing)
const GALLERY_IMAGES = [
    { src: IMAGES.QURBANI.COMMUNITY_GATHERING, alt: 'Community gathering' }, // Reusing gathering
    { src: IMAGES.WATER.TANK_VILLAGE_1, alt: 'Village center' },
    { src: IMAGES.EDUCATION.KIDS_CLASSROOM, alt: 'Children studying' },
    { src: IMAGES.WATER.SIGNAGE_INSTALL_1, alt: 'Community construction' },
];

const FAQ_ITEMS = [
    { question: 'Is this donation Sadaqah Jariyah?', answer: 'Yes, building a Masjid is one of the best forms of Sadaqah Jariyah (continuous charity), rewarding you as long as it is used.' },
    { question: 'What is the capacity of the Masjid?', answer: 'Our standard village Masjid is designed to accommodate 100-150 worshippers comfortably.' },
    { question: 'How long does construction take?', answer: 'Construction typically takes 3-6 months depending on the location and weather conditions.' },
    { question: 'Can I name the Masjid?', answer: 'Yes, major donors can dedicate the Masjid in the name of a loved one. A plaque will be placed at the entrance.' },
];

export function MasjidAppeal() {
    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero */}
            <AppealHero
                title="Build a Masjid"
                subtitle="Build and restore masjids in communities where access to places of worship and learning is limited, creating safe spaces for prayer and community support. Your contribution helps ensure that these sacred spaces remain accessible, welcoming, and equipped to serve future generations."
                badge="Sadaqah Jariyah"
                image={IMAGES.MASJID.MAIN}
                ctaLink={SQUARE_LINK}
            />

            {/* Problem */}
            <AppealProblem
                label="Spiritual & Community Center"
                title="More Than Just a Building"
                intro={
                    <>
                        <p>
                            For many rural communities, there is no designated place for prayer. Villagers gather under trees or in makeshift structures exposed to the elements to perform their Salah.
                        </p>
                        <p>
                            A Masjid provides shelter, dignity, and a permanent center for the community. It serves as a school for children, a hall for community decisions, and a sanctuary for spiritual connection.
                        </p>
                    </>
                }
                bullets={[
                    "Permanent place for 5 daily prayers",
                    "Center for Quranic education (Madrasa)",
                    "Community hub for weddings & gatherings"
                ]}
                image={{
                    src: IMAGES.QURBANI.COMMUNITY_GATHERING,
                    alt: "Community gathering for prayer"
                }}
            />

            {/* Impact */}
            <AppealImpact
                title="A Legacy of Faith"
                subtitle="Your contribution builds a lasting structure that will serve generations. Every prayer performed there will add to your scale of good deeds."
                images={GALLERY_IMAGES}
            />

            {/* Cinematic Story */}
            <AppealCinematicStory
                background={IMAGES.WATER.TANK_LANDSCAPE}
                personName="The Village Heart"
                personImage={IMAGES.EDUCATION.BOY_NOTEBOOK}
                personImageAlt="Child learning Quran"
                story={
                    <>
                        <p>
                            "Before the Masjid, we prayed on the hot sand, creating lines in the dust. When it rained, we could not gather. Our children had no proper place to learn."
                        </p>
                        <p>
                            "Now, the Adhan calls us to a beautiful, clean space. Our children sit on mats learning the Book of Allah. This build has united our hearts and given us dignity."
                        </p>
                    </>
                }
                quote="Whoever builds a mosque for Allah, Allah will build for him a house like it in Paradise."
            />

            {/* Quote */}
            <AppealQuote
                image={IMAGES.QURBANI.QUEUE_OUTSIDE}
                imageAlt="Community waiting"
                quote={
                    <>
                        <span className="text-brand-primary">"The Masjid is the anchor."</span> It is where the hungry are fed, where disputes are settled, and where the name of Allah is raised.
                    </>
                }
                author="Imam Abdullah"
                role="Community Leader"
            />

            {/* FAQ */}
            <AppealFAQ
                items={FAQ_ITEMS}
            />

            {/* CTA */}
            <AppealCTA
                title="Build Your House in Jannah"
                text="A Masjid is more than a building; it is the heart of the community. Build a legacy that lasts forever."
                ctaLink={SQUARE_LINK}
            />

        </div>
    );
}
