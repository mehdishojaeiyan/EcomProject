import React, { useEffect, useRef } from 'react';

const ChartCard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // تعیین اندازه canvas
    canvas.width = 210;
    canvas.height = 130;

    // تابع برای ایجاد مقادیر تصادفی
    const generateRandomData = (numPoints) => {
      const data = [];
      for (let i = 0; i < numPoints; i++) {
        data.push(Math.random() * 100); // مقادیر تصادفی بین 0 و 100
      }
      return data;
    };

    // ایجاد مقادیر تصادفی
    const randomData = generateRandomData(20);

    // تابع برای رسم نمودار خطی
    const drawChartCard = (data) => {
      const pointWidth = canvas.width / data.length;

      context.clearRect(0, 0, canvas.width, canvas.height);

      // تنظیم رنگ خط نمودار
      context.strokeStyle = '#4d4c7d';

      context.beginPath();
      context.moveTo(0, canvas.height - (data[0] / 100) * canvas.height);

      data.forEach((value, index) => {
        const x = index * pointWidth;
        const y = canvas.height - (value / 100) * canvas.height;
        context.lineTo(x, y);
        context.stroke();

        // تنظیم رنگ ناحیه زیر نمودار با رنگ خط نمودار
        const gradient = context.createLinearGradient(canvas.height,0, y, 0 );
        gradient.addColorStop(0, 'rgba(0, 0, 128, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 0, 128, 0)');
        context.fillStyle = gradient;
        context.fill();
      });
      context.closePath();
    };

    // رسم نمودار خطی با استفاده از مقادیر تصادفی
    drawChartCard(randomData);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ChartCard;
