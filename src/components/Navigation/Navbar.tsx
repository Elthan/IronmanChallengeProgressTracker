import { Disclosure } from '@headlessui/react'
import Branding from './Branding';
import Hamburger from './Hamburger';
import ButtonLink from './ButtonLink';

const navigation = [
  { name: 'Progress', href: '#', current: false },
  { name: 'Challenge', href: '#', current: false },
  { name: 'About Me', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-zinc-800 sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">

              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Hamburger open={open} />
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Navigation Branding */}
                <Branding 
                  name="EdisonPark"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/7bc3f928-d053-469d-83be-d7e8c7a5fe1c-profile_image-70x70.png"
                />
                
                {/* Navigation Links  */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-zinc-700 text-white' : 'text-gray-300 hover:bg-zinc-500 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Action (Link to Stream) */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ButtonLink 
                  text="Watch" 
                  href='https://www.twitch.tv/edisonparklive'
                />
              </div>
            </div>
          </div>

          {/* Navigation Links on Mobile  */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-zinc-700 text-white' : 'text-gray-300 hover:bg-zinc-500 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium text-center'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}