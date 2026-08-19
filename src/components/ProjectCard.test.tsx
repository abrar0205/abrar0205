import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../data/projects";

const mockProject: Project = {
  title: "Test Project",
  type: "Web Application",
  outcome: "A fully functional test outcome.",
  proof: ["React", "Vitest", "Testing Library"],
  stack: ["TypeScript", "Tailwind CSS"],
  github: "https://github.com/test/test-repo",
};

describe("ProjectCard", () => {
  it("renders correctly with given project data", () => {
    render(<ProjectCard project={mockProject} />);

    // Check title
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();

    // Check type
    expect(screen.getByText(mockProject.type)).toBeInTheDocument();

    // Check outcome
    expect(screen.getByText(mockProject.outcome)).toBeInTheDocument();

    // Check proof items
    mockProject.proof.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    // Check stack items (joined by ' · ')
    expect(screen.getByText(mockProject.stack.join(" · "))).toBeInTheDocument();
  });

  it("contains correct link attributes", () => {
    render(<ProjectCard project={mockProject} />);

    // Check if the anchor tag is correct
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", mockProject.github);
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noreferrer noopener");
  });
});
