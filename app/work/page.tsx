import type { Metadata } from 'next';
import { CtaBand, PageHero } from '@/components/Blocks';
import WorkGrid from '@/components/WorkGrid';

export const metadata: Metadata = { title: 'Work', description: 'Selected branding, printing, signage, promotional, eco-friendly and event projects by LARO Advertising PLC.' };

export default function WorkPage() {
  return (
    <>
      <PageHero crumb="Work" title="Selected work" lead="Brand identities, publications, signage, flags, gifts and event environments, produced and installed for institutions and businesses across Ethiopia." />
      <section className="sec" style={{ paddingTop: 16 }}>
        <div className="container"><WorkGrid /></div>
      </section>
      <CtaBand />
    </>
  );
}
