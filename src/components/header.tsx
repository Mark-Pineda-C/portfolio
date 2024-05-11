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
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Navbar onMenuOpenChange={setIsOpen}>
      <NavbarBrand className="text-2xl">Mark Pineda</NavbarBrand>
      <NavbarContent
        className="max-md:hidden flex gap-4 font-ubuntu"
        justify="center"
      >
        <NavbarItem
          isActive={activeLink === "projects"}
          className="data-[active=true]:text-primary data-[active=true]:font-normal duration-300 hover:text-primary"
        >
          <Link
            className="capitalize"
            onClick={() => setActiveLink("projects")}
            href={`#projects`}
          >
            {translations.projects}
          </Link>
        </NavbarItem>
        <NavbarItem
          isActive={activeLink === "experience"}
          className="data-[active=true]:text-primary data-[active=true]:font-normal duration-300 hover:text-primary"
        >
          <Link
            className="capitalize"
            onClick={() => setActiveLink("experience")}
            href={`#experience`}
          >
            {translations.experience}
          </Link>
        </NavbarItem>
        <NavbarItem
          isActive={activeLink === "contact"}
          className="data-[active=true]:text-primary data-[active=true]:font-normal duration-300 hover:text-primary"
        >
          <Link
            className="capitalize"
            onClick={() => setActiveLink("contact")}
            href="#contact"
            locale="en"
            lang="en"
          >
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
      <NavbarMenu className="font-ubuntu">
        <NavbarMenuItem
          isActive={activeLink === "projects"}
          className="data-[active=true]:text-primary data-[active=true]:font-normal duration-300 hover:text-primary"
        >
          <Link
            className="capitalize"
            onClick={() => setActiveLink("projects")}
            href={`#projects`}
          >
            {translations.projects}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem
          isActive={activeLink === "experience"}
          className="data-[active=true]:text-primary data-[active=true]:font-normal duration-300 hover:text-primary"
        >
          <Link
            className="capitalize"
            onClick={() => setActiveLink("experience")}
            href={`#experience`}
          >
            {translations.experience}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem
          isActive={activeLink === "contact"}
          className="data-[active=true]:text-primary data-[active=true]:font-normal duration-300 hover:text-primary"
        >
          <Link
            className="capitalize"
            onClick={() => setActiveLink("contact")}
            href="#contact"
            locale="en"
            lang="en"
          >
            {translations.contact}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
