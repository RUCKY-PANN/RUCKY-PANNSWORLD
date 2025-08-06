import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import chartData from '@/data/chartData.json';

function SingleRadarChart({ id, labels, values }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            tension: 0,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000,
        },
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 100,
            pointLabels: { font: { size: 12 } },
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });

    return () => chart.destroy();
  }, [labels, values]);

  return (
    <div className="chart_section">
      <p className="chart_title">「R-W」による総合評価</p>
      <canvas ref={canvasRef} id={id} className="canvas_size" />
    </div>
  );
}

export default function ChartRadar({ categoryId }) {
  const selectedChart = chartData.charts.find(
    (chart) => chart.id === categoryId,
  );

  if (!selectedChart) return <div>カテゴリが見つかりません。</div>;

  return (
    <SingleRadarChart
      id={selectedChart.id}
      labels={selectedChart.labels}
      values={selectedChart.values}
    />
  );
}
