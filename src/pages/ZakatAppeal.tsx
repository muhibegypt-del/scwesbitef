import { IMAGES } from '../data/imageAssets';
import { AppealHero } from '@/components/templates/appeal/AppealHero';

const SQUARE_LINK = 'https://square.link/u/d5fSYpG9';

export function ZakatAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppealHero
        title="Zakat"
        subtitle="Provide Zakat to support vulnerable families and communities in need. Your contribution helps meet essential needs such as food, education, and basic living expenses for those struggling due to poverty, conflict, or other hardships. By giving Zakat through our programs, you ensure that your contribution reaches the people who need it most."
        badge="Zakat"
        image={IMAGES.FOOD_PARCEL.COMMUNITY_DISTRIBUTION}
        ctaLink={SQUARE_LINK}
      />
    </div>
  );
}
