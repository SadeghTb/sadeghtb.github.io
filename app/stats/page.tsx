import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import Personal from '@/components/Stats/Personal';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Stats',
  description: 'Some statistics about Sadegh Tabassi',
};

export default function StatsPage() {
  return (
    <PageWrapper>
      <article className="post" id="stats">
        <header>
          <div className="title">
            <h2>
              <Link href="/stats">Stats</Link>
            </h2>
          </div>
        </header>
        <Personal />
      </article>
    </PageWrapper>
  );
}
