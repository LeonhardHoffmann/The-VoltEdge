import React from 'react';
import { Table } from 'lucide-react';

const TruthTableGenerator = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 min-h-[60vh]">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-emerald-50 rounded-xl">
           <Table className="w-8 h-8 text-emerald-600" />
        </div>
        <div>
           <h1 className="text-3xl font-bold text-slate-900">Truth Table Generator</h1>
           <p className="text-slate-500">Generate tables from boolean expressions.</p>
        </div>
      </div>
      
      <div className="border-2 border-dashed border-slate-200 rounded-xl p-12 text-center bg-slate-50">
        <p className="text-slate-400">Truth Table Generator inputs and result table will be displayed here.</p>
      </div>
    </div>
  );
};

export default TruthTableGenerator;
