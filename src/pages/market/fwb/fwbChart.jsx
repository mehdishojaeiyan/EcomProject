import React, { useEffect, useRef } from 'react';

const FWBChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // تعیین اندازه canvas
    canvas.width = 110;
    canvas.height = 60;

    // تابع برای ایجاد مقادیر با فراز و نشیب
    const generateDataWithFluctuations = (numPoints) => {
      const data = [];
      let currentValue = 60; // مقدار ابتدایی
      const maxFluctuation = 20; // حداکثر تغییرات
      for (let i = 0; i < numPoints; i++) {
        // افزودن تغییرات تصادفی به مقدار فعلی
        const fluctuation = (Math.random() - 0.5) * maxFluctuation;
        currentValue += fluctuation;

        // محدود کردن مقادیر بین 0 و 100
        currentValue = Math.max(0, Math.min(100, currentValue));

        data.push(currentValue);
      }
      return data;
    };

    // ایجاد مقادیر با فراز و نشیب
    const fluctuatingData = generateDataWithFluctuations(40);

    // تابع برای رسم نمودار خطی
    const drawChartCard = (data) => {
      const pointWidth = canvas.width / data.length;

      context.clearRect(0, 0, canvas.width, canvas.height);

      // تنظیم رنگ خط نمودار
      context.strokeStyle = '#363062';

      context.beginPath();
      context.moveTo(0, canvas.height - (data[0] / 100) * canvas.height);

      data.forEach((value, index) => {
        const x = index * pointWidth;
        const y = canvas.height - (value / 100) * canvas.height;
        context.lineTo(x, y);
      });

      // اتمام خط نمودار
      context.stroke();
      context.closePath();

      // تنظیم رنگ ناحیه زیر نمودار با رنگ خط نمودار
      const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(18,173,4,1)');
      gradient.addColorStop(1, 'rgba(255, 167, 35, 0)');
      context.fillStyle = gradient;

      // رسم مستطیل به عنوان ناحیه زیر نمودار
      context.beginPath();
      context.lineTo(0, canvas.height);
      data.forEach((value, index) => {
        const x = index * pointWidth;
        const y = canvas.height - (value / 100) * canvas.height;
        context.lineTo(x, y);
      });
      context.lineTo(canvas.width, canvas.height);
      context.closePath();
      context.fill();
    };

    // رسم نمودار خطی با استفاده از مقادیر با فراز و نشیب
    drawChartCard(fluctuatingData);
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FWBChart;
