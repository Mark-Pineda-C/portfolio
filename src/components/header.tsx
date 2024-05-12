"use client";
import { Link } from "@/navigation";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  SolarEarthBoldDuotone,
  SolarLightbulbBoldDuotone,
  SolarLightbulbBroken,
  SvgSpinners180RingWithBg,
} from "./icons";
import { useTheme } from "next-themes";

interface Props {
  translations: {
    projects: string;
    experience: string;
    contact: string;
    english: string;
    spanish: string;
  };
}

export default function Header({ translations }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Navbar onMenuOpenChange={setIsOpen} isMenuOpen={isOpen}>
      <NavbarBrand as="a" href="#" className="text-2xl">
        Mark Pineda
      </NavbarBrand>
      <NavbarContent
        className="max-md:hidden flex gap-4 font-ubuntu"
        justify="center"
      >
        <NavbarItem className="duration-300 hover:text-primary">
          <Link className="capitalize" href={`#projects`}>
            {translations.projects}
          </Link>
        </NavbarItem>
        <NavbarItem className="duration-300 hover:text-primary">
          <Link className="capitalize" href={`#experience`}>
            {translations.experience}
          </Link>
        </NavbarItem>
        <NavbarItem className="duration-300 hover:text-primary">
          <Link className="capitalize" href="#contact">
            {translations.contact}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="flex gap-2 font-ubuntu">
        <NavbarItem>
          <Button
            variant="light"
            color="primary"
            className="text-foreground hover:text-primary"
            isIconOnly
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted ? (
              <>
                {theme === "dark" ? (
                  <SolarLightbulbBroken className="text-xl" />
                ) : (
                  <SolarLightbulbBoldDuotone className="text-xl" />
                )}
              </>
            ) : (
              <SvgSpinners180RingWithBg className="text-xl" />
            )}
          </Button>
        </NavbarItem>
        <Dropdown placement="bottom-end">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                variant="light"
                isIconOnly
                color="primary"
                className="text-foreground hover:text-primary"
              >
                <SolarEarthBoldDuotone className="text-xl" />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu className="font-ubuntu">
            <DropdownItem href="/en">{translations.english}</DropdownItem>
            <DropdownItem href="/es">{translations.spanish}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarMenuToggle
          aria-label={isOpen ? "Close" : "Open"}
          className="md:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="flex flex-col items-center justify-center gap-10">
        <NavbarMenuItem className="text-3xl animate-fade-in animate-delay-200">
          <Link
            className="capitalize"
            href={`#projects`}
            onClick={() => setIsOpen(false)}
          >
            {translations.projects}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="text-3xl animate-fade-in animate-delay-400">
          <Link
            className="capitalize"
            href={`#experience`}
            onClick={() => setIsOpen(false)}
          >
            {translations.experience}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="text-3xl animate-fade-in animate-delay-[600ms]">
          <Link
            className="capitalize"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            {translations.contact}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
