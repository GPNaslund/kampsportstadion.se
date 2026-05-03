import { ReactNode } from 'react';
import Container from './container';
import Eyebrow from './eyebrow';
import Heading from './heading';
import Section from './section';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description, actions }: Props) {
  return (
    <Section pad="tight" className="pt-32 w-900:pt-40">
      <Container variant="wide">
        <div className="grid w-900:grid-cols-12 gap-8 w-900:gap-16 items-end">
          <div className="w-900:col-span-8">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading level={1} size="xl" className="mt-3">
              {title}
            </Heading>
            {description && (
              <p className="mt-6 max-w-prose text-[17px] w-900:text-[19px] leading-relaxed text-ink-soft">
                {description}
              </p>
            )}
          </div>
          {actions && (
            <div className="w-900:col-span-4 flex flex-wrap gap-3 w-900:justify-end">
              {actions}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
