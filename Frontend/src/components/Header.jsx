'use client'

import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'

import {
    ScaleIcon,
    DocumentTextIcon,
    CalendarIcon,
    BookOpenIcon,
    ExclamationCircleIcon,
    IdentificationIcon
} from '@heroicons/react/24/outline'

import { ChevronDownIcon} from '@heroicons/react/20/solid'

const products = [
    { name: 'Imprisonment & Compensation', description: 'Track imprisonment duration and calculate potential compensation amounts', href: '#', icon: CalendarIcon }, 
    { name: 'Document Assistance', description: 'Help with drafting and managing legal documents', href: '#', icon: DocumentTextIcon },
    { name: 'Legal Advice', description: 'network of legal professionals who can offer advice or represent users if needed', href: '#', icon: BookOpenIcon },
    { name: 'Offense Types', description: 'Explore different types of offenses and their legal implications', href: '#', icon: IdentificationIcon },
    { name: 'Allegation Details', description: 'Understand the nature of allegations and their impact on bail decisions', href: '#', icon: ExclamationCircleIcon },
]

export default function Header() {

  return (
    <header className="bg-navy text-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 justify-between">
            <a href="#" className="-m-1.5 p-1.5 justify-between items-center border border-gold rounded-full bg-navy hover:bg-gray-800 hover:border-gray-400 ease-in-out">
                <ScaleIcon className="h-8 w-8 text-gold" aria-hidden="true" />
            </a>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12 text-white">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Features
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Bail Eligiblity
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Dashboard
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end text-white">
          <a href="#" className="text-sm font-semibold leading-6">
            Log in / Sign up <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      
      </nav>
    </header>
  )
}
