import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SectionHeading } from "./SectionHeading";

// Mock the Reveal component to avoid framer-motion complexity in tests
vi.mock("./Reveal", () => ({
  Reveal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("SectionHeading", () => {
  it("renders the eyebrow and title correctly", () => {
    render(<SectionHeading eyebrow="Test Eyebrow" title="Test Title" />);

    expect(screen.getByText("Test Eyebrow")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    // description should not be rendered
    expect(screen.queryByText(/Test Description/i)).not.toBeInTheDocument();
  });

  it("renders the description conditionally when provided", () => {
    render(
      <SectionHeading
        eyebrow="Test Eyebrow"
        title="Test Title"
        description="Test Description"
      />
    );

    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
