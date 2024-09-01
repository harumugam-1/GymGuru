import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {doLogout} from '../actions/index'
import { RiCloseFill } from 'react-icons/ri';

export default function LogOut(){
  return(
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="button-system flex-row px-3 mr-1 h-6 sm:h-8 transition-button-A">
         Sign Out
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-semitransparent data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[60vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] text-backing bg-bg_primary">
        <Dialog.Title className="text-backing my-8 max-w-[70vw] justify-self-center">
          Are you sure?
        </Dialog.Title>
        
        <div className="flex justify-center">
          <form action={doLogout}>
              <button className="button-system flex-row text-sm sm:text-base px-5  h-6 sm:h-8 transition-button-A" type = "submit" name='action'>
                Sign Out
              </button>
          </form>
        </div>
        <Dialog.Close asChild>
          <button
            className="absolute top-[5px] right-[5px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full outline-white outline-none -outline-offset-[5.5px] outline-[2px] hover:outline-2 hover:text-text_path hover:outline-text_path transition-button-A"
            aria-label="Close"
          >
            <RiCloseFill />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>)
};