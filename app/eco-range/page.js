import { Band } from '../../components/ui';
import { PageHero, SectionHead, Callout, EcoList, Split, Cta } from '../../components/blocks';
import { eco, ecoItems } from '../../content/site';

export const metadata = { title: 'Eco Range', description: 'Bamboo, cork, kraft and cotton corporate gifts branded to the same standard, ready for sustainable procurement rules.' };

export default function EcoRange() {
  const p = eco;
  return (
    <>
      <PageHero {...p.hero} crumb="Eco Range" />
      <Band tone="paper" cols="42fr 58fr">
        <div className="laro-col">
          <SectionHead tone="light" layout="stacked" size="small" {...p.intro} />
          <Callout {...p.callout} />
        </div>
        <div className="laro-col"><EcoList items={ecoItems} notes /></div>
      </Band>
      <Band cut="dark">
        <Split {...p.split} side="right" tone="dark" />
      </Band>
      <Band top={20}><Cta {...p.cta} buttons={[{ text: 'Request a quote', href: '/contact' }, { text: 'Call +251 954 676 767', href: 'tel:+251954676767' }]} /></Band>
    </>
  );
}
