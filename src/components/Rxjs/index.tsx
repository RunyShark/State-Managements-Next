import { Fragment, useRef, useState } from 'react';
import { Switch } from '@headlessui/react';
import { accionControl } from '@/services';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Rxjs() {
  const [enabled, setEnabled] = useState(true);

  const onChange = () => {
    setEnabled(!enabled);
    accionControl.setAccionControl = enabled;
  };

  return (
    <div className="flex flex-col gap-5 border-8 border-indigo-300">
      <h1 className="text-center text-4xl text-white">RJSX</h1>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </div>
  );
}
