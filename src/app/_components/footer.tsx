"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface FooterLinkProps {
  label: string;
  href: string;
}

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const companyLinks = [
    { label: "About us", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "FAQ's", href: "#" },
    { label: "Careers with us", href: "#" },
    { label: "Feedback", href: "#" },
    { label: "Report a problem", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Safety Guide", href: "#" },
    { label: "Support", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <footer className="bg-[#1C2128] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo and Tagline */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">HexaHome</h2>
          <p className="text-lg mb-8">
            Join the Hexahome community and unlock<br className="hidden md:block" />
            a world of Real Estate possibilities.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="bg-white p-2.5 rounded-full hover:bg-gray-100 transition-colors"
            >
              <link.icon className="w-6 h-6 text-[#1C2128]" />
            </a>
          ))}
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <div className="grid grid-cols-2 gap-4">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Our Branches */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Our Branches</h3>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
              Hexadecimal Software
            </a>
          </div>

          {/* Tools */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Tools</h3>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
              Area Converter
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Contact</h3>
          <div className="space-y-4">
            <p>
              Corporate Park, Tower-A1, Sector 142,<br />
              Noida, Uttar Pradesh 201305
            </p>
            <p>
              <a
                href="mailto:support@hexadecimalsoftware.com"
                className="hover:text-gray-300 transition-colors"
              >
                support@hexadecimalsoftware.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919311214726"
                className="hover:text-gray-300 transition-colors"
              >
                +91 93112 14726
              </a>
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-sm text-gray-400 mb-8">
          <p>
            Usage of HexaHome.in to upload content showing area in non standard units or which enables targeting by religion/community/caste/race is prohibited. Please report inappropriate content by writing to us at{" "}
            <a href="#" className="underline hover:text-white">
              report abuse
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p>All rights reserved - © 2024 Hexadecimal Software PVT LTD</p>
        </div>
      </div>
    </footer>
  );
}