import React from 'react';
import { Binary } from 'lucide-react';

const BaseConverter = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 min-h-[60vh]">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-orange-50 rounded-xl">
           <Binary className="w-8 h-8 text-orange-600" />
        </div>
        <div>
           <h1 className="text-3xl font-bold text-slate-900">Base Converter</h1>
           <p className="text-slate-500">Hex, Binary, Decimal, Octal translator.</p>
        </div>
      </div>
      
      <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center bg-slate-50">
        <p className="text-slate-400">Input fields for different number bases will be here.</p>
      </div>
    </div>
  );
};

export default BaseConverter;
