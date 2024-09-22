'use client'; // This marks the component as a Client Component

import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import AreYouSure from './AreYouSure';
import {deleterFunction} from '../actions/dbDelete';
import {updateFunction} from '../actions/dbUpdate'; // Assuming you have an edit function

export default function SelectorClient({ arrays, names, type }) {
  const [selectedValue, setSelectedValue] = useState('None Selected');
    const typeName = type.type
  const SelectBlock = ({ name, choicesArray }) => (
    <div>
      <Select.Group>
        <Select.Label className="px-[25px] text-xs leading-[25px] text-text_secondary outline-A mb-3 rounded-3xl">
          {name}
        </Select.Label>
        {choicesArray?.map((item) => (
          <SelectItem value={item} key={item}>
            {item}
          </SelectItem>
        ))}
      </Select.Group>
      <Select.Separator className="h-5" />
    </div>
  );

  return (
    <Select.Root onValueChange={(value) => setSelectedValue(value)}>
      <div className="flex flex-row justify-between px-2 sm:px-12">
        <Select.Trigger
          className="inline-flex items-center transition-button-A button-secondary text-xs text-text_primary px-3 py-2 sm:py-2 mb-3 mx-1 sm:px-12 sm:text-lg flex-row justify-start"
          aria-label={typeName}
        >
          <Select.Value placeholder="Select" />
          <Select.Icon className="text-text_primary">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <div className="flex flex-row">
          <form onSubmit={() => updateFunction(typeName, selectedValue)}>
            <button className="button-secondary transition-button-A flex flex-row px-3 py-2 sm:py-2 mb-3 mx-1 sm:px-12 sm:text-lg text-center text-xs text-text_primary sm:mx-12">
              Edit
            </button>
          </form>
          <AreYouSure 
            name="Delete" 
            open = {(selectedValue==="None Selected")? false:true}
            action={() => {deleterFunction(typeName, selectedValue);setSelectedValue("None Selected");}} 
            description="This will be permanent." 
            buttonStyle="button-system flex-row px-3 py-2 sm:py-2 mb-3 mx-1 sm:px-12 sm:text-lg transition-button-A text-xs" 
          />
        </div>
      </div>
      <Select.Portal className="h-[50vh] fixed top-[190px]">
        <Select.Content className="overflow-hidden option-backing forced-outline shadow-lg shadow-black">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] text-text_secondary cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[1px]">
            {arrays.map((items, i) => (
              <SelectBlock name={names[i]} choicesArray={items} key={names[i]} />
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] cursor-default text-text_secondary">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});
