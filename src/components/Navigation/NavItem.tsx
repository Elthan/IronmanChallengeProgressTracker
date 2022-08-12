import React from 'react';
import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'


interface NavItemProps {
  isCollapsible?: boolean,
  active: boolean,
  text: string,
  href: string,
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function getActiveLinkStyle(active: boolean) {
  return (
    active ? 'bg-zinc-700 text-white' : 'text-gray-300 hover:bg-zinc-500 hover:text-white'
  );
}

export default function NavItem(props: NavItemProps) {
  if (!props.isCollapsible) {
    return (
      <NavLink
        to={props.href}
        aria-current={props.active ? 'page' : undefined}
        className={({ isActive }) => classNames(
          getActiveLinkStyle(isActive), 
          'px-3 py-2 rounded-sm text-sm font-medium focus-ring'
        )}
      >
        {props.text}
      </NavLink> 
    );
  }

  return (
    <Disclosure.Button
      key={props.text}
      to={props.href}
      as={NavLink}
      className={classNames(
        getActiveLinkStyle(props.active),
        'block px-3 py-2 rounded-md text-base font-medium text-center focus-ring'
      )}
      aria-current={props.active ? 'page' : undefined}
    >
      {props.text}
    </Disclosure.Button>
  );
}