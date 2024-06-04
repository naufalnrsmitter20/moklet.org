"use client";

import { H3 } from "@/app/_components/global/Text";
import { countElements } from "@/utils/atomics";

import { BarChart, PieChart } from "./Chart";
import SummaryTable from "./SummaryTable";

interface SummaryProps {
  question: string;
  submissions: string[];
}

export function ListSummary({ question, submissions }: SummaryProps) {
  return (
    <div className="block bg-neutral-200 px-3 py-2 rounded-lg">
      <H3 className="mb-2">{question}</H3>
      <SummaryTable data={submissions} />
    </div>
  );
}

export function PieChartSummary({ question, submissions }: SummaryProps) {
  return (
    <div className="block bg-neutral-200 px-3 py-2 rounded-lg">
      <H3 className="mb-2">{question}</H3>
      <PieChart
        data={countElements(submissions).map((item) => ({
          value: item.count,
          name: item.value as string,
        }))}
      />
    </div>
  );
}

export function BarChartSummary({ question, submissions }: SummaryProps) {
  return (
    <div className="block bg-neutral-200 px-3 py-2 rounded-lg">
      <H3 className="mb-2">{question}</H3>
      <BarChart
        data={countElements(submissions).map((item) => ({
          value: item.count,
          name: item.value as string,
        }))}
      />
    </div>
  );
}
