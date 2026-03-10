import { IMAGES } from '../data/imageAssets';
import { AppealHero } from '@/components/templates/appeal/AppealHero';

const DONATION_LINK = 'https://www.gofundme.com/f/jqtzem-zakat/donate?attribution_id=sl:c4348239-6a19-4a0d-847b-4a610b4d21bf&lang=en_GB&ts=1773086258&utm_campaign=fp_sharesheet&utm_content=amp20_t1&utm_medium=customer&utm_source=copy_link&fundraiserPageParams=cl,o&source=btn_donate';

export function ZakatAppeal() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppealHero
        title="Zakat"
        subtitle="Provide Zakat to support vulnerable families and communities in need. Your contribution helps meet essential needs such as food, education, and basic living expenses for those struggling due to poverty, conflict, or other hardships. By giving Zakat through our programs, you ensure that your contribution reaches the people who need it most."
        image={IMAGES.FOOD_PARCEL.COMMUNITY_DISTRIBUTION}
        ctaLink={DONATION_LINK}
      />
    </div>
  );
}
