'use client'
import React,{useState} from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export default function AreYouSure({name,action,open = true,description = "",buttonStyle="button-system flex-row px-3 mr-1 h-6 sm:h-8 transition-button-A"}){
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return(
  <Dialog.Root >
    <Dialog.Trigger asChild>
      <button className={buttonStyle}>
        {name}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-semitransparent data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[80vw] max-w-[450px] translate-x-[-55%] translate-y-[-50%] text-backing bg-bg_primary">
        <Dialog.Title className="text-backing mx-8 max-w-[80vw] justify-self-center mb-0">
        {open? "Are you sure?" : "Nothing has been Selected."}
        </Dialog.Title>
        <span className = "text-xs">{open? description: ""}</span>
        <div className="flex justify-center pt-2">
          
          {open?
          <form action={action} method="post">
              <button className="button-system data-[state=closed]: hover:bg-bg_secondary_alt hover:text-text_primary flex-row text-sm sm:text-base px-5 mx-2 h-6 sm:h-8 transition-button-A" type = "submit" name='action'>{name}</button>
          </form>

          :  
            <div></div>
          }
          <Dialog.Close asChild>
          <button
              className="button-system flex-row text-sm sm:text-base px-5 mx-2 h-6 sm:h-8 transition-button-A"
              aria-label="Close"
            >Cancel
            </button>
          </Dialog.Close>
        </div>

      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>)
};