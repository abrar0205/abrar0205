import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Navbar } from "./Navbar";

// Mock IntersectionObserver
const observe = vi.fn();
const disconnect = vi.fn();

class MockIntersectionObserver {
  constructor(public callback: IntersectionObserverCallback) {}
  observe = observe;
  unobserve = vi.fn();
  disconnect = disconnect;
}

// Add it to the global scope
globalThis.IntersectionObserver = MockIntersectionObserver as any;

describe("Navbar Component", () => {
  beforeEach(() => {
    // Reset mocks before each test
    observe.mockClear();
    disconnect.mockClear();

    // Mock document.getElementById to return a dummy element so IntersectionObserver works
    vi.spyOn(document, "getElementById").mockImplementation((id) => {
      const el = document.createElement("div");
      el.id = id;
      return el;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);

    const expectedLinks = ["About", "Project", "Experience", "Work", "Skills", "Contact"];

    // We expect 2 sets of links (desktop and mobile)
    expectedLinks.forEach((linkText) => {
      const links = screen.getAllByText(linkText);
      expect(links.length).toBe(2);
      // Ensure hrefs match their labels (lowercased/mapped correctly according to Navbar.tsx)
    });
  });

  it("handles scroll event correctly", () => {
    render(<Navbar />);

    // Initially, it shouldn't have the scrolled class
    const header = screen.getByRole("banner");
    expect(header.className).toContain("border-transparent");

    // Simulate scroll down
    fireEvent.scroll(window, { target: { scrollY: 20 } });

    // Check if the background changes
    expect(header.className).toContain("bg-ink-950/80");
    expect(header.className).toContain("backdrop-blur-xl");

    // Simulate scroll up
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    // Check if it goes back
    expect(header.className).toContain("border-transparent");
  });

  it("toggles mobile menu on button click", () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    const mobileMenu = screen.getAllByRole("list", { hidden: true })[1].parentElement;

    // Check initial state (closed)
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
    expect(mobileMenu?.className).toContain("max-h-0");

    // Click to open
    fireEvent.click(toggleButton);

    // Check if opened
    expect(toggleButton.getAttribute("aria-expanded")).toBe("true");
    expect(mobileMenu?.className).toContain("max-h-96");

    // Click to close
    fireEvent.click(toggleButton);

    // Check if closed again
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
    expect(mobileMenu?.className).toContain("max-h-0");
  });

  it("closes mobile menu when a link is clicked", () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });

    // Open menu
    fireEvent.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("true");

    // Click a link in the mobile menu (the second set of links)
    const mobileAboutLink = screen.getAllByText("About")[1];
    fireEvent.click(mobileAboutLink);

    // Menu should close
    const mobileMenu = screen.getAllByRole("list", { hidden: true })[1].parentElement;
    expect(mobileMenu?.className).toContain("max-h-0");
    // Note: aria-expanded state on the button is derived from 'open' state which was set to false
  });
});
