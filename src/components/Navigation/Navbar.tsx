import React from 'react';
import { Disclosure } from '@headlessui/react'
import Branding from './Branding';
import Hamburger from './Hamburger';
import ButtonLink from './ButtonLink';
import NavItem from './NavItem';
import { TWITCHPAGE, TWITCHICON } from '../../constants/Twitch';

const navigation = [
  { name: 'Progress', href: '/', current: false },
  // { name: 'Challenge', href: 'challenge', current: false },
  { name: 'About', href: 'about', current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-zinc-800 sticky top-0 z-50 drop-shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">

              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Hamburger open={open} />
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Navigation Branding */}
                <a className="flex rounded-md focus-ring" href='/'>
                  <Branding 
                    name="EdisonPark"
                    src={TWITCHICON}
                  />
                </a>
                
                {/* Navigation Link Items  */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavItem 
                        active={item.current}
                        text={item.name}
                        href={item.href}
                        key={item.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action (Link to Stream) */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ButtonLink 
                  text="Watch" 
                  href={TWITCHPAGE}
                />
              </div>
            </div>
          </div>

          {/* Navigation Lin Items on Mobile  */}
          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavItem 
                    isCollapsible
                    active={item.current}
                    text={item.name}
                    href={item.href}
                    key={item.name}
                  />
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}