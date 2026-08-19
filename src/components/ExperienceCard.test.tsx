import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceCard } from './ExperienceCard';
import type { Experience } from '../data/experience';

describe('ExperienceCard', () => {
  const mockExperience: Experience = {
    company: 'Test Company',
    role: 'Test Role',
    summary: 'Test summary explaining the work done.',
    bullets: ['First achievement', 'Second achievement'],
    stack: ['React', 'TypeScript', 'Tailwind'],
  };

  it('renders company, role, and summary correctly', () => {
    render(<ExperienceCard experience={mockExperience} />);

    expect(screen.getByRole('heading', { name: 'Test Company' })).toBeInTheDocument();
    expect(screen.getByText('Test Role')).toBeInTheDocument();
    expect(screen.getByText('Test summary explaining the work done.')).toBeInTheDocument();
  });

  it('renders all bullet points', () => {
    render(<ExperienceCard experience={mockExperience} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
    expect(screen.getByText('First achievement')).toBeInTheDocument();
    expect(screen.getByText('Second achievement')).toBeInTheDocument();
  });

  it('renders all tech stack tags', () => {
    render(<ExperienceCard experience={mockExperience} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();

    // Verify chip class is applied
    const reactTag = screen.getByText('React');
    expect(reactTag).toHaveClass('chip');
  });

  it('handles empty arrays gracefully without crashing', () => {
    const emptyExperience: Experience = {
      ...mockExperience,
      bullets: [],
      stack: [],
    };

    render(<ExperienceCard experience={emptyExperience} />);

    // Summary, company, role should still be there
    expect(screen.getByText('Test Company')).toBeInTheDocument();

    // List should be empty
    const list = screen.getByRole('list');
    expect(list.children).toHaveLength(0);

    // No tags should be present, so only 1 list (bullets) is rendered
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });
});
