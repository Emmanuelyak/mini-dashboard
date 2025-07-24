import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartOneData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 286 },
];
const chartTwoData = [
  { routes: "/index", rate: 186 },
  { routes: "/about", rate: 286 },
  { routes: "/login", rate: 286 },
  { routes: "/apply", rate: 286 },
];

const chartOneConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
const chartTwoConfig = {
  desktop: {
    label: "rate",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
// const chartConfigMixed = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
// } satisfies ChartConfig;

export const description2 = "A mixed bar chart";

const chartDataMixed = [
  { country: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { country: "safari", visitors: 200, fill: "var(--color-safari)" },
  { country: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { country: "edge", visitors: 173, fill: "var(--color-edge)" },
  { country: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfigMixed = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-4)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-6)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartBarMixed() {
  return (
    <Card className="w-full ">
      <CardHeader>
        <CardTitle>Visitors by the country</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfigMixed}>
          <BarChart
            accessibilityLayer
            data={chartDataMixed}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="country"
              type="category"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) =>
                chartConfigMixed[value as keyof typeof chartConfigMixed]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export function ChartOne() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Inbound - outbound </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartOneConfig}>
          <BarChart accessibilityLayer data={chartOneData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis dataKey="desktop" type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export function ChartTwo() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Inbound - outbound </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartTwoConfig}>
          <BarChart accessibilityLayer data={chartTwoData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="routes"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 7)}
            />
            <YAxis dataKey="rate" type="number" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="rate" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}