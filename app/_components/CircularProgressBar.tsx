import React from "react";

interface CircularProgressBarProps {
  value?: number; // القيمة المكتملة (مثلاً 6)
  total?: number; // القيمة الإجمالية (مثلاً 7)
  size?: number; // حجم SVG (يمكنك تعديله)
  strokeWidth?: number; // سمك الدائرة
  bgColor?: string; // لون الدائرة الخلفية (غير المكتملة)
  progressColor?: string; // لون الجزء المكتمل
  textColor?: string; // لون النص الموجود في الوسط
  fontSize?: string; // حجم الخط
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value = 6,
  total = 7,
  size = 120,
  strokeWidth = 20,
  bgColor = "#e6e6e6",
  progressColor = "#618B44",
  textColor = "#333",
  fontSize = "20px"
}) => {
  const percentage = (value / total) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <svg width={size} height={size}>
      <circle
        stroke={bgColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={progressColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill={textColor}
        fontSize={fontSize}
      >
        {value}/{total}
      </text>
    </svg>
  );
};

export default CircularProgressBar;