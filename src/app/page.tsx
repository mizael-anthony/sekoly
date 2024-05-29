"use client";

import Link from "next/link";
import { Navbar, Button } from "flowbite-react";

export default function Home() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="#">
        <img src="/school.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Sekoly</span>
      </Navbar.Brand>
      <div className="flex items-center md:order-2">
        <Button>Get Started</Button>
      <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
