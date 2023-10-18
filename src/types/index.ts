import * as React from 'react'

export interface LayoutProps {
  children: React.ReactNode
}

export interface NavItem {
  title: string
  href: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export interface Item {
  title: string
  description: string
  image?: string
}

export interface Subcategory extends Item {
  items: Item[]
}

export interface Category extends Item {
  subcategories: Subcategory[]
  slug?: string
}
