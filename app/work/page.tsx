import type { Metadata } from 'next';
import { PageHero } from '@/components/Blocks';
import ProjectGrid from '@/components/ProjectGrid';

export const metadata: Metadata = { title: 'Work', description: 'Portfolio of LARO Advertising PLC: 3D corporate flags, signage, corporate gifts and gift boxes, printing, Adey Abeba carpets and event projects for institutions across Ethiopia.' };

export default function WorkPage() {
  return (
    <>
      <PageHero crumb="Work" title="Our Work" lead="3D corporate flags, signage, gift boxes, printing, Adey Abeba carpets and event environments, produced and installed for institutions and businesses across Ethiopia. Search or browse by service." />
      <section className="sec" style={{ paddingTop: 'clamp(40px, 4cqi, 64px)' }}><div className="container"><ProjectGrid /></div></section>
    </>
  );
}
