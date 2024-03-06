import PropTypes from "prop-types";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

const productSales = [
  {
    xname: "100",
    yname: "0",
    product1: 45,
  },
  {
    xname: "500",
    yname: "20",
    product1: 40,
  },
  {
    xname: "1,000",
    yname: "40",
    product1: 55,
  },
  {
    xname: "1,500",
    yname: "60",
    product1: 65,
  },
  {
    xname: "2,000",
    yname: "80",
    product1: 35,
  },
  {
    xname: "2,500",
    yname: "100",
    product1: 45,
  },
  {
    xname: "3,000",
    product1: 48,
  },
  {
    xname: "3,500",
    product1: 33,
  },
  {
    xname: "4,000",
    product1: 39,
  },
  {
    xname: "4,500",
    product1: 64,
  },
];

const Visitors = () => {
  const yAxisValues = productSales.map((data) => parseFloat(data.yname));

  return (
    <>
      <div className="w-full h-[329.12px] shadow-md rounded-md bg-[#3D3B35]">
        <h1 className="text-[#FFFFFF] font-normal my-2 px-4 py-1">Visitors</h1>

        <ResponsiveContainer width="100%" height="83%">
          <AreaChart width={500} height={400} data={productSales}>
            <YAxis
              dataKey={"yname"}
              axisLine={false}
              tickLine={false}
              label={{
                value: "Days",
                angle: -90,
                position: "insideLeft",
                dy: -10,
              }}
            />

            <XAxis
              dataKey="xname"
              axisLine={false}
              tickLine={false}
              label={{
                value: "Visitors",
                position: "insideBottom",
                dy: 10,
              }}
            />

            <Tooltip content={<CustomTooltip />} />

            {yAxisValues.map((value, index) => (
              <ReferenceLine
                key={index}
                y={value}
                stroke="#FFFFFF"
                strokeWidth={0.1}
                strokeDasharray="0"
              />
            ))}

            <Area
              type="monotone"
              dataKey="product1"
              stroke="#00000033"
              fill="#00000033"
              stackId="1"
              dot={{ stroke: "#D8A409", fill: "#D8A409", strokeWidth: 1 }}
              strokeWidth={2}
              strokeDasharray="0"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-[#FFFFFF] flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">Visitor</p>
        <p className="text-lg text-[#000000] font-semibold">
          <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Visitors;
