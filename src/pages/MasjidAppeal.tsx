import { IMAGES } from '../data/imageAssets'; // Reusing some village images

// Appeal Template Components
import { AppealHero } from '@/components/templates/appeal/AppealHero';
import { AppealProblem } from '@/components/templates/appeal/AppealProblem';

import { AppealFAQ } from '@/components/templates/appeal/AppealFAQ';
import { AppealCTA } from '@/components/templates/appeal/AppealCTA';

const SQUARE_LINK = 'https://square.link/u/PaNdJVqa';

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
                subtitle="Build and restore masjids in communities where access to places of worship and learning is limited, creating safe spaces for prayer and community support. By supporting the construction and restoration of masjids, you help strengthen faith, preserve identity, and provide a stable environment where communities can grow together.

Your contribution helps ensure that these sacred spaces remain accessible, welcoming, and equipped to serve future generations, fostering unity, resilience, and hope wherever they are needed most."
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
