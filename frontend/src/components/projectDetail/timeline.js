import React from 'react';
import { Line } from 'react-chartjs-2';

import { formatTimelineData, formatTimelineTooltip } from '../../utils/formatChartJSData';
import { CHART_COLOURS } from '../../config';

export default function ProjectTimeline({ tasksByDay }: Object) {
  return (
    <Line
      data={formatTimelineData(tasksByDay, CHART_COLOURS.orange, CHART_COLOURS.red)}
      options={{
        legend: { position: 'top', align: 'end', labels: { boxWidth: 12 } },
        tooltips: { callbacks: { label: (tooltip, data) => formatTimelineTooltip(tooltip, data) } },
      }}
    />
  );
}